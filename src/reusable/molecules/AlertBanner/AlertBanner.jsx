import React, { useContext } from "react";
import { Link } from "gatsby";

import { AlertBannerContext } from "../../../lib/contexts/alertBannerContext";

import { Button, Paragraph } from "../../atoms";

import * as styles from "./alertBanner.module.scss";

const AlertBanner = () => {
  const alertContext = useContext(AlertBannerContext);

  /**
   * TODO:
   * @constant {string} redirectLink:
   *  - Link to config? (different envs can redirect to different links)
   */
  const redirectLink =
    "https://www.facebook.com/110668970415501/posts/509271720555222/?d=n";

  /*
   * INFO: Commented out for future usage.
   *  const closeBanner = () => {
   *   if (alertContext?.toggleBanner) {
   *     alertContext.toggleBanner();
   *   }
   * };
   */

  return (
    <div className={styles.banner}>
      {alertContext?.showBanner && (
        <div className={styles.content}>
          <div className={styles.info}>
            <Paragraph className="no-margin" size="caption">
              ECHO India and Kolkata Municipal Corporation conduct Infection
              Prevention and Control training for nurses
            </Paragraph>
          </div>
          <div className={styles.infoResponse}>
            <Paragraph size="caption">
              ECHO India and KMC conduct nurse training for IPC
            </Paragraph>
          </div>
          <div className={styles.actions}>
            <Link to={redirectLink} target="_blank">
              <Button variant="secondary" className={styles.button}>
                Read more
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default AlertBanner;
