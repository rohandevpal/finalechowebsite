import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./galleryImageCard.module.scss";

const GalleryImageCard = ({ title, image, description }) => {
  return (
    <figure
      className={`${styles.container} ${
        description && styles.containerDescription
      }`}
    >
      <figcaption className={styles.title}>{title}</figcaption>
      <GatsbyImage image={image} alt={title} />

      <figcaption className={styles.description}>{description}</figcaption>
    </figure>
  );
};

export default GalleryImageCard;
