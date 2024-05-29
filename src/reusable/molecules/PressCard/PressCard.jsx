import React from "react";

import { Heading, Paragraph, Chip } from "../../atoms";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./pressCard.module.scss";

const PressCard = ({
  image,
  date,
  title,
  info,
  link,
  mediaHouse,
  articleImage,
}) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_subcontainer}>
        {image && (
          <div className={styles.image}>
            <GatsbyImage image={image} />
          </div>
        )}
        <div className={styles.press_content}>
          <Paragraph size="caption">{date}</Paragraph>
          <div className={styles.press_mediaHouse}>
            <Chip>{mediaHouse}</Chip>
          </div>
          <Heading className="no-margin" size="h4">
            {title}
          </Heading>
          <Paragraph className={styles.info} size="caption">
            {info}
          </Paragraph>
          <div className={styles.press_btn}>
            <Link
              activeClassName="link-active"
              className={styles.read_more}
              to={link ? link : articleImage.images.fallback.src}
              target="_blank"
            >
              {link ? "Read More" : "View Snippet"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressCard;
