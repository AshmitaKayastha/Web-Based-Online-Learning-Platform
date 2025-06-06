import React from "react";
import { useNavigate } from "react-router-dom";
import { clearActiveUser } from "../LocalStorage";
import "../dashboard.css";

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearActiveUser();
    navigate("/login");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">E-Learning</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/courses">Courses</a>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Swiper Hero Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide className="slide" style={{ backgroundImage: `url('/images/slide1.jpg')` }}>
          <div className="overlay">
            <h1>Build Your Dream With Passion</h1>
            <p>Learn, Code and start developing your own beautiful websites at no cost.</p>
            <button>Get Start</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide" style={{ backgroundImage: `url('/images/slide2.jpg')` }}>
          <div className="overlay">
            <h1>Learn From Experts</h1>
            <p>Get guided by top developers and industry leaders.</p>
            <button>Join Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide" style={{ backgroundImage: `url('/images/slide3.jpg')` }}>
          <div className="overlay">
            <h1>Launch Your Career</h1>
            <p>Start projects that matter and get real experience.</p>
            <button>Explore Courses</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Dashboard;
