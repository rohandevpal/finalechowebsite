import React, { useState } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Heading, Paragraph } from "../../atoms";

import * as styles from "./personCard.module.scss";

const PersonCard = ({ image, name, title, subtitle }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.imgContainer}>
        {/* TODO: Move trustee data to Airtable and refactor using gatsby-plugin-image */}
        {image != "dummy" ? (
          <>
            {typeof image === "string" ? (
              <img src={image} />
            ) : (
              <GatsbyImage image={image} alt={`${name}`} />
            )}
          </>
        ) : (
          <StaticImage src="../../../assets/images/common/placeholder-dp.png" />
        )}
      </figure>
      <Heading className={styles.heading} size="h4">
        {name}
      </Heading>
      {title && (
        <Paragraph className={styles.info} size="caption">
          {title}
        </Paragraph>
      )}
      {subtitle && (
        <Paragraph className={styles.info} size="caption">
          {subtitle}
        </Paragraph>
      )}
    </div>
  );
};

export default PersonCard;
