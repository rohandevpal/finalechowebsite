import React from "react";

import { Heading, Paragraph } from "../../../atoms";
import { nepalBodyItems, bangladeshBodyItems } from "../../../../_data";

import * as styles from "./internationalTabsContent.module.scss";

const renderTabsBody = (value) => {
  switch (value) {
    case "Nepal":
      return nepalBodyItems.map((bodyItem) => (
        <div className={styles.container}>
          <div className={styles.content}>
            <Paragraph size="display">{bodyItem.para}</Paragraph>

            <ul>
              <li>
                <Paragraph size="display">{bodyItem.list1}</Paragraph>
              </li>
              <li>
                <Paragraph size="display">{bodyItem.list2}</Paragraph>
              </li>
              <li>
                <Paragraph size="display">{bodyItem.list3}</Paragraph>
              </li>
            </ul>
          </div>
        </div>
      ));

    case "Bangladesh":
      return bangladeshBodyItems.map((bodyItem) => (
        <div className={styles.container}>
          <div className={styles.subcontainer}>
            <Heading size="h4" fontWeight="bold" className="is-underline">
              {bodyItem.heading1}
            </Heading>
            <Paragraph size="display" className="para-color">
              {bodyItem.heading1para1}
            </Paragraph>
            <Paragraph size="display" className="para-color">
              {bodyItem.heading1para2}
            </Paragraph>
            <Paragraph size="display" className="para-color">
              {bodyItem.heading1para3}
            </Paragraph>
          </div>

          <div className={styles.subcontainer}>
            <Heading size="h4" fontWeight="bold" className="is-underline">
              {bodyItem.heading2}
            </Heading>
            <Paragraph size="display">{bodyItem.heading2para1}</Paragraph>
            <div className="tabs_body_list">
              <ul>
                <li>
                  <Paragraph size="display">{bodyItem.heading2list1}</Paragraph>
                </li>
                <li>
                  <Paragraph size="display">{bodyItem.heading2list2}</Paragraph>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ));
  }
};

export const ourCountryPartnersTabContent = [
  {
    title: "Nepal",
    body: renderTabsBody("Nepal"),
  },
  {
    title: "Bangladesh",
    body: renderTabsBody("Bangladesh"),
  },
];
