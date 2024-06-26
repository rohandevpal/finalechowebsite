import React from "react";
import { partnerfund, partnerfund2,partnerfund3, partnerfund4, partnerfund5, partnerfund6, partnerfund7, partnerfund8, partnerfund9,partnerfund10,partnerfund11,partnerfund12 } from "./import";
import './fundingpartner.css';

const Fundingpartner = () => {
    const fundingPartners = [ 
        partnerfund, 
        partnerfund2,
        partnerfund3, 
        partnerfund4, 
        partnerfund5, 
        partnerfund12
    ];
    const fundingPartnerSecond = [
        partnerfund6, 
        partnerfund7, 
        partnerfund8, 
        partnerfund9,
        partnerfund10,
        partnerfund11
    ];
    return (
        <section className="funding-partners">
            <h2 className="funding-partners-heading text-center">Funding Partners</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="funding-partner-ul-first">
                            {fundingPartners.map((partner, index) => (
                                <li key={index}>
                                    <img src={partner} alt="funding partner echo india" />
                                </li>
                            ))}
                        </ul>
                        <ul className="funding-partner-ul-second">
                            {fundingPartnerSecond.map((partner, index) => (
                                <li key={index}>
                                    <img src={partner} alt="funding partner echo india" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fundingpartner;
