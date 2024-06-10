import React, { useEffect } from 'react';
import sdgImages from './imports';
import './supporting.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SupportingSDGs = () => {

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
        <section className="Supporting-SDGs" data-aos="fade-up">
            <h2 className="sdg-heading text-center">Supporting SDGs</h2>
            <p className="text-center">We support 6 Sustainable Development Goals</p>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="sdg-images">
                            {sdgImages.map((imageGroup, index) => (
                                <li key={index}>
                                    <div className={`sdg-group sdg-group-${Math.ceil((index + 1) / 6)}`}>
                                        {imageGroup.map((image, idx) => (
                                            <div className="image" key={idx}>
                                                <img src={image} alt="SDG" />
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SupportingSDGs;
