import React from "react";

import Carousel from "../../Carousel";
import { Heading, Paragraph } from "../../atoms";

import { carouselData } from "./_data";

import * as styles from "./testimonial.module.scss";

const carouselSlideItem = (carouselItem) => {
  return (
    <div className={styles.carouselItem}>
      <div className={styles.carouselContent}>
        <div className={styles.carouselInnerContent}>
          <div className={styles.carouselHeader}>
            <img
              className={styles.carouselImage}
              src={carouselItem.image}
              alt="carousel"
            />
            <div className={styles.carouselHeaderSection}>
              <Heading className={styles.carouselTitle} size="h3">
                {carouselItem.title}
              </Heading>
              <Paragraph className={styles.carouselSubtitle}>
                {carouselItem.subtitle}
              </Paragraph>
            </div>
          </div>
          <div>
            <Paragraph className={styles.carouselBody}>
              {carouselItem.body}
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className={styles.testimonialContainer}>
      <Heading className={styles.testimonialTitle} size="h3">
        Testimonials
      </Heading>
      <Paragraph className={styles.testimonialSubtitle}>
        Here’s what our trusted partners say about ECHO India
      </Paragraph>
      <Carousel
        carouselData={carouselData}
        carouselSlideItem={carouselSlideItem}
      />
    </div>
  );
};

export default Testimonial;
