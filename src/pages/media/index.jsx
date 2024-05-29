import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import pressBanner from "../../assets/images/press/pressBanner.png";
import { Banner } from "../../reusable/organisms";
import { DefaultLayout } from "../../reusable/Templates";
import { PressNews } from "../../reusable/organisms";

const Press = () => {
  const {
    allAirtable: { edges: bannerData },
  } = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Banners" }, data: { Path: { eq: "press" } } }
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
        subtitle="ECHO India's coverage in media outlets"
        title="ECHO in the media"
      />
      <PressNews />
    </DefaultLayout>
  );
};

export default Press;
