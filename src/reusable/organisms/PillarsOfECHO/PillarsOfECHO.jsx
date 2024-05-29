import React from "react";
import { Heading, Paragraph } from "../../atoms";
import { Section } from "../../Templates";

import * as styles from "./pillarsOfECHO.module.scss";
import { pillarsOfECHOData } from "./_data";

const PillarsOfECHO = () => {
  return (
    <Section isAltBg>
      <Heading className="is-text-centered">4 Pillars of the ECHO model™</Heading>
      <div className={styles.pillars}>
        {pillarsOfECHOData.map((pillar, idx) => (
          <div key={idx} className={styles.pillar}>
            <figure className={styles.image}>
              <img src={pillar.icon} alt={`${pillar.title}`} />
            </figure>
            <div className={styles.description}>
              <Heading className={styles.heading} size="h4">
                {pillar.title}
              </Heading>
              <Paragraph>{pillar.description}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PillarsOfECHO;
