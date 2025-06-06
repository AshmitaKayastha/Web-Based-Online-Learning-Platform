import React from "react";
import { useNavigate } from "react-router-dom";
import { clearActiveUser } from "../LocalStorage";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearActiveUser();
    navigate("/login");
  };

  return (
    <div>
      <nav style={{ background: "#f4511e", padding: "1rem", display: "flex", justifyContent: "space-between", color: "#fff" }}>
        <div style={{ fontWeight: "bold" }}>E-Learning</div>
        <div>
          <a href="/" style={{ margin: "0 1rem", color: "#fff", textDecoration: "none" }}>Home</a>
          <a href="/about" style={{ margin: "0 1rem", color: "#fff", textDecoration: "none" }}>About</a>
          <a href="/courses" style={{ margin: "0 1rem", color: "#fff", textDecoration: "none" }}>Courses</a>
          <button onClick={handleLogout} style={{ marginLeft: "1rem", padding: "0.3rem 0.7rem", cursor: "pointer" }}>Logout</button>
        </div>
      </nav>
      <div style={{ textAlign: "center", paddingTop: "80px", background: "#0288d1", color: "#fff", height: "80vh" }}>
        <h1>Build Your Dream With Passion</h1>
        <p>Learn, Code and start developing your own beautiful websites at no cost.</p>
        <button style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}>Get Start</button>
      </div>
    </div>
  );
};

export default Dashboard;
