import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Section } from "../../Templates";
import { PressCard } from "../../molecules";

import * as styles from "./events.module.scss";

const Events = () => {
  const {
    allAirtable: { nodes: pressData },
  } = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Events" } }
        sort: { fields: data___Date, order: DESC }
      ) {
        nodes {
          data {
            Description
            CardImage {
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
            Date(formatString: "MMMM d, Y")
            Title
            EventType
            Subtitle
            Path
          }
        }
      }
    }
  `);
  return (
    <Section
      noMargin
      isAltBg
      altClassName={styles.container}
      className="no-margin-y"
    >
      <div className={styles.subcontainer}>
        {pressData &&
          pressData.map((item) => {
            return (
              <PressCard
                image={
                  item.data.CardImage.localFiles[0].childImageSharp
                    .gatsbyImageData
                }
                date={item.data.Date}
                title={item.data.Title}
                info={item.data.Description}
                link={item.data.Path}
                mediaHouse={item.data.EventType}
              />
            );
          })}
      </div>
    </Section>
  );
};

export default Events;
