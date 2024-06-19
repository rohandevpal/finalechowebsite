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
            paragraph: "ECHO India has forged partnerships with prominent public sector and private sector institutions, including several nursing associations, to conduct capacity-building trainings specifically designed for nurses. ",
            linkBtn: "#",
            imageUrl: storyone
        },
        {
            heading: "Education",
            span: "All Teach All Learn : Capacity Building of Educators to Drive Better Learning Outcomes",
            paragraph: "The ECHO model aims to bring a paradigm shift in the field of education, including the way the teachers and students engage and learn, through a practical learning approach.",
            linkBtn: "#",
            imageUrl: storytwo
        },
        {
            heading: "Livelihood",
            span: "ECHO Model Working Towards Addressing Sustainable Development Goals",
            paragraph: "Going beyond health and education, the ECHO model can be leveraged to create lasting change across multiple sectors and achieve Sustainable Development Goals (SDGs)",
            linkBtn: "#",
            imageUrl: storythree
        }
    ];

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

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    return (
        <section className="Insights-and-Stories">
            <h2 className="insights-heading text-center">Insights and Stories</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="story-cards">
                            {storieObject.map((area, index) => (
                                <li key={index} data-aos="fade-up">
                                    <ul className="main-story-box">
                                        <li>
                                            <img src={area.imageUrl} alt={area.heading} />
                                        </li>
                                        <li>
                                            <h3>{area.heading}</h3>
                                        </li>
                                        <li>
                                            <p className="span">{area.span}</p>
                                            <p>{truncateText(area.paragraph, 250)}</p>
                                        </li>
                                        <li>
                                            <a href={area.linkBtn} className="custom-button-main">Know More</a>
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
}

export default Insightstories;
