import React from "react";

import Carousel from "../../Carousel";
import { Heading, Paragraph } from "../../atoms";

import * as styles from "./homeHero.module.scss";
import { carouselData } from "../../../_data";

const carouselSlideItem = (carouselItem) => {
  return (
    <div className={styles.carouselItem}>
      <div className={styles.carouselContent}>
        <img
          className={styles.carouselImage}
          src={carouselItem.image}
          alt="carousel"
        />
        <div className={styles.carouselText}>
          <Heading className={styles.carouselTitle} size="h1">
            {carouselItem.title}
          </Heading>
          <Paragraph className={styles.carouselSubtitle}>
            {carouselItem.subtitle}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

const HomeHero = () => {
  return (
    <Carousel
      carouselData={carouselData}
      carouselSlideItem={carouselSlideItem}
    />
  );
};

export default HomeHero;
