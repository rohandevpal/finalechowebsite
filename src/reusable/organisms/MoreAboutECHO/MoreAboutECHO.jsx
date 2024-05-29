import React from "react";
import { Heading, Link, Paragraph } from "../../atoms";

import { Section } from "../../Templates";

import * as styles from "./moreAboutECHO.module.scss";

const MoreAboutECHO = () => {
  return (
    <Section>
      <Heading>More about ECHO India</Heading>
      <div className={styles.content}>
        {/* Removing International content due to legal reasons */}
        {/* <div className={styles.info}>
          <Heading className="margin-b-sm" size="h4">
            International Support
          </Heading>
          <Paragraph className="no-margin margin-b-lg">
            Get a glimpse of all our programs across verticals and various focus
            areas
          </Paragraph>
          <Link to="/international-support">Learn More</Link>
        </div> */}
        {/* <div className={styles.info}>
          <Heading className="margin-b-sm" size="h4">
            Partners
          </Heading>
          <Paragraph className="no-margin margin-b-lg">
            Get to know our partners, the backbones of our mission & vision
          </Paragraph>
          <Link to="/our-partners">Learn More</Link>
        </div> */}
        <div className={styles.info}>
          <Heading className="margin-b-sm" size="h4">
            Partner with us
          </Heading>
          <Paragraph className="no-margin margin-b-lg">
            Become a part of the ECHO India family and help make a difference
          </Paragraph>
          <Link to="/partner">Learn More</Link>
        </div>
      </div>
    </Section>
  );
};

export default MoreAboutECHO;
