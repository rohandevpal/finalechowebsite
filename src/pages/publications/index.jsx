import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import publicationsBanner from "../../assets/images/publications/publicationsBanner.jpg";

import { Banner } from "../../reusable/organisms";
import { DefaultLayout, Section } from "../../reusable/Templates";
import { PressCard } from "../../reusable/molecules";

import * as styles from "./publications.module.scss";

const Publications = () => {
  const {
    allAirtable: { nodes: publicationsData },
  } = useStaticQuery(graphql`
    {
      allAirtable(
        filter: {
          table: { eq: "Publications" }
          data: { Status: { eq: "Active" } }
        }
        sort: { fields: data___PublishedOn, order: DESC }
      ) {
        nodes {
          data {
            Title
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
            Link
            Journal
            AffiliatedOrganizations
            PublishedOn(formatString: "MMMM Y")
          }
        }
      }
    }
  `);
  return (
    <DefaultLayout>
      <Banner
        image={publicationsBanner}
        subtitle="A growing body of research, especially peer-reviewed publications, showcases the effectiveness of the ECHO Model of capacity building in India across multiple healthcare focus areas like Mental Health, Cancer, Tuberculosis, and others"
        title="Research & Publications"
      />

      <Section
        noMargin
        isAltBg
        altClassName={styles.container}
        className="no-margin-y"
      >
        <div className={styles.subcontainer}>
          {publicationsData &&
            publicationsData.map((items) => {
              return (
                <PressCard
                  image={null}
                  date={items.data.PublishedOn}
                  title={items.data.Title}
                  info={"Featuring " + items.data.AffiliatedOrganizations}
                  link={items.data.Link}
                  mediaHouse={items.data.Journal}
                />
              );
            })}
        </div>
      </Section>
    </DefaultLayout>
  );
};

export default Publications;
