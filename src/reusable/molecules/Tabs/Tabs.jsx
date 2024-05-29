import React, { useState } from "react";

import * as styles from "./tabs.module.scss";

const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tabNumber) => () => {
    setActiveTab(tabNumber);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {items.map((item, idx) => (
          <span
            key={idx}
            tabIndex={0}
            role="tab"
            aria-selected={activeTab === idx}
            className={
              activeTab === idx
                ? `${styles.activeTab} ${styles.tab}`
                : styles.tab
            }
            onClick={toggleTab(idx)}
          >
            {item.title}
          </span>
        ))}
      </div>

      <section className={styles.content}>{items[activeTab].body}</section>
    </div>
  );
};

export default Tabs;
