import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import eventsBanner from "../../assets/images/events/eventsBanner.png";
import { Banner } from "../../reusable/organisms";
import { DefaultLayout, Section } from "../../reusable/Templates";
import { Events } from "../../reusable/organisms";

const EventsPage = () => {
  const {
    allAirtable: { edges: bannerData },
  } = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Banners" }, data: { Path: { eq: "events" } } }
        sort: { fields: data___Position, order: ASC }
      ) {
        edges {
          node {
            data {
              Title
              Subtitle
              Position
              Image {
                localFiles {
                  childImageSharp {
                    gatsbyImageData(
                      width: 1200
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <DefaultLayout>
      <Banner
        image={
          bannerData[0].node.data.Image.localFiles[0].childImageSharp
            .gatsbyImageData.images.fallback.src
        }
        subtitle="Glimpses of partner launch trainings and other events conducted by ECHO India"
        title="ECHO in India - Partner Launch Trainings"
      />
      <Section>
        Inspired by the way clinicians learn from medical rounds during
        residencies, the ECHO Model has evolved into a learning framework that
        applies across disciplines for sustainable and profound change. The ECHO
        Partner Launch Training is for those interested in developing and
        leading ECHO programs for the public health workforce. ECHO India
        regularly conducts Partner Launch Trainings in different states of India
        in collaboration with National Health Missions across the country. These
        events receive a heartening response across states and are regularly
        attended by senior dignitaries from the Health Administration.
      </Section>
      <Events />
    </DefaultLayout>
  );
};

export default EventsPage;
