import React from "react";

import { PersonCard } from "../../../molecules";
import TeamTab from "../TeamTab/TeamTab";

import { trusteesData } from "../_data";

import * as styles from "./ourTeamTabs.module.scss";

const renderTabBody = (data) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {data.map((person, idx) => (
          <PersonCard key={idx} {...person} />
        ))}
      </div>
    </div>
  );
};

export const OurTeamTabContent = [
  { title: "Trustees", body: renderTabBody(trusteesData) },
  { title: "Team", body: <TeamTab /> },
];
