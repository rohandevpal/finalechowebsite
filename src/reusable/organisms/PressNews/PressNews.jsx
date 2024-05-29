import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Section } from "../../Templates";
import { PressCard } from "../../molecules";

import * as styles from "./pressNews.module.scss";

const PressNews = () => {
  const {
    allAirtable: { nodes: pressData },
  } = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Press" } }
        sort: { fields: data___Date, order: DESC }
      ) {
        nodes {
          data {
            Description
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
            ArticleImage {
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
            Link
            Source
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
                  item.data.Image.localFiles[0].childImageSharp.gatsbyImageData
                }
                articleImage={
                  item.data.ArticleImage &&
                  item.data.ArticleImage.localFiles[0].childImageSharp
                    .gatsbyImageData
                }
                date={item.data.Date}
                title={item.data.Title}
                info={item.data.Description}
                link={item.data.Link}
                mediaHouse={item.data.Source}
              />
            );
          })}
      </div>
    </Section>
  );
};

export default PressNews;
