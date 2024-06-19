import React, { useEffect } from 'react';
import { Keyfocusareaone, Keyfocusareatwo, Keyfocusareathree } from "./imports";
import './keyfocus.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Keyfocus = (props) => {

    useEffect(function () {
        AOS.init({ duration: 1000 });
    }, []);

    const keyFocusAreas = [
        {
            heading: "Healthcare",
            paragraph: "Every year, millions of people across India die of preventable and curable diseases. This happens because healthcare providers in their communities lack the knowledge and expertise needed to address these conditions.",
            buttonLink: "/healthcare",
            imageUrl: Keyfocusareaone
        },
        {
            heading: "Education",
            paragraph: "ECHO India's interventions in education focus on upskilling, motivation and mentorship of teachers and school leaders for better learning outcomes and enhancing culture in educational institutions.",
            buttonLink: "/education",
            imageUrl: Keyfocusareatwo
        },
        {
            heading: "Livelihood",
            paragraph: "In sync with its roots in healthcare, ECHO India's alignment with Livelihood and other SDGs underscores a holistic approach towards addressing social determinants of health (SDHs).",
            buttonLink: "/education",
            imageUrl: Keyfocusareathree
        }
    ];

    return (
        <section className="key-focus-area" data-aos={props.animation}>
            <h2 className="keyfocus-heading text-center">Key Focus Areas</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12" >
                        <ul className="key-focus-area-list">
                            {keyFocusAreas.map((area, index) => (
                                <li key={index} data-aos="fade-up">
                                    <ul className="main-key-box">
                                        <li>
                                            <img src={area.imageUrl} alt={area.heading} />
                                        </li>
                                        <li>
                                        <h3>{area.heading}</h3>
                                        </li>
                                        <li>
                                           
                                            <p>{area.paragraph}</p>
                                        </li>
                                        <li>
                                            <a href={area.buttonLink} className='custom-button-main'>Know More</a>
                                        </li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Keyfocus;
