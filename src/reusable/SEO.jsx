import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

const SEO = ({ titleInfo }) => {
  // TODO: Uncomment after useStaticQuery issue stable
  // const {
  //   site: { siteMetaData: data },
  // } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //         }
  //       }
  //     }
  //   `
  // );
  return (
    <Helmet>
      <html lang="en" />
      <title>ECHO India {titleInfo ? `| {title}` : ""}</title>
      <meta
        name="description"
        content={
          "ECHO India is a not-for-profit organization working with Project ECHO towards building capacity in the areas of healthcare, education, and others."
        }
      />
    </Helmet>
  );
};

export default SEO;
