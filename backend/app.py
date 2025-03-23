import os
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from langchain_groq import ChatGroq
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains import create_retrieval_chain
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import PyPDFLoader
# from langchain_google_genai import GoogleGenerativeAIEmbeddings
from sentence_transformers import SentenceTransformer

from dotenv import load_dotenv
# from Dbhelper import DbHelper  # Import the DbHelper class

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(title="Gemma Model Document Q&A")

# Add CORS middleware to allow requests from your website
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

# Load API keys
groq_api_key = os.getenv("GROQ_API_KEY")
# os.environ['GOOGLE_API_KEY'] = os.getenv("GOOGLE_API_KEY")

# Initialize LLM
llm = ChatGroq(groq_api_key=groq_api_key, model_name="Gemma2-9b-it")

# Define the prompt template
prompt = ChatPromptTemplate.from_template(
    """
Answer the questions based on the provided context only.
FORMAT THE ANSWER PROPERLY. AVOID ASTRIKES. Pretify the text show BULLET POINTS.
Please provide the most accurate response based on the question 

<context>
{context}
<context>

Questions: {input}
"""
)

# Use absolute path for the PDF file
pdf_path = os.path.abspath("Temesgen Gebreabzgi – Professional Summary.pdf")

# Load PDF and create embeddings
def load_pdf_and_create_embeddings():
    try:
        # Load the PDF file
        loader = PyPDFLoader(pdf_path)
        docs = loader.load()

        # Check if documents were loaded
        if not docs:
            raise HTTPException(status_code=400, detail="No documents were loaded. The PDF might be empty or unreadable.")

        print(f"Number of documents loaded: {len(docs)}")

        # Split documents into chunks
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        final_documents = text_splitter.split_documents(docs)

        # Check if documents were split
        if not final_documents:
            raise HTTPException(status_code=400, detail="No document chunks were created. Please check the PDF content.")

        print(f"Number of document chunks: {len(final_documents)}")

        # Create embeddings and FAISS vector store
        # embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
        model = SentenceTransformer('all-MiniLM-L6-v2')
        embeddings = [model.encode(doc.page_content) for doc in final_documents]
        
        #create FAISS vector store
        vectors = FAISS.from_documents(final_documents, embeddings)
        print(f"Number of vectors in FAISS index: {vectors.index.ntotal}")

        return vectors

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred while loading the PDF: {str(e)}")

# Load PDF and create embeddings at startup
vectors = load_pdf_and_create_embeddings()

# Initialize DbHelper
# db_helper = DbHelper()

@app.get("/ping")
def ping():
    return {"status": "alive"}

# Define the endpoint to answer questions
@app.post("/ask")
async def ask_question(request: Request):
    try:
        data = await request.json()
        question = data.get("question")

        if not question:
            raise HTTPException(status_code=400, detail="Question is required.")

        # Create the document chain and retriever
        document_chain = create_stuff_documents_chain(llm, prompt)
        retriever = vectors.as_retriever()
        retriever_chain = create_retrieval_chain(retriever, document_chain)

        # Invoke the retriever chain with the user's question
        response = retriever_chain.invoke({'input': question})

        # Prepare the response
        result = {
            "answer": response['answer']
        }

        # Log the question and answer in the database
        # db_helper.log_qa(question, response['answer'])

        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred while processing the question: {str(e)}")