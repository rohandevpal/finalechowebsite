import React from "react";

import { Heading } from "../../reusable/atoms";

import { DefaultLayout, Section } from "../../reusable/Templates";
import { Banner } from "../../reusable/organisms";

import contactBanner from "../../assets/images/finance/FinanceBanner.jpg";
import * as styles from "./finance.module.scss";

const Finance = () => {
  return (
    <DefaultLayout>
      <Banner image={contactBanner} title="Financials" />
      <Section>
        <Heading className="no-margin margin-b-lg">FCRA Statements</Heading>
        <Heading className="no-margin margin-b-sm" size="h4">
          Annual Statements
        </Heading>
        <iframe
          className={`${styles.airTable} airtable-embed`}
          src="https://airtable.com/embed/shrkNiTvXvIkm1J6N?backgroundColor=green&layout=card"
          frameborder="0"
          onmousewheel=""
        />
        <Heading className="margin-b-sm" size="h4">
          Quarterly Statements
        </Heading>
        <iframe
          className={`${styles.airTable} airtable-embed`}
          src="https://airtable.com/embed/shr8fkKcNGTyvStzm?backgroundColor=green&layout=card"
          frameborder="0"
          onmousewheel=""
        />
        <Heading className="margin-b-sm" size="h4">
          Audited FCRA Financials
        </Heading>
        <iframe
          className={`${styles.airTable} airtable-embed`}
          src="https://airtable.com/embed/shrr3mRWATJ2zzg4P?backgroundColor=green&layout=card"
          frameborder="0"
          onmousewheel=""
        />
      </Section>
    </DefaultLayout>
  );
};

export default Finance;
