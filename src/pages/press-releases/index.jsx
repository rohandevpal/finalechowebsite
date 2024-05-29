import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import blogBanner from "../../assets/images/blogs/BlogsBanner.png";
import { Banner } from "../../reusable/organisms";
import { DefaultLayout, Section } from "../../reusable/Templates";

import { BlogsCard } from "../../reusable/molecules";
import * as styles from "./pressreleases.module.scss";

const PressReleases = () => {
  const {
    allAirtable: { nodes: publicationsData },
  } = useStaticQuery(graphql`
    {
      allAirtable(
        filter: {
          table: { eq: "Blog" }
          data: { Status: { eq: "Published" }, Type: { eq: "Press Release" } }
        }
        sort: { order: DESC, fields: data___Date }
      ) {
        nodes {
          data {
            Title
            Path
            ExternalURL
            LinkType
            CardImage {
              localFiles {
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            Description
            Date(formatString: "MMM DD, YYYY")
            ReadTime
          }
        }
      }
    }
  `);
  return (
    <DefaultLayout>
      <Banner image={blogBanner} subtitle="" title="Press Releases" />

      <Section
        noMargin
        isAltBg
        altClassName={styles.container}
        className="no-margin-y"
      >
        <div className={styles.subcontainer}>
          {publicationsData &&
            publicationsData.map((item) => (
              <BlogsCard
                title={item.data.Title}
                info={item.data.Description}
                date={item.data.Date}
                image={
                  item.data.CardImage.localFiles[0].childImageSharp
                    .gatsbyImageData
                }
                link={
                  item.data.LinkType == "Internal"
                    ? `/${item.data.Path}`
                    : item.data.ExternalURL
                }
              />
            ))}
        </div>
      </Section>
    </DefaultLayout>
  );
};

export default PressReleases;
