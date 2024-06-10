import React from "react"; 

import { educationPartners, healthcarePartners1 } from "../../../../_data";

import * as styles from "./ourPartnersTabs.module.scss";

const renderTabsBody = (value) => {
  switch (value) {
    case "healthcare":
      return (
        <div className={styles.container}>
          <div className={styles.content}>
            {healthcarePartners1.map((img, idx) => (
              <figure
                key={idx}
                className={styles.logo}
                data-sal="fade"
                data-sal-delay="300"
                data-sal-easing="ease"
                data-sal-duration="700"
              >
                <img src={img} alt="healthcare partner" />
              </figure>
            ))}
          </div>
        </div>
      );
    case "education":
      return (
        <div className={styles.container}>
          <div className={styles.content}>
            {educationPartners.map((img, idx) => (
              <figure
                key={idx}
                className={styles.logo}
                data-sal="fade"
                data-sal-delay="300"
                data-sal-easing="ease"
                data-sal-duration="700"
              >
                <img src={img} alt="education partners" />
              </figure>
            ))}
          </div>
        </div>
      );
  }
};

export const ourPartnersTabContent = [
  {
    title: "Healthcare",
    body: renderTabsBody("healthcare"),
  },
  {
    title: "Education",
    body: renderTabsBody("education"),
  },
];
