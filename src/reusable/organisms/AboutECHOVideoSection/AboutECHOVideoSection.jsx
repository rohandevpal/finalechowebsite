import React from "react";
import { Heading, Paragraph, Title } from "../../atoms";
import { Section } from "../../Templates";

import * as styles from "./aboutECHOVideoSection.module.scss";

const AboutECHOVideoSection = () => {
  return (
    <Section isAltBg className={styles.container}>
      <div className={styles.description}>
        <Title>Dr Sanjeev Arora, MD, Founder & Director, Project ECHO</Title>
        <Heading className={styles.heading}>Changing the World, Fast.</Heading>
        <Paragraph size="display">
          Learn about the story, vision, missions and an in-depth understanding
          of the ECHO Model, first-hand from the founder-director of{" "}
          <em className={styles.highlight}>Project ECHO.</em>{" "}
        </Paragraph>
      </div>

      <div className={styles.video}>
        <iframe
          src="https://www.youtube.com/embed/lY5nlJxac0g"
          title="Changing the World, Fast: Dr. Sanjeev Arora at TEDxABQ Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </Section>
  );
};

export default AboutECHOVideoSection;
