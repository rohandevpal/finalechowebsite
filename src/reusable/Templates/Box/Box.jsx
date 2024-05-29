import React from "react";

import * as styles from "./box.module.scss";

const Box = ({ className = "", children, ...rest }) => {
  return <div className={`${styles.box} ${className} `}>{children}</div>;
};

export default Box;
