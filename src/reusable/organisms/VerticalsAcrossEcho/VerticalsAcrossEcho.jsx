import React from "react";
import { sectorCardsData } from "../../../_data";
import { Heading } from "../../atoms";
import { SectorCard } from "../../molecules";
import { Section } from "../../Templates";

import * as styles from "./verticalsAcrossEcho.module.scss";

const VerticalsAcrossEcho = () => {
  return (
    <Section>
      <Heading className="is-text-centered">Key Focus Areas</Heading>
      <div className={styles.cardGrid}>
        {sectorCardsData.map((cardProps, idx) => (
          <SectorCard key={idx} {...cardProps} />
        ))}
      </div>
    </Section>
  );
};

export default VerticalsAcrossEcho;
