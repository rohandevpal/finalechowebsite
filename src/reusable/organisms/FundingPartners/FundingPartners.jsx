import React from "react";
import { healthcarePartners2 } from "../../../_data";
import { Heading } from "../../atoms";
import { Section } from "../../Templates";

import * as styles from "./fundingPartners.module.scss";

const FundingPartners = () => {
  return (
    <Section>
      <Heading>Funding Partners</Heading>

      <div className={styles.content}>
        {healthcarePartners2.map((img, idx) => (
          <figure
            key={idx}
            className={styles.logo}
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="700"
          >
            <img src={img} alt="healthcare funding partner" />
          </figure>
        ))}
      </div>
    </Section>
  );
};

export default FundingPartners;
