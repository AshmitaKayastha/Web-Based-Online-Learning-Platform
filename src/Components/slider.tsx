import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlider.css';

const HeroSlider = () => {
  return (
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
          <h1>Build Your Dream<br />With Passion</h1>
          <p>Learn, Code and start developing your own beautiful websites at no cost.</p>
          <button>Get Start</button>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide" style={{ backgroundImage: `url('/images/slide2.jpg')` }}>
        <div className="overlay">
          <h1>Learn From the Best</h1>
          <p>Free access to top tutorials and mentors from around the world.</p>
          <button>Join Now</button>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide" style={{ backgroundImage: `url('/images/slide3.jpg')` }}>
        <div className="overlay">
          <h1>Build Projects That Matter</h1>
          <p>Hands-on experience building real-world applications.</p>
          <button>Explore Courses</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
