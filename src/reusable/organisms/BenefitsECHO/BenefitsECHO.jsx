import React from "react";
import { benefitsECHOData } from "../../../_data/career";

import { Heading } from "../../atoms";
import { BenefitCard } from "../../molecules";
import { Section } from "../../Templates";

import * as styles from "./benefitsECHO.module.scss";

const BenefitsECHO = () => {
  const benefits = benefitsECHOData;
  return (
    <Section>
      <Heading>Benefits of Working at ECHO India</Heading>
      <div className={styles.content}>
        {benefits.map((benefit, idx) => (
          <BenefitCard key={idx} {...benefit} />
        ))}
      </div>
    </Section>
  );
};

export default BenefitsECHO;
