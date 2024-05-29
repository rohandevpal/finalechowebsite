import { Link } from "gatsby";
import React, { useState } from "react";

import { navLinks } from "../../../constants";
import { EchoLogo, Heading } from "../../atoms";
import * as styles from "./sideNavigation.module.scss";

const NavAccordion = ({ title, links, toggleNavigation }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  return (
    <div className={styles.link}>
      <div className={styles.accActions} onClick={toggleAccordion}>
        <span
          className={isAccordionOpen ? styles.accHeadingOpen : ""}
          size="h6"
        >
          {title}
        </span>
        <span>{isAccordionOpen ? "-" : "+"}</span>
      </div>
      {isAccordionOpen && (
        <ul className={styles.accDrawer}>
          {links.map((link, idx) => (
            <Link onClick={toggleNavigation} key={idx} to={link.path}>
              <li className={styles.accChild}>{link.label}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

const SideNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={toggleNav}>
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </div>
      {isNavOpen && (
        <div className={styles.navigation}>
          <div className={styles.brand}>
            <Link onClick={toggleNav} to="/">
              <EchoLogo />
            </Link>
            <button className={styles.closeButton} onClick={toggleNav}>
              <span className={styles.times} />
              <span className={styles.times} />
            </button>
          </div>
          <nav className={styles.linkGroup}>
            {navLinks.map((link, idx) => {
              if (link.type === "group") {
                return (
                  <NavAccordion
                    key={idx}
                    title={link.label}
                    links={link.children}
                    toggleNavigation={toggleNav}
                  />
                );
              } else {
                return (
                  <Link
                    onClick={toggleNav}
                    className={styles.link}
                    key={idx}
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                );
              }
            })}
          </nav>
        </div>
      )}
    </div>
  );
};

export default SideNavigation;
