import React from "react";
import { Heading, Link } from "../../reusable/atoms";

import * as styles from "./404.module.scss";
import echoLogo from "../../assets/images/common/logo.jpg";

const NoMatchPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={echoLogo} alt="ECHO India logo" />
      </div>
      <div>
        <Heading size="h4" fontWeight="normal">
          Sorry, the page you're looking for doesn't exist
        </Heading>
        <Link to="/">Go to home {">"}</Link>
      </div>
    </div>
  );
};

export default NoMatchPage;
