import React from "react";

import * as styles from "./chip.module.scss";

const Chip = ({ className = "", children, ...rest }) => {
  return (
    <div className={`${styles.chip} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Chip;
