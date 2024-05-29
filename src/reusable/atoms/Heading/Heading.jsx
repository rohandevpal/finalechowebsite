import React from "react";

import * as styles from "./heading.module.scss";

const Heading = ({
  children,
  className = "",
  size = "h3",
  fontWeight = "bold",
  ...rest
}) => {
  const headingStyles = `${styles.heading} 
  ${styles[fontWeight]}
  ${styles[size]}
  ${className}
  `;

  switch (size) {
    case "h1":
      return (
        <h1 {...rest} className={headingStyles}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...rest} className={headingStyles}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 {...rest} className={headingStyles}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 {...rest} className={headingStyles}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 {...rest} className={headingStyles}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 {...rest} className={headingStyles}>
          {children}
        </h6>
      );
    default:
      return (
        <h3 {...rest} className={headingStyles}>
          {children}
        </h3>
      );
  }
};

export default Heading;
