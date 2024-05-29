import React from "react";
import { Tabs } from "../../molecules";
import { Section } from "../../Templates";
import { ourCountryPartnersTabContent } from "./InternationalTabsContent/InternationalTabsContent";

const InternationalTabs = () => {
  return (
    <Section>
      <Tabs items={ourCountryPartnersTabContent} />
    </Section>
  );
};

export default InternationalTabs;
