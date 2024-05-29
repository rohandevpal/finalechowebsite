import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import galleryBanner from "../../assets/images/gallery/galleryBanner.jpg";

import { Banner } from "../../reusable/organisms";
import { GalleryImageCard } from "../../reusable/molecules";
import { DefaultLayout, Section } from "../../reusable/Templates";

import * as styles from "./gallery.module.scss";

const Gallery = () => {
  const {
    allAirtable: { nodes: galleryData },
  } = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Gallery" } }
        sort: { fields: data___Date, order: DESC }
      ) {
        nodes {
          data {
            Description
            Tag
            Date
            Attachments {
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
          }
        }
      }
    }
  `);

  return (
    <DefaultLayout>
      <Banner
        image={galleryBanner}
        subtitle="Get a visual glimpse of our partnerships & programs"
        title="Gallery"
      />

      <Section className={styles.container}>
        <div className={styles.grid}>
          {galleryData &&
            galleryData.map((item, idx) => (
              <GalleryImageCard
                key={idx}
                image={
                  item.data.Attachments.localFiles[0].childImageSharp
                    .gatsbyImageData
                }
                title={item.data.Tag}
                description={item.data.Description}
              ></GalleryImageCard>
            ))}
        </div>
      </Section>
    </DefaultLayout>
  );
};

export default Gallery;
