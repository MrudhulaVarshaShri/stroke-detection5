Stroke Detection System  

📌 Project Overview

This is a full-stack web application that assesses stroke risk using a rule-based scoring system.

Users input health parameters such as age, glucose level, and BMI. The backend processes the input data, calculates a total score, and classifies the result as:

1.High Risk

2.Low Risk

based on a predefined threshold.

The project demonstrates frontend–backend integration using React and Flask.

⚙️ Tech Stack

1.Frontend: React

2.Backend: Flask

3.API Communication: REST API

4.Languages: Python, JavaScript

🧠 Prediction Logic

1.The application uses a rule-based classification approach:

2.User enters health data in the frontend.

3.Data is sent to the Flask backend via a POST request.

4.The backend sums the input values.

5.If the total score is greater than 50, the result is High Risk.

Otherwise, the result is Low Risk.

This approach demonstrates backend processing and classification logic. The system can be extended in the future with a trained machine learning model.

🚀 Running the Backend

cd backend
pip install -r requirements.txt
python app.py

Backend runs on:

http://localhost:5000

🚀 Running the Frontend
cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000
