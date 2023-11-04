import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './App.css';

const Analytics = () => {

  const navigate = useNavigate(); 
  const logout = () => {
    localStorage.clear()
    navigate("/");
    window.location.reload()

  }

  return (
    <div>
      <h1>Automated Content Creation</h1>
      <div className="navbar">
        <a href="/Home">Home</a>
        <a href="/Scheduling">Scheduling</a>
        <a href="/Analytics">Analytics</a>
        <button  className="logout-button" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Analytics;
