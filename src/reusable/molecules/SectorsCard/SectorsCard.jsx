import React from "react";

import { Heading, Link, Paragraph } from "../../atoms";

import * as styles from "./sectorsCard.module.scss";

const SectorCard = ({ icon, title, content, link }) => {
  return (
    <div className={styles.card}>
      {icon && (
        <figure className={styles.iconContainer}>
          <img className={styles.icon} src={icon} alt={`${title} icon`} />
        </figure>
      )}
      {title && (
        <Heading size="h2" fontWeight="normal" className={styles.title}>
          {title}
        </Heading>
      )}
      {content && <Paragraph className={styles.content}>{content}</Paragraph>}
      {link && (
        <Link to={link} target="_blank">
          Learn more
        </Link>
      )}
    </div>
  );
};

export default SectorCard;
