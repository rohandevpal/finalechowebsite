import React from "react";
import { programData } from "../../../_data";
import { ProgramCard } from "../../molecules";

import * as styles from "./programLayout.module.scss";

const ProgramLayout = ({ cateogryFilter }) => {
  const filterData = programData.filter((program) => {
    return program.category === cateogryFilter;
  });

  return (
    <div className={styles.content}>
      {filterData.map((program) => {
        return <ProgramCard programData={program} />;
      })}
    </div>
  );
};

export default ProgramLayout;
