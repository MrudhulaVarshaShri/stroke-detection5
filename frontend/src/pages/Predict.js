import React, { useState } from "react";

function Predict() {
  const [formData, setFormData] = useState({
    age: "",
    glucose: "",
    bmi: ""
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const predictRisk = () => {
    const age = Number(formData.age);
    const glucose = Number(formData.glucose);
    const bmi = Number(formData.bmi);

    if (!age || !glucose || !bmi) {
      alert("Please fill all fields");
      return;
    }

    const finalResult =
      age > 60 || glucose > 140 || bmi > 30
        ? "High Risk"
        : "Low Risk";

    setResult(finalResult);

    const history = JSON.parse(localStorage.getItem("history")) || [];

    history.push({
      age,
      glucose,
      bmi,
      result: finalResult,
      date: new Date().toLocaleString()
    });

    localStorage.setItem("history", JSON.stringify(history));
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
      <h1>Stroke Risk Prediction</h1>

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />

      <input
        type="number"
        name="glucose"
        placeholder="Glucose Level"
        value={formData.glucose}
        onChange={handleChange}
      />

      <input
        type="number"
        name="bmi"
        placeholder="BMI"
        value={formData.bmi}
        onChange={handleChange}
      />

      <button onClick={predictRisk}>Predict</button>

      {result && (
        <div
          style={{
            marginTop: "20px",
            padding: "12px",
            fontWeight: "bold",
            borderRadius: "6px",
            backgroundColor: result === "High Risk" ? "#ffe5e5" : "#e6f4ea",
            color: result === "High Risk" ? "#b71c1c" : "#1b5e20"
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
}

export default Predict;