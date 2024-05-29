import React from "react";
import sdgImages from './imports';
import './supporting.css';

const SupportingSDGs = () => {
    return (
        <section className="Supporting-SDGs">
            <h2 className="sdg-heading text-center">Supporting SDGs</h2>
            <p className="text-center">We support 6 Sustainable Development Goals.</p>
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
