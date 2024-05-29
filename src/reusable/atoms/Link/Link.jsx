import React from "react";
import { Link as GatsbyLink } from "gatsby";

import * as styles from "./link.module.scss";

const Link = ({
  children,
  to,
  disabled,
  className = "",
  variant = "text",
  ...rest
}) => {
  const linkStyles = `${styles.link} ${className}`;

  if (disabled) {
    return <span className={linkStyles}>{children}</span>;
  }

  return (
    <GatsbyLink to={to} className={linkStyles} {...rest}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
