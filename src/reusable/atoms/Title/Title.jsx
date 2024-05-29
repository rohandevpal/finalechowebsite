import React from "react";

import * as styles from "./title.module.scss";

const Title = ({ children, className = "", hasTrail }) => {
  const titleStyle = `${styles.title} ${
    hasTrail ? styles.hasTrail : ""
  } ${className}`;

  return <h1 className={titleStyle}>{children}</h1>;
};

export default Title;
