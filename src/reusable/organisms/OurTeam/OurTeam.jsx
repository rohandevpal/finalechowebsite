import React from "react";
import { Heading, Paragraph } from "../../atoms";
import { Tabs } from "../../molecules";

import { Section } from "../../Templates";
import { OurTeamTabContent } from "./OurTeamTabs/OurTeamTabs";

const OurTeam = () => {
  return (
    <Section>
      <Heading>Our Board of Trustees & Leadership</Heading>
      <Paragraph>
        Steering the path towards our goals whilst upholding our mission &
        vision
      </Paragraph>
      <Tabs items={OurTeamTabContent} />
    </Section>
  );
};

export default OurTeam;
