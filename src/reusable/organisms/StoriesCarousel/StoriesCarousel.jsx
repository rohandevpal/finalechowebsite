import React from "react";
import Slider from "react-slick";
import { Paragraph } from "../../atoms";
import { Link } from "gatsby";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import * as styles from "./carouselSection.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";

const StoriesCarousel = ({ carouselData, slidesToShow }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    slidesToShow,
    slidesToScroll: 2,
  };
  return (
    <Slider {...settings}>
      {carouselData &&
        carouselData.map((carouselItem) => (
          <Link to={carouselItem.data.URL} target="_blank">
            <div className={styles.container}>
              <div
                className={styles.imageHolder}
                style={{
                  display: "grid",
                  borderRadius: "1rem",
                  overflow: "hidden",
                }}
                key={carouselItem.id}
              >
                <GatsbyImage
                  style={{ gridArea: "1/1" }}
                  layout="fullWidth"
                  image={
                    carouselItem.data.Image.localFiles[0].childImageSharp
                      .gatsbyImageData
                  }
                  alt={carouselItem.data.Title}
                />
                <div
                  style={{
                    // By using the same grid area for both, they are stacked on top of each other
                    gridArea: "1/1",
                    position: "relative",
                    // This centers the other elements inside the hero component
                    placeItems: "top",
                    display: "grid",
                    background: "rgba(25,68,108,0.3)",
                  }}
                >
                  {/* Any content here will be centered in the component */}
                  <h2
                    style={{
                      color: "white",
                      paddingLeft: "1rem",
                      lineHeight: "1.1",
                      paddingRight: "1rem",
                    }}
                    className={styles.title}
                  >
                    {carouselItem.data.Title}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </Slider>
  );
};

export default StoriesCarousel;
