import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './engegementchange.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { changemaker1, changemaker2, changemaker3, changemaker4, changemaker5, changemaker6 } from '../../../_data/homedata';
import { dataEngagement } from '../../../_data/homedata';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Engagement = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 0,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <section className="Engagement-with-Changemakers" data-aos="fade-up">
      <h2 className="Engagement-heading text-center">
        Engagement with Changemakers
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,

                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false
              }}

            >
              {dataEngagement.map((engagement, index) => (
                <SwiperSlide key={index}>
                  <ul className="slide-box-changemaker">
                    <li className="img">
                      <img src={engagement.img} alt="changemaker alt" />
                    </li>
                    <li class="content">
                      <h3>{engagement.Heading}</h3>
                      <p>{engagement.para}</p>
                      <button type="button" className="custom-button-main"><a href="#">{engagement.btntext}</a></button>
                    </li>
                  </ul>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>

  )
};

export default Engagement;