import React from "react";
import { Heading, Paragraph, Chip } from "../../atoms";
import locationsvg from "../../../assets/images/programCard/location.svg";
import hubIcon from "../../../assets/images/programCard/hubIcon.png";

import * as styles from "./programCard.module.scss";

const ProgramCard = ({ programData }) => {
  const {
    programName,
    hubName,
    location,
    focusAreas,
    description,
    hubLogoURL,
  } = programData;
  return (
    <div className={styles.programCard}>
      <Heading className="no-margin" size="h4" fontWeight="bold">
        {programName}
      </Heading>
      <div className={styles.focusAreas}>
        {!!focusAreas &&
          focusAreas.map((items) => {
            return <Chip>{items}</Chip>;
          })}
      </div>
      <div className={styles.org}>
        <div className={styles.orgDetails}>
          <figure className={hubLogoURL ? styles.logo : styles.icon}>
            <img src={hubLogoURL || hubIcon} alt={hubName} />
          </figure>
          <Paragraph size="caption">{hubName}</Paragraph>
        </div>
        <div className={styles.orgDetails}>
          <figure className={styles.icon}>
            <img src={locationsvg} />
          </figure>
          <Paragraph size="caption">{location}</Paragraph>
        </div>
      </div>

      <Paragraph className={styles.info}>{description}</Paragraph>
    </div>
  );
};

export default ProgramCard;
