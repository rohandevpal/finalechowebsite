import React from "react";
import { newspaper, book, copywriting } from "./import";
import './newsroom.css';

const NewsItem = ({ imageSrc, description, buttonText, buttonLink, heading }) => {
    return (
        <div className="rni-box">
            <img src={imageSrc} alt="newsroom echo india" />
            <h3>{heading}</h3>
            <p>{description}</p>
            <a className="custom-button-main" href={buttonLink}>
                {buttonText}
            </a>
        </div>
    );
};

const Newsroom = () => {
    const newsItems = [
        {
            imageSrc: copywriting,
            heading:"Research",
            description:
                "A growing body of research, especially peer-reviewed publications, showcases the effectiveness of the ECHO Model of capacity building in India across multiple healthcare focus areas like Mental Health, Cancer, and Tuberculosis.",
            buttonText: "Explore more",
            buttonLink: "#",
        },
        {
            imageSrc: newspaper,
            heading: "Newsroom",
            description:
                "Explore ECHO India's press releases and media coverage across national, regional, and vernacular outlets. From new initiatives to breakthrough achievements, these stories shape our collaborative journey of reaching 400 million lives by 2025.",
            buttonText: "Explore more",
            buttonLink: "#",
        },
        {
            imageSrc: book,
            heading : "Our Impact",
            description:
                "The ECHO Model has been used across India to support mentorship and training in healthcare, education and other social determinants of health.",
            buttonText: "Download",
            buttonLink: "#",
        },
    ];

    return (
        <section className="research-newsroom-impact">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="reasearch-ul">
                            {newsItems.map((item, index) => (
                                <li key={index}>
                                    <NewsItem {...item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsroom;
