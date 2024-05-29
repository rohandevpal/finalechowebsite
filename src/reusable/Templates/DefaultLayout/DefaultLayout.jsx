import React from "react";

import { Footer, Header } from "../../organisms";

import SEO from "../../SEO";

import * as styles from "./defaultLayout.module.scss";

const DefaultLayout = ({ title, children }) => {
  return (
    <div className={styles.layout}>
      <SEO titleInfo={title} />
      <Header />
      <main className="home-sections">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
