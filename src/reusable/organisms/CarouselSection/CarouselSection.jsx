import React from "react";
import Slider from "react-slick";
import { Paragraph } from "../../atoms";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import * as styles from "./carouselSection.module.scss";

const CarouselSection = ({ carouselData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {carouselData &&
        carouselData.map((carouselItem) => (
          <div className={`${styles.container} `} key={carouselItem.id}>
            <figure className={styles.image}>
              <img src={carouselItem.image} />
            </figure>
            {/* <Title className="is-text-centered">{carouselItem.text}</Title> */}
            <Paragraph className={styles.info} size="caption">
              {carouselItem.text}
            </Paragraph>
          </div>
        ))}
    </Slider>
  );
};

export default CarouselSection;
