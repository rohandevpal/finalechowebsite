import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import contactBanner from "../../assets/images/contact/ContactBanner.png";

import { Banner } from "../../reusable/organisms";
import { DefaultLayout, Section } from "../../reusable/Templates";
import { PressCard } from "../../reusable/molecules";

import * as styles from "./annualreports.module.scss";

const Annualreports = () => {
  const {
    allAirtable: { nodes: publicationsData },
  } = useStaticQuery(graphql`
    {
      allAirtable(
        filter: {
          table: { eq: "Resources" }
          data: {
            Status: { eq: "Active" }
            ResourceType: { eq: "Annual Report" }
          }
        }
        sort: { fields: data___Date, order: DESC }
      ) {
        nodes {
          data {
            Name
            Date(formatString: "MMMM Y")
            ResourceType
            Description
            File {
              localFiles {
                publicURL
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
        image={contactBanner}
        subtitle="View all ECHO India annual reports here"
        title="Annual Reports"
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
                  date={items.data.Date}
                  title={items.data.Name}
                  info={items.data.Description}
                  link={items.data.File.localFiles[0].publicURL}
                  mediaHouse={items.data.ResourceType}
                />
              );
            })}
        </div>
      </Section>
    </DefaultLayout>
  );
};

export default Annualreports;
