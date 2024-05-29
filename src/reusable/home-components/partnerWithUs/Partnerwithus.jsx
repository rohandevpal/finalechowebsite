import React from "react";
import { partnergif, partnergif2, leftbg, rightbg } from "./imports";
import "./partnerwithus.css";

const PartnerItem = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="partner-section">
      <div className="img">
        <img src={imageSrc} alt={title} className="img-fluid" />
      </div>
      <div className="text-explore-btn">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="custom-button-main">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const PartnerWithUs = () => {
  const partners = [
    {
      imageSrc:  partnergif,
      title: "Partner with us",
      description:
        "If you are interested in contributing to ECHO India as a funder, please click on know more.",
      buttonText: "Explore More",
    },
    {
      imageSrc:partnergif2 ,
      title: "Start an ECHO",
      description:
        "If your organization is interested in replicating Project ECHO® in healthcare and/or education.",
      buttonText: "START AN ECHO",
    },
  ];

  return (
    <section className="partner-echo">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="partner-ul">
              {partners.map((partner, index) => (
                <li key={index}>
                  <PartnerItem {...partner} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
