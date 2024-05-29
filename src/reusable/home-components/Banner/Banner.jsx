import React, { useState, useEffect } from "react";
import { useMediaQuery } from '@material-ui/core';
import { bannerone, bannertwo, bannerthree, tagline, mobileBanner1, mobileBanner2, mobileBanner3 } from "./imports";
import './banner.css';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % 3);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    
    const [headings, setHeadings] = useState(["Healthcare", "Livelihood", "Education"]);
    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [headings]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

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
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <h1 className="front">{headings[currentHeadingIndex]}</h1>
                                            <h1 className="back">
                                                {headings[(currentHeadingIndex + 1) % headings.length]}
                                            </h1>
                                        </div>
                                    </div>
                                    <p>Our comprehensive approach encompasses healthcare, education, livelihood and support for the achievement of the Sustainable Development Goals (SDGs).</p>
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
