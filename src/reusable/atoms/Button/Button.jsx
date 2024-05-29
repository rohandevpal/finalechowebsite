import React from "react";

import * as styles from "./button.module.scss";

const Button = ({ children, variant = "primary", className = "", ...rest }) => {
  const buttonStyles = `${styles.button} ${styles[variant]}  ${className}`;

  return (
    <button className={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
