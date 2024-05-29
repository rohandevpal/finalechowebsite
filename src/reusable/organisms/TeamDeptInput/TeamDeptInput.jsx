import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Paragraph } from "../../atoms";

import * as styles from "./teamDeptInput.module.scss";

const TeamDeptInput = ({ handleDept, currentDept }) => {
  const {
    allAirtable: { distinct: departments },
  } = useStaticQuery(graphql`
    query MyQuery {
      allAirtable {
        distinct(field: data___Department)
      }
    }
  `);

  const handleChange = (event) => {
    const { value } = event.target;
    handleDept(value);
  };
  return (
    <div>
      <Paragraph className={styles.tagDescription} size="caption">
        Filter By Department
      </Paragraph>
      <div className={styles.tags}>
        <span className={styles.tag}>
          <input
            id="dept-Leadership"
            onChange={handleChange}
            type="radio"
            name="department-selector"
            value={"Leadership"}
            checked={currentDept === "Leadership"}
            className={styles.tagInput}
          />
          <label htmlFor="dept-Leadership" className={styles.tagLabel}>
            Leadership
          </label>
        </span>
        {departments.map((dept, idx) => {
          if (dept !== "Leadership") {
            return (
              <span key={dept + idx} className={styles.tag}>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="department-selector"
                  value={dept}
                  checked={currentDept === dept}
                  id={`dept-${dept}`}
                  className={styles.tagInput}
                />
                <label
                  htmlFor={`dept-${dept}`}
                  className={styles.tagLabel}
                  key={dept}
                >
                  {dept}
                </label>
              </span>
            );
          }
        })}
      </div>
      <div className={styles.dropdownContainer}>
        <label htmlFor="dept-selector-dropdown">View By Department</label>
        <select
          id="dept-selector-dropdown"
          value={currentDept}
          onChange={handleChange}
          defaultChecked="Leadership"
          className={styles.dropdown}
        >
          <option value="Leadership">Leadership</option>
          {departments.map((dept) => {
            if (dept !== "Leadership") {
              return (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              );
            }
          })}
        </select>
      </div>
    </div>
  );
};

export default TeamDeptInput;
