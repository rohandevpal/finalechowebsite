import React from "react";

import * as styles from "./focusAreaCard.module.scss";

const FocusAreaCard = ({ src, title }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.logo}>
        <img src={src} alt={title} />
      </figure>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default FocusAreaCard;
