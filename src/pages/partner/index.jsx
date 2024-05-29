import React from "react";

import partnerBanner from "../../assets/images/partner/partnerbanner.png";
import partner1 from "../../assets/images/partner/partner1.png";
import partner2 from "../../assets/images/partner/partner2.png";

import { Banner } from "../../reusable/organisms";
import { DefaultLayout, Section } from "../../reusable/Templates";
import { Button, Heading, Paragraph, Tag } from "../../reusable/atoms";

import * as styles from "./partner.module.scss";
import { Link } from "gatsby";

const Partner = () => {
  return (
    <DefaultLayout>
      <Banner
        image={partnerBanner}
        subtitle="Are you looking to partner with us or start an ECHO program?"
        title="Partner with us"
      />

      <Section>
        <Heading className="is-text-centered">Be a part of the ECHO!</Heading>
      </Section>

      <Section className={`${styles.section} ${styles.flexReverse}`}>
        <figure className={styles.image}>
          <img src={partner1} />
        </figure>
        <div className={`${styles.content} padding-b-xl`}>
          <Heading size="h4">Funders</Heading>
          <Paragraph size="display">
            If you are interested in contributing to ECHO India as a funder,
            please e-mail us.
          </Paragraph>
          <Tag>partnerships@echoindia.in</Tag>
        </div>
      </Section>

      <Section className={styles.section}>
        <div className={styles.content}>
          <Heading size="h4">Start an ECHO</Heading>
          <Paragraph size="display">
            If your organization is interested in replicating Project ECHO
            <sup>®</sup> in healthcare and/or education please use the below
            link to provide us your details
          </Paragraph>

          <Link
            target="_blank"
            to="https://docs.google.com/forms/d/e/1FAIpQLScI1bUMnXrZCTX6qrWELl4KxgE3I53zvwRGcH_G74j708XWaw/viewform?embedded=true"
          >
            <Button variant="secondary">Start an ECHO</Button>
          </Link>
        </div>
        <figure className={styles.image}>
          <img src={partner2} />
        </figure>
      </Section>
    </DefaultLayout>
  );
};

export default Partner;
