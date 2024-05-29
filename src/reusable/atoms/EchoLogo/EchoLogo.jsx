import React from "react";

import logoImg from "../../../assets/images/common/logo.jpg";

import * as styles from "./echoLogo.module.scss";

/**
 * Component for showing the ECHO Logo
 *
 * @prop {string} size = "sm" | "md" | "lg"
 */

const EchoLogo = ({ size = "md" }) => {
  return (
    <figure className={`${styles.logo} ${styles[size]}`}>
      <img src={logoImg} alt="ECHO India. Moving Knowledge, Not people" />
    </figure>
  );
};

export default EchoLogo;
