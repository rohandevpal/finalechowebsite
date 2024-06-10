import React, { useState, useEffect } from "react";
import { useMediaQuery } from '@material-ui/core';
import { bannerone, bannertwo, bannerthree, tagline, mobileBanner1, mobileBanner2, mobileBanner3 } from "./imports";
import './banner.css';
import AOS from 'aos';

const Banner = () => {

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



    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % 3);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const [headings, setHeadings] = useState(["Healthcare", "Livelihood", "Education"]);
    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [headings]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    //text slider
    const [currentIndexSlider, setCurrentIndexSlider] = useState(0);

    useEffect(() => {
        const sliderValueContainer = document.querySelector('.slider-value');
        const textElements = [
            document.getElementById('textMe'),
            document.getElementById('textMy'),
            document.getElementById('textOur')
        ];

        function updateSliderValue() {
            sliderValueContainer.style.top = `-${currentIndexSlider * 80}px`;

            switch (currentIndexSlider) {
                case 0:
                    textElements.forEach(el => el.style.color = "#9D1D2B");
                    break;
                case 1:
                    textElements.forEach(el => el.style.color = "#5B5B5B");
                    break;
                case 2:
                    textElements.forEach(el => el.style.color = "Green ");
                    break;
                default:
                    break;
            }
        }

        const autoSlide = () => {
            if (currentIndexSlider < textElements.length - 1) {
                setCurrentIndexSlider(currentIndexSlider + 1);
            } else {
                setCurrentIndexSlider(0);
                setCurrentIndex(prevIndex => (prevIndex + 1) % 3);
            }
            updateSliderValue();
        };

        const intervalId = setInterval(autoSlide, 2000);

        return () => clearInterval(intervalId);
    }, [currentIndexSlider]);


    return (
        <section className="mainBanner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <ul className="main-slider">
                            <li>
                                <div className="banner-content">
                                    <h2 id="banner-text-animated">Enhancing Well Being of Communities</h2>
                                    <h4>Through Mentoring and Capacity Building in</h4>
                                    <div className="slider-container-text-banner">
                                        <div className="slider-value">
                                            <h1 id="textMe"> Healthcare</h1>
                                            <h1 id="textMy">Education</h1>
                                            <h1 id="textOur">Livelihood</h1>
                                        </div>
                                    </div>
                                    <p>Our comprehensive approach encompasses healthcare, education, livelihood, and support for the achievement of the Sustainable Development Goals (SDGs).</p>
                                    <img src={tagline} alt="Moving knowledge not people" />
                                </div>
                            </li>
                            <li>
                                <div className="slider-main">
                                    <div className="slide active">
                                        <img src={isMobile ? (currentIndex === 0 ? mobileBanner1 : currentIndex === 1 ? mobileBanner2 : mobileBanner3) : (currentIndex === 0 ? bannerone : currentIndex === 1 ? bannertwo : bannerthree)} alt="" />
                                    </div>
                                    <div className="dots-container">
                                        {[0, 1, 2].map((index) => (
                                            <span
                                                key={index}
                                                className={`dot ${currentIndex === index ? 'active' : ''}`}
                                                onClick={() => handleDotClick(index)}
                                            ></span>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
