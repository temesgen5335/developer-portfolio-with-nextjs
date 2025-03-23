
import pymysql

class DbHelper:
    def __init__(self):
        try:
            self.conn = pymysql.connect(
                host="localhost",
                user="root",
                password="G$$tanshM13",  # Replace with your database password
                database="DocLogs"       # Replace with your database name
            )
            self.mycursor = self.conn.cursor()
            self.create_table()  # Ensure the table exists
        except Exception as e:
            print("Database connection failed:", str(e))

    def create_table(self):
        """Create the table if it doesn't exist."""
        try:
            self.mycursor.execute("""
                CREATE TABLE IF NOT EXISTS qa_log (
                    question TEXT NOT NULL,
                    answer TEXT NOT NULL,
                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            self.conn.commit()
        except Exception as e:
            print("Error creating table:", str(e))

    def log_qa(self, question, answer):
        """Log a question and its answer into the database."""
        try:
            self.mycursor.execute("""
                INSERT INTO qa_log (question, answer) VALUES (%s, %s)
            """, (question, answer))
            self.conn.commit()
            return True
        except Exception as e:
            print("Error logging Q&A:", str(e))
            return False

    def fetch_all_qa(self):
        """Fetch all logged questions and answers."""
        try:
            self.mycursor.execute("SELECT * FROM qa_log ORDER BY timestamp DESC")
            return self.mycursor.fetchall()
        except Exception as e:
            print("Error fetching Q&A:", str(e))
            return []
