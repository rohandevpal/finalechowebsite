import React, { useEffect } from 'react';
import { Keyfocusareaone, Keyfocusareatwo, Keyfocusareathree } from '../../../_data/homedata';
import './keyfocus.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { keyFocusAreas } from '../../../_data/homedata';

const Keyfocus = (props) => {

    useEffect(function () {
        AOS.init({ duration: 1000 });
    }, []);
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
