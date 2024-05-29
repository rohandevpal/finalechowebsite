import React from "react";
import { Heading, Paragraph } from "../../atoms";

import * as styles from "./benefitCard.module.scss";

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={icon} alt={`${title} icon`} />
      <div className={styles.content}>
        <Heading className="no-margin margin-b-sm" size="h4">
          {title}
        </Heading>
        <Paragraph className="no-margin ">{description}</Paragraph>
      </div>
    </div>
  );
};

export default BenefitCard;
