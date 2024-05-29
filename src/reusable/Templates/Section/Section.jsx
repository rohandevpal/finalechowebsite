import React from "react";

import * as styles from "./section.module.scss";

const Section = ({
  children,
  className,
  altClassName,
  isAltBg,
  noMargin,
  ...rest
}) => {
  const sectionStyles = `${styles.section} ${
    noMargin ? styles.noMargin : ""
  } ${className} `;

  if (isAltBg) {
    return (
      <AlternateBgWrapper className={altClassName}>
        <section {...rest} className={sectionStyles}>
          {children}
        </section>
      </AlternateBgWrapper>
    );
  }

  return (
    <section {...rest} className={sectionStyles}>
      {children}
    </section>
  );
};

const AlternateBgWrapper = ({ children, className }) => (
  <div className={`${styles.darkBackground} ${className}`}>{children}</div>
);

export default Section;
