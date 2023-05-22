import React, { useRef, useEffect } from 'react';
import img1 from '../../assets/img1.png';
import home1 from '../../assets/home1.png';
import home2 from '../../assets/home2.png';
import i1 from '../../assets/1.png';
import i2 from '../../assets/2.png';
import i3 from '../../assets/3.png';
import i4 from '../../assets/4.png';
import i5 from '../../assets/5.png';
import i6 from '../../assets/6.png';
import i7 from '../../assets/7.png';
import i8 from '../../assets/8.png';
import i9 from '../../assets/9.png';
import i10 from '../../assets/10.png';
import i11 from '../../assets/11.png';
import i12 from '../../assets/12.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cities = [
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  i11,
  i12
]; // Daftar gambar kota yang ingin ditampilkan

const Home = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000); // Atur sesuai dengan kebutuhan Anda

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px'
  };

  return (
    <div>
      {/* Konten halaman beranda */}
      <div className="image-container">
        <img src={img1} alt="Gambar 1" className="img-fluid" />
        <div className="overlay">
          <p className="text-4xl text-white title-ovrHome">KOTA & KABUPATEN</p>
          <div className="slider-container">
            <Slider {...settings} ref={sliderRef} className="custom-slider">
              {cities.map((city, index) => (
                <div key={index}>
                  <div className="city-box">
                    <img src={city} alt={`Kota ${index + 1}`} className="city-image" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={home2} alt="Gambar 2" className="img-fluid" />
        <img src={home1} alt="Gambar 2" className="img-fluid" />
      </div>
    </div>
  );
};

export default Home;
