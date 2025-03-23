
// Function to send a question to the FastAPI backend
async function askQuestion(question) {
    try {
        const response = await fetch("http://localhost:8000/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ question }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch answer.");
        }

        const data = await response.json();
        return data.answer; // Return the AI's response
    } catch (error) {
        console.error("Error:", error);
        return "An error occurred. Please try again.";
    }
}

// Example: Integrate this function into your website
document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chat-input"); // Input field for user questions
    const chatOutput = document.getElementById("chat-output"); // Element to display AI responses
    const sendButton = document.getElementById("send-button"); // Button to send the question

    sendButton.addEventListener("click", async () => {
        const question = chatInput.value.trim();

        if (!question) {
            alert("Please enter a question.");
            return;
        }

        // Display the user's question
        chatOutput.innerHTML += `<div class="user-message">You: ${question}</div>`;

        // Get the AI's response
        const answer = await askQuestion(question);

        // Display the AI's response
        chatOutput.innerHTML += `<div class="ai-message">AI: ${answer}</div>`;

        // Clear the input field
        chatInput.value = "";
    });
});
