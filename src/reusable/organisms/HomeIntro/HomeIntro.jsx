import React from "react";

import { Heading, Link, Paragraph, Title } from "../../../reusable/atoms";

import * as styles from "./homeIntro.module.scss";
import { Section } from "../../../reusable/Templates";
import { StaticImage } from "gatsby-plugin-image";

const HomeIntro = () => {
  return (
    <Section className={`${styles.container}`}>
      <figure
        className={styles.iconContainer}
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="700"
      >
        <StaticImage
          src="../../../assets/images/home/who_we_are.png"
          alt="who we are"
        />
      </figure>

      <div
        className={styles.contentContainer}
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="700"
      >
        <Title className="margin-b-md" hasTrail>
          Who We Are
        </Title>
        <Heading className="no-margin margin-b-md" fontWeight="bold">
          Sharing the right knowledge, at the right place, at the right time
        </Heading>
        <Paragraph className={styles.content}>
          ECHO India (Extension for Community Healthcare Outcomes) is a
          not-for-profit organization working towards building capacities and
          bridging gaps in the areas of healthcare, education, and other
          sustainable development goals.
        </Paragraph>
        <Link className={styles.link} to="/about" target="_blank">
          Our Mission {">"}
        </Link>
      </div>
    </Section>
  );
};

export default HomeIntro;
