import React, { useEffect } from 'react';
import { storyone,storytwo,storythree} from '../../../_data/homedata';
import './insightstories.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { storieObject } from '../../../_data/homedata';

const Insightstories = () => {

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
