import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { DefaultLayout } from "../../reusable/Templates";
import { Banner, Echomodal, Engagementwithchangemaker, Fundingpartner, Insightstories, Keyfocus, Keyimplimenting, Newsroom, Ourreach, Partnerwithus, Servingtheunderstand, Supportingsdg, Testimonial } from "../../reusable/home-components";


import * as styles from "./home.module.scss";

const Home = () => {
  const {
    allAirtable: { edges: bannerData },
  } = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Banners" }, data: { Path: { eq: "home" } } }
        sort: { fields: data___Position, order: ASC }
      ) {
        edges {
          node {
            data {
              Title
              Subtitle
              Position
              Link
              CTAText
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
  let carouselData = [];
  bannerData.forEach((i) => {
    let el = {
      position: i.node.data.Position,
      title: i.node.data.Title,
      subtitle: i.node.data.Subtitle,
      ctaText: i.node.data.CTAText,
      link: i.node.data.Link,
      image:
        i.node.data.Image.localFiles[0].childImageSharp.gatsbyImageData.images
          .fallback.src,
    };
    carouselData.push(el);
  });

  return (
    <DefaultLayout>
      <Banner />
      <Keyfocus/>
      <Ourreach />
       <Echomodal />
     <Supportingsdg />
       <Servingtheunderstand />
      <Insightstories />
      <Engagementwithchangemaker />
      <Keyimplimenting />
      <Fundingpartner />
      <Partnerwithus />
      <Testimonial />
      <Newsroom /> 
    </DefaultLayout>
  );
};

export default Home;
