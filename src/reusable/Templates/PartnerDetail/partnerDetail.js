import React from "react";

import { Banner } from "../../organisms";
import { DefaultLayout, Section } from "..";
import defaultBanner from "../../../assets/images/gallery/galleryBanner.jpg";
import * as styles from "./partnerDetail.module.scss";
import { graphql } from "gatsby";
const partnerDetail = ({ data }) => {
  return (
    <DefaultLayout>
      <Banner
        image={
          data.airtable.data.BannerImage
            ? data.airtable.data.BannerImage.localFiles[0].childImageSharp
                .gatsbyImageData.images.fallback.src
            : defaultBanner
        }
        subtitle=""
        title={`${data.airtable.data.Name}`}
      />
      {data.airtable.data.Content && (
        <Section>
          <main
            className={styles.markdownContainer}
            dangerouslySetInnerHTML={{
              __html: data.airtable.data.Content.childMarkdownRemark.html,
            }}
          />
        </Section>
      )}
    </DefaultLayout>
  );
};

export const query = graphql`
  query GetPartnerDetail($Path: String!) {
    airtable(table: { eq: "Partners" }, data: { Path: { eq: $Path } }) {
      data {
        Name
        Content {
          childMarkdownRemark {
            html
          }
        }
        Path
        BannerImage {
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
`;
export default partnerDetail;
