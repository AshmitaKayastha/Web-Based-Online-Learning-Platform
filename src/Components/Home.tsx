import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearActiveUser, getUser, updateActiveUser, getActiveUser } from "../LocalStorage";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../dashboard.css';

const Home = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(getActiveUser());

  const handleLogout = () => {
    clearActiveUser();
    setUser(null);
    navigate("/");
  };

  const handleLogin = () => {
    const foundUser = getUser(username, password);
    if (foundUser) {
      updateActiveUser(foundUser);
      setUser(foundUser);
      setShowLogin(false);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">KnowHow</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          {user ? (
            <a href="#logout" onClick={handleLogout}>Logout</a>
          ) : (
            <a href="#login" onClick={() => setShowLogin(true)}>Login</a>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="login-modal-overlay">
          <div className="login-modal">
            <h3>Login</h3>
            <input
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Log In</button>
            <button className="close-btn" onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide className="slide" style={{ backgroundImage: `url('/images/2.jpg')` }}>
          <div className="overlay">
            <h1>Build Your Dream With Passion</h1>
            <p>Learn, Code and start developing your own beautiful websites at no cost.</p>
            <button>Get Start</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide" style={{ backgroundImage: `url('/images/1.jpg')` }}>
          <div className="overlay">
            <h1>Learn From Experts</h1>
            <p>Get guided by top developers and industry leaders.</p>
            <button>Join Now</button>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-text">
          <h2>Best E-learning Portal</h2>
          <p>Learn at your pace, guided by experienced mentors and industry-relevant content tailored just for you.</p>
          <button>Contact Us</button>
        </div>
        <div className="about-image">
          <img src="/images/1.jpg" alt="About KnowHow" />
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses-section">
        <h2>Most Viewed Courses</h2>
        <div className="courses-grid">
          <div className="course-card">JavaScript Essentials</div>
          <div className="course-card">React Fundamentals</div>
          <div className="course-card">Python for Beginners</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>© 2025 KnowHow. All rights reserved.</div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#courses">Courses</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
