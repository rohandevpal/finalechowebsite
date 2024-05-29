import React from "react";

import { Banner } from "../../organisms";
import { DefaultLayout, Section } from "..";

import * as styles from "./blogPage.module.scss";
import { graphql } from "gatsby";
const blogPage = ({ data }) => {
  return (
    <DefaultLayout>
      <Banner
        image={`${data.airtable.data.BannerImage.localFiles[0].childImageSharp.gatsbyImageData.images.fallback.src}`}
        subtitle={
          data.airtable.data.Subtitle && `${data.airtable.data.Subtitle}`
        }
        title={`${data.airtable.data.Title}`}
      />
      <Section>
        <main
          className={styles.markdownContainer}
          dangerouslySetInnerHTML={{
            __html: data.airtable.data.Content.childMarkdownRemark.html,
          }}
        />
      </Section>
    </DefaultLayout>
  );
};

export const query = graphql`
  query GetBlogData($Path: String!) {
    airtable(table: { eq: "Blog" }, data: { Path: { eq: $Path } }) {
      data {
        Title
        Subtitle
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

export default blogPage;
