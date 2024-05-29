import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { qoute, testimonialone } from "./import";
import './testimonials.css';

const Testimonial = () => {

    const Datatestimonials = [
        {
            qoute: "The ECHO program has helped me learn how to face the challenges and difficulties that come up in class.",
            name: "Meena Kumari",
            designation: "Government School Teacher, Andhra Pradesh",

        },
        {
            qoute: "The ECHO program has helped me learn how to face the challenges and difficulties that come up in class.",
            name: "Meena Kumari",
            designation: "Government School Teacher, Andhra Pradesh",

        },
        {
            qoute: "The ECHO program has helped me learn how to face the challenges and difficulties that come up in class.",
            name: "Meena Kumari",
            designation: "Government School Teacher, Andhra Pradesh",

        },
    ]

    return (
        <div className="testimonials">
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
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 1,
                                },
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}

                        >
                            {Datatestimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div class="slide-testimonial">
                                        <div class="img">
                                            <img src={testimonialone} alt="testimonials Echo" class="img-fluid" />
                                        </div>
                                        <div class="text-testimonials">
                                            <img src={qoute} alt="quote echo" />
                                            <h4>{testimonial.qoute}</h4>
                                            <span id="testimonials-name">- {testimonial.name}</span>
                                            <p>{testimonial.designation}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Testimonial;