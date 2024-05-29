import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo, useState } from "react";

import { PersonCard } from "../../../molecules";
import TeamDeptInput from "../../TeamDeptInput/TeamDeptInput";

import * as styles from "./teamTab.module.scss";

const getDepartmentData = (teamData) => (department) =>
  teamData.filter(
    ({ node: { data } }) =>
      data.Department[0] === department && data.Status === "Active"
  );

const TeamTab = () => {
  const [filterValue, setFilterValue] = useState("Leadership");
  const {
    allAirtable: { edges: ourTeamData },
  } = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "EmployeesData" } }
        sort: { fields: [data___Ordering, data___Name] }
      ) {
        edges {
          node {
            data {
              Department
              Name
              Title
              Ordering
              Status
              Attachments {
                localFiles {
                  childImageSharp {
                    gatsbyImageData(
                      width: 500
                      placeholder: NONE
                      formats: [PNG]
                    )
                  }
                }
              }
            }
            recordId
          }
        }
      }
    }
  `);

  const getActiveMembers = useMemo(
    () => getDepartmentData(ourTeamData),
    [ourTeamData]
  );

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <TeamDeptInput currentDept={filterValue} handleDept={setFilterValue} />
      </div>
      <div className={styles.grid}>
        {ourTeamData &&
          getActiveMembers(filterValue).map((member, idx) => {
            return (
              <PersonCard
                key={member.node.recordId}
                name={member.node.data.Name}
                title={member.node.data.Title}
                image={
                  member.node.data.Attachments
                    ? member.node.data.Attachments.localFiles[0].childImageSharp
                        .gatsbyImageData
                    : "dummy"
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default TeamTab;
