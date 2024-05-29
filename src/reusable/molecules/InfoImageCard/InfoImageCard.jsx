import React from "react";

import * as styles from "./infoImageCard.module.scss";

const InfoImageCard = ({ src, title, info }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <figure className={styles.logo}>
        <img src={src} alt={title} />
        </figure>
        <h4>{title}</h4>
        <div className={styles.info}>{info}</div>
      </div>
    </div>
  );
};

export default InfoImageCard;
