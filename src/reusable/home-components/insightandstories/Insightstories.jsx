import React, { useEffect } from 'react';
import { storyone, storytwo, storythree } from "./import";
import './insightstories.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Insightstories = () => {

    const storieObject = [
        {
            heading: "Healthcare",
            span: "Empowering Nurses – The Largest Cadre of Frontline Healthcare Warriors",
            paragraph: "Every year, millions of people across India die of diseases that are preventable and even curable. This happens because the healthcare providers in their communities don’t have the knowledge and expertise needed to address these conditions.",
            linkBtn: "#",
            imageUrl: storyone
        },
        {
            heading: "Education",
            span: "All Teach All Learn : Capacity Building of Educators to Drive Better Learning Outcomes",
            paragraph: "Every year, millions of people across India die of diseases that are preventable and even curable. This happens because the healthcare providers in their communities don’t have the knowledge and expertise needed to address these conditions.",
            linkBtn: "#",
            imageUrl: storytwo
        },
        {
            heading: "Livelihood",
            span: "ECHO Model Working Towards Addressing Sustainable Development Goals",
            paragraph: "Every year, millions of people across India die of diseases that are preventable and even curable. This happens because the healthcare providers in their communities don’t have the knowledge and expertise needed to address these conditions.",
            linkBtn: "#",
            imageUrl: storythree
        }
    ]

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
        <section class="Insights-and-Stories">
            <h2 class="insights-heading text-center">Insights and Stories</h2>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <ul className="story-cards">
                            {storieObject.map((area, index) => (
                                <li key={index} data-aos="fade-up">
                                    <div className="main-story-box">
                                        <img src={area.imageUrl} alt={area.heading} />
                                        <h3>{area.heading}</h3>
                                        <p className="span">{area.span}</p>
                                        <p>{area.paragraph}</p>
                                        <a href={area.buttonLink} className="custom-button-main">Know More</a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Insightstories;