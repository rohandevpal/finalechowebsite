import { Link } from "gatsby";
import React, { useEffect } from "react";
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
  useEffect(() => {
    // Add the style for #last-dropdown
    const style = document.createElement("style");
    style.innerHTML = `
  span#last-dropdown {
    background: #960000;
    padding: 15px 30px;
    border-radius: 10px;
    color: #fff !important;
  }
  span#last-dropdown::before {
    content: "";
    position: absolute;
    border-right: 0.125rem solid #ffffff;
    border-bottom: 0.125rem solid #ffffff !important;
    height: 0.4375rem;
    width: 0.4375rem;
    right: 15px;
    top: 45%;
    transform: translateY(-50%) rotateZ(45deg);
  }
`;
    document.head.appendChild(style);

    // Cleanup function to remove the style when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
