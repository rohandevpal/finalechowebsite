import React, { useEffect } from 'react';
import { echoModalimg } from "./imports";
import './echomodel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Echomodal = () => {
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
        <section className="echo_modal" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="echo-model-ul">
                            <li data-aos="fade-right">
                                <img src={echoModalimg} alt="echo Modal img 4 pillers" />
                            </li>
                            <li data-aos="fade-left">
                                <h2 id="echomodal-heading">The ECHO Model</h2>
                                <p>ECHO India’s innovative ‘Hub and Spoke’ Model of capacity building involves a team of experts serving as the hub, mentoring and training the spokes, who are a cohort of learners. This approach is supported through a cutting-edge
                                    digital infrastructure, ‘iECHO’, that enables scalable and sustainable capacity building in a cost-effective manner. Together, we strive to create positive change and drive meaningful impact in the communities we serve.</p>
                                <a href="/about" className="custom-button-main">Know more</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Echomodal;