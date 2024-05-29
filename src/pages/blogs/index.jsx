import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { BlogsCard } from "../../reusable/molecules";
import { Banner } from "../../reusable/organisms";
import { DefaultLayout, Section } from "../../reusable/Templates";

import { blogData } from "../../_data";
import blogBanner from "../../assets/images/blogs/BlogsBanner.png";

import * as styles from "./blogs.module.scss";

const Blogs = () => {
  const blogs = blogData;
  const {
    allAirtable: { nodes: blogData2 },
  } = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Blog" }, data: { Status: { eq: "Published" } } }
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
      <Banner
        image={blogBanner}
        subtitle="Read the latest stories & insights from across the organization"
        title="Blogs & Stories"
      />

      <Section
        noMargin
        isAltBg
        altClassName={styles.container}
        className={"no-margin-y"}
      >
        {blogData2.map((item) => {
          return (
            <BlogsCard
              title={item.data.Title}
              info={item.data.Description}
              date={`${item.data.Date} • ${item.data.ReadTime} mins read`}
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
          );
        })}
      </Section>
    </DefaultLayout>
  );
};

export default Blogs;
