import React from "react";
import "./servingtheunderstand.css";

// VideoComponent to render YouTube video
const VideoComponent = ({ src }) => {
    return (
        <iframe
            width="100%"
            height="678"
            src={src}
            title="ECHO Model™ Explainer Video | ECHO India | Capacity Building"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        ></iframe>
    );
};

// ServingTheUnderserved component
const ServingTheUnderserved = () => {
    return (
        <section className="serving-the-underserved">
            <h2 className="serving-the-underserved-heading text-center">
                Serving the Underserved
            </h2>
            <p className="text-center">
            The ECHO Model helps create a more equitable world by getting critical expertise to the communities that need it most.
            </p>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="youtube-video">
                            <li>
                                <VideoComponent src="https://www.youtube.com/embed/-CDsC5toTis" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServingTheUnderserved;
