import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <div>
      <h1>Automated Content Creation</h1>
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/Scheduling">Scheduling</a>
        <a href="/Analytics">Analytics</a>
      </div>

    <div className='home-container'> 

    <section className="hero-section">
        <h1>Welcome to Your Video Scheduling Platform</h1>
        <h3>Schedule and analyze your videos with ease</h3>
        <Link to="/scheduling" className="cta-button">Get Started</Link>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>We are your one-stop solution for video scheduling and analytics. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>

      <section className="featured-videos">
        <h2>Featured Videos</h2>
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
        <h2>Benefits</h2>
        <ul>
          <li>Effortless video scheduling</li>
          <li>Detailed video analytics</li>
          <li>User-friendly interface</li>
          <li>Increased viewer engagement</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>User Testimonials</h2>
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
        <p>Contact us: contact@example.com</p>
      </footer>

    </div>
      
      
    </div>
  );
}

export default Home;

