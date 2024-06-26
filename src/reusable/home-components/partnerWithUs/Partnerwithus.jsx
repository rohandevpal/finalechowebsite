import React, { useEffect } from 'react';
import { partnergif, partnergif2, leftbg, rightbg } from "./imports";
import "./partnerwithus.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PartnerItem = ({ imageSrc, title, description, buttonText }) => {

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
      imageSrc: partnergif,
      title: "Partner with us",
      description:
        "Join us in building sustainable and scalable solutions, empowering frontline professionals to better serve their communities.",
      buttonText: "Know More",
    },
    {
      imageSrc: partnergif2,
      title: "Start an ECHO",
      description:
        "If your organization is interested in replicating the ECHO Model in Healthcare, Education, or Livelihood, click below.",
      buttonText: "Start an ECHO",
    },
  ];

  return (
    <section className="partner-echo">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="partner-ul">
              {partners.map((partner, index) => (
                <li key={index} data-aos="fade-right">
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
