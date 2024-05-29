import React from "react";

import { Banner, ContactDisplay } from "../../reusable/organisms";
import { DefaultLayout, Section } from "../../reusable/Templates";
import { Heading, Paragraph } from "../../reusable/atoms";
import contactBanner from "../../assets/images/contact/ContactBanner.png";

const Contact = () => {
  return (
    <DefaultLayout>
      <Banner image={contactBanner} title="Media Contact" />
      <Section>
        <Heading>Ujjwal Pratap</Heading>
        <Heading size="h4" fontWeight="normal">
          Head - Marketing & Communications
        </Heading>
        <Heading size="h4" fontWeight="normal">
          Email: ujjwal.pratap@echoindia.in <br />
          Phone: +91 88099 12525
        </Heading>
      </Section>
    </DefaultLayout>
  );
};

export default Contact;
