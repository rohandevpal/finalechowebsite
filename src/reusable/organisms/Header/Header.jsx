import React from "react";
import { Link } from "gatsby";

import * as styles from "./header.module.scss";

import { AlertBanner, Navigation, SideNavigation } from "../../molecules";
import { EchoLogo } from "../../atoms";

const Header = () => {
  return (
    <header className={`${styles.container} ${styles.mainheaderecho}`}>
      <AlertBanner />
      <div className={styles.content}>
        <Link activeClassName="link-active" className="link" to="/">
          <EchoLogo />
        </Link>

        <Navigation />
        <SideNavigation />
      </div>
    </header>
  );
};

export default Header;
