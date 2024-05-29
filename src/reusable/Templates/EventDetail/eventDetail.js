import React from "react";
import { Heading, Paragraph, Title } from "../../atoms";
import { Banner } from "../../organisms";
import { DefaultLayout, Section } from "..";
import { GalleryImageCard, PressCard } from "../../molecules";
import * as styles from "./eventDetail.module.scss";
import { graphql } from "gatsby";
const eventDetail = ({ data }) => {
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
      {data.airtable.data.ContentImages.localFiles && (
        <Section className={styles.container}>
          <Heading className="is-text-centered">Event Photographs</Heading>
          <div className={styles.grid}>
            {data.airtable.data.ContentImages.localFiles.map((item, idx) => (
              <GalleryImageCard
                key={idx}
                image={item.childImageSharp.gatsbyImageData}
              ></GalleryImageCard>
            ))}
          </div>
        </Section>
      )}
      {data.airtable.data.MediaCoverage && (
        <Section>
          <Heading className="is-text-centered">Media Coverage</Heading>
          <div className={styles.subcontainer}>
            {data.airtable.data.MediaCoverage.map((item) => {
              return (
                <PressCard
                  image={
                    item.data.Image.localFiles[0].childImageSharp
                      .gatsbyImageData
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
      )}
    </DefaultLayout>
  );
};

export const query = graphql`
  query GetEventData($Path: String!) {
    airtable(table: { eq: "Events" }, data: { Path: { eq: $Path } }) {
      data {
        Title
        Subtitle
        Content {
          childMarkdownRemark {
            html
          }
        }
        Path
        MediaCoverage {
          data {
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
            Description
            Source
            Link
          }
        }
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
        ContentImages {
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

export default eventDetail;
