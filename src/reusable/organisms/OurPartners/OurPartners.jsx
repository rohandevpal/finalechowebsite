import React from "react";
import { Heading, Title } from "../../../reusable/atoms";
import { Tabs } from "../../../reusable/molecules";
import { Section } from "../../../reusable/Templates";
import { ourPartnersTabContent } from "./OurPartnerTabs/OurPartnersTabs";

const OurPartners = () => {
  return (
    <Section>
      <Title hasTrail>Our Partners</Title>

      <Heading className="margin-t-md">
        The backbones of our mission & vision
      </Heading>

      <Tabs items={ourPartnersTabContent} />
    </Section>
  );
};

export default OurPartners;
