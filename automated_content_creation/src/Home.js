import React from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'
import "font-awesome/css/font-awesome.min.css";
// import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const Home = () => {

  
  const location = useLocation();
  // const userEmail = location.state?.userEmail || '';
  const userEmail = location.state?.userEmail || localStorage.getItem('userEmail') || '';



  const navigate = useNavigate(); 

  
  const navigateToScheduling = () => {
    localStorage.setItem('userEmail', userEmail);
    navigate('/Scheduling');
  };

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
        <a href="/Scheduling" onClick={navigateToScheduling}>Scheduling</a>
        <a href="/Analytics">Analytics</a>
        <button  className="logout-button" onClick={logout}>Logout</button>
      </div>

    <div className='home-container'> 

      <section className="hero-section">
        <p>
        {/* <p>User Email: {userEmail}</p> */}
          <h1>Welcome to Your Video Scheduling Platform</h1>
          <h3>Schedule and analyze your videos with ease</h3>
          <Link to="/scheduling" onClick={navigateToScheduling} className="cta-button">Get Started</Link>
        </p>
      </section>

      <section className="about-section">
        <h1>About Us</h1>
        <p>We are your one-stop solution for video scheduling and analytics. We're dedicated to revolutionizing the way you manage video content. 
          Founded in 2023, our mission is to simplify your video scheduling process, making it efficient and user-friendly. 
          We understand the power of video in today's world, and we're here to provide you with the tools and support to enhance your 
          digital presence. With a commitment to innovation, reliability, and top-notch customer support, 
          we invite you to join us on this journey to streamline your video content management and elevate your online success.</p>
      </section>

      <section className="featured-videos">
        <h1>Featured Videos</h1>
        <div className="video-list">
          {/* Display featured videos here */}
          <div className="video-item">
            <img src="video-thumbnail.jpg" alt="Video 1" />
            <h3>Video Title 1</h3>
          </div>
          <div className="video-item">
            <img src="video-thumbnail.jpg" alt="Video 2" />
            <h3>Video Title 2</h3>
          </div>
          {/* Add more video items as needed */}
        </div>
      </section>


      <section className="benefits">
        <h1>Benefits</h1>
        <ul className="benefits-list">
          <li>
            <div className="benefit-icon"><FontAwesomeIcon icon={faCalendarDays} /></div>
            Effortless video scheduling
          </li>
          <li>
            <div className="benefit-icon"><FontAwesomeIcon icon={faChartLine} /></div>
            Detailed video analytics
          </li>
          <li>
            <div className="benefit-icon"><FontAwesomeIcon icon={faUserGroup} /></div>
            User-friendly interface
          </li>
          <li>
            <div className="benefit-icon"><FontAwesomeIcon icon={faArrowUpRightDots} /></div>
            Increased viewer engagement
          </li>
        </ul>
      </section>


      <section className="testimonials">
        <h1>User Testimonials</h1>
        <div className="testimonial">
          <p>"This platform made scheduling videos a breeze. I highly recommend it!"</p>
          <p>- John Doe, Content Creator</p>
        </div>
        <div className="testimonial">
          <p>"I've seen a significant improvement in my video engagement since I started using this service."</p>
          <p>- Jane Smith, YouTuber</p>
        </div>
      </section>

      <footer>
        <p>Contact us: saifuhcl@gmail.com</p>
      </footer>

    </div>
      
      
    </div>
  );
}

export default Home;


