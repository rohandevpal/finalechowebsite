import React from "react";

import * as styles from "./impactBanner.module.scss";
import impactbannerImg from "../../../assets/images/home/impact5.png";
import { Section } from "../../../reusable/Templates";

const ImpactBanner = () => {
  return (
    <Section isAltBg altClassName={styles.container}>
      <div className={styles.content}>
        <p
          className={styles.message}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="700"
        >
          In addition to the healthcare sector, ECHO India is leveraging the
          globally acclaimed ECHO Model to bring systemic changes in education,
          sustainable livelihoods and other sustainable development goals.
        </p>
        <figure
          className={styles.iconContainer}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="700"
        >
          <img src={impactbannerImg} alt="impact banner" />
        </figure>
      </div>
    </Section>
  );
};

export default ImpactBanner;
