import React from "react";
import { DefaultLayout, Section } from "../../reusable/Templates";
import { Heading, Paragraph } from "../../reusable/atoms";
import { Banner } from "../../reusable/organisms";
import contactBanner from "../../assets/images/aboutUs/aboutUsBanner.jpg";
const GrowthReport = () => {
  return (
    <DefaultLayout>
      <Banner image={contactBanner} title="ECHO India Growth Report" />
      <Section>
        <Heading className="no-margin margin-b-lg">Report preview</Heading>
        <iframe
          src="https://drive.google.com/file/d/1uc8K7Wcgdt9Gl7BoB18r6B3n41OR2FfE/preview"
          width="100%"
          height="800px"
          allow="autoplay"
        ></iframe>
      </Section>
      <Section>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe
          class="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrxyKZEcoNolloV7?backgroundColor=green"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="930"
        ></iframe>
      </Section>
    </DefaultLayout>
  );
};

export default GrowthReport;
