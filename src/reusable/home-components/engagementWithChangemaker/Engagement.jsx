import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './engegementchange.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { changemaker1, changemaker2, changemaker3 } from "./imports";
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

  const dataEngagement = [
    {
      Heading: "Cancer Roundtable",
      para: "ECHO India’s National Roundtable Summit on Cervical Cancer brought together a panel of experts including public health experts, oncologists, policymakers and opinion leaders.",
      btntext: "Read More",
      img: changemaker1
    },
    {
      Heading: "Tribal Health Summits",
      para: "Hosted two national summits in collaboration with AIIMS Deoghar and Govt. Medical College, Srinagar to catalyse conversations for addressing healthcare challenges faced by tribal communities.",
      btntext: "Read More",
      img: changemaker2
    },
    {
      Heading: "Partner Launch Trainings",
      para: "ECHO India hosts dynamic two-day orientations for new partners launching their ECHO programs. Recent success in conducting numerous PLTs underscores our commitment to empowering and uniting a motivated community for positive impact.",
      btntext: "Read More",
      img: changemaker3
    }
    
  ]

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
                  <div class="slide-box-changemaker">
                    <img src={engagement.img} alt="changemaker alt" />
                    <div class="content">
                      <h3>{engagement.Heading}</h3>
                      <p>{engagement.para}</p>
                      <button type="button" class="custom-button-main"><a href="#">{engagement.btntext}</a></button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Engagement;