import React from "react";
import { Link } from "gatsby";
import { Heading, Paragraph } from "../../atoms";
import * as styles from "./trainingCard.module.scss";

const TrainingCard = ({ img, title, info, date, link }) => {
  return (
    <div className={styles.card}>
      <figure className={styles.imgContainer}>
        <img src={img} alt={title} />
      </figure>
      <Heading className="no-margin" size="h4" fontWeight="bold">
        {title}
      </Heading>
      <Paragraph size="caption">{date}</Paragraph>

      <Paragraph className={styles.info}>{info}</Paragraph>
    </div>
  );
};

export default TrainingCard;
