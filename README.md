Stroke Detection System  

📌 Project Overview

This is a full-stack web application that assesses stroke risk using a rule-based scoring system.

Users enter health parameters such as age, glucose level, and BMI through the frontend interface. The backend processes the inputs, calculates a total score, and classifies the result as:

High Risk

Low Risk

based on a predefined threshold value.

This project demonstrates full-stack development, API integration, and backend classification logic.

⚙️ Tech Stack

Frontend: React

Backend: Flask

API Communication: REST API

Languages Used: Python, JavaScript

🧠 Prediction Logic

The system uses a rule-based scoring mechanism:

User inputs health values.

The backend receives the data via a POST request.

All input values are summed.

If the total score is greater than 50, the prediction is High Risk.

Otherwise, the prediction is Low Risk.

This implementation focuses on demonstrating backend integration and classification logic. The system can be extended in the future by integrating a trained machine learning model.

🚀 How to Run the Backend
cd backend
pip install -r requirements.txt
python app.py

Backend will run on:

http://localhost:5000

🚀 How to Run the Frontend
cd frontend
npm install
npm start

The frontend will run on:

http://localhost:3000

📂 Project Structure
stroke-detection5/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
└── README.md

📌 Future Improvements

Integrating a trained machine learning model

Adding more health parameters

Improving risk scoring with weighted logic

Deploying the application to a cloud platform
