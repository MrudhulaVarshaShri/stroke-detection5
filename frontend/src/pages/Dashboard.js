import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("history")) || [];

    const formatted = saved.map((item, index) => ({
      name: `Case ${index + 1}`,
      risk: item.result === "High Risk" ? 1 : 0
    }));

    setData(formatted);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Risk Analytics</h1>

      {data.length === 0 ? (
        <p>No data yet.</p>
      ) : (
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="risk" stroke="#6a1b1a" />
        </LineChart>
      )}
    </div>
  );
}

export default Dashboard;