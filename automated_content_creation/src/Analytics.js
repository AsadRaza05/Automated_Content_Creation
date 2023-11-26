import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import logos from '../src/images/logos.png';
import './App.css';

const Analytics = () => {

  const navigate = useNavigate(); 
  const logout = () => {
    localStorage.clear()
    navigate("/");
    window.location.reload()

  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.seniorproject.xyz/api/videos/test%40gmail.com")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* header */}
      <div className="navbar">
        <div className="logo">
          <img src={logos} alt="ACC" ></img>
        </div>
        <div className="nav-content">
          <a href="/Home">Home</a>
          <a href="/Scheduling">Scheduling</a>
          <a href="/Analytics">Analytics</a>
          <button className="logout-button" onClick={() => navigate("/")}>Logout</button>
        </div>
      </div>

      <div>
    {loading ? (
      <p>Loading...</p>
    ) : Array.isArray(data) && data.length > 0 ? (
      <table>
        <thead>
          <tr>
            <th>Video Type</th>
            <th>Scheduled Time</th>
            <th>Download Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.videoType}</td>
              <td>{item.scheduledTime}</td>
              <td><a href={item.videoUrl}>{item.videoUrl}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No data available</p>
    )}
  </div>

    </div>
  );
}

export default Analytics;
