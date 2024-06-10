import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { qoute, testimonialone, testimonialtwo } from "./import";
import './testimonials.css';

const Testimonial = () => {

    const Datatestimonials = [
        {
            qoute: "The ECHO program has helped me learn how to face the challenges and difficulties that come up in class.",
            name: "Meena Kumari",
            designation: "Government School Teacher, Andhra Pradesh",
        },
        {
            qoute: "Earlier we were focusing only on the subjects and completing the course. But now, we are interacting more frankly with the students with equal respect for both boys and girls.",
            name: "Narendra Singh Rawat",
            designation: "Government Senior Secondary School Kotra, Rajasthan",
        }
    ];

    const testimonialImages = [testimonialone, testimonialtwo];

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
                                    <div className="slide-testimonial">
                                        <div className="img">
                                            <img 
                                                src={testimonialImages[index % testimonialImages.length]} 
                                                alt="testimonial" 
                                                className="img-fluid" 
                                            />
                                        </div>
                                        <div className="text-testimonials">
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
    );
}

export default Testimonial;
