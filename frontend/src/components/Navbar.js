import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>StrokeAI</h2>
      <div>
        <Link to="/predict">Predict</Link>
        <Link to="/">Dashboard</Link>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
}

export default Navbar;