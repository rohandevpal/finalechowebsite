import { Link } from "gatsby";
import React from "react";
import { navLinks } from "../../../constants";

import * as styles from "./navigation.module.scss";

const DropDownLink = ({ title, items, id }) => {
  return (
    <div className={styles.dropdown}>
      <span id={id} className={styles.dropdownButton}>{title}</span>
      <div className={styles.dropdownContent}>
        {items.map((item, idx) => (
          <Link key={idx} className={`${styles.dropdownLink} `} to={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {navLinks.map((link, idx) => {
        if (link.type === "group") {
          // Add an id to the last dropdown's span
          const dropdownId = idx === navLinks.length - 1 ? "last-dropdown" : undefined;
          return (
            <DropDownLink 
              key={idx} 
              title={link.label} 
              items={link.children} 
              id={dropdownId} 
            />
          );
        } else {
          return (
            <Link key={idx} className={`${styles.link} `} to={link.path}>
              {link.label}
            </Link>
          );
        }
      })}
    </nav>
  );
};

export default Navigation;
