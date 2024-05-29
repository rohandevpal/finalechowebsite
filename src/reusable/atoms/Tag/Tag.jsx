import React from "react";

import * as styles from "./tag.module.scss";

const Tag = ({ className = "", children, ...rest }) => {
  return (
    <div className={`${styles.tag} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Tag;
