import React from "react";
import { Section } from "../../Templates";

import * as styles from "./echoVsTelemed.module.scss";
import bannerImg from "../../../assets/images/aboutUs/ECHOvsTelemedicine.png";
import { Heading, Paragraph } from "../../atoms";

const ECHOVsTelemed = () => {
  return (
    <Section className={styles.container}>
      <figure className={styles.image}>
        <img src={bannerImg} alt="ECHO versus Telemedicine" />
      </figure>
      <div className={styles.content}>
        <Heading className={styles.heading}>ECHO VS Telemedicine</Heading>
        <Paragraph size="display">
          Although the ECHO model makes use of telecommunications technology –
          it is not traditional telemedicine, in which a specialist assumes care
          of a patient. Instead, the ECHO Model can be defined as telementoring,
          a guided practice model where the participating care provider
          participants become part of a knowledge-sharing platform for building
          capacity and sharing best practices through case-based learning.
        </Paragraph>
      </div>
    </Section>
  );
};

export default ECHOVsTelemed;
