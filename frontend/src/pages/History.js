import React, { useEffect, useState } from "react";

function History() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("history")) || [];
    setRecords(saved);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Prediction History</h1>

      {records.length === 0 ? (
        <p>No records yet.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Age</th>
              <th>Glucose</th>
              <th>BMI</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r, index) => (
              <tr key={index}>
                <td>{r.age}</td>
                <td>{r.glucose}</td>
                <td>{r.bmi}</td>
                <td>{r.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default History;