import React from "react";
import { Heading, Paragraph, Link } from "../../atoms";
import * as styles from "./banner.module.scss";

const Banner = ({
  title,
  subtitle,
  image,
  className,
  cta,
  link,
  bgAlign = "top",
}) => {
  const containerStyles = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "top",
  };

  return (
    <div
      style={containerStyles}
      className={`${styles.container} ${className}`}
      data-sal="fade"
      data-sal-delay="50"
      data-sal-easing="ease"
      data-sal-duration="300"
    >
      <div className={styles.content}>
        <Heading className={styles.heading} size="h1">
          {title}
        </Heading>
        <Paragraph size="display" className={styles.subtitle}>
          {subtitle}
        </Paragraph>
        {cta && (
          <Paragraph size="display">
            <Link to={link}>{cta}</Link>
          </Paragraph>
        )}
      </div>
    </div>
  );
};
export default Banner;
