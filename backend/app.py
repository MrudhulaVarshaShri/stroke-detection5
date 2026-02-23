from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Stroke Detection API Running"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    values = list(data.values())
    prediction = "High Risk" if sum(values) > 50 else "Low Risk"
    return jsonify({"prediction": prediction})

if __name__ == "__main__":
    app.run(debug=True, port=5000)