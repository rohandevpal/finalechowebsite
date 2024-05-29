import React from "react";
import { Heading, Link, Tag } from "../../atoms";
import { Box } from "../../Templates";
import * as styles from "./contactInfo.module.scss";

const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <Heading className="no-margin margin-b-sm" size="h4">
          Department-Wise Contacts
        </Heading>
        <Box>
          <div className={styles.group}>
            <Heading
              className="no-margin margin-b-sm"
              fontWeight="normal"
              size="h4"
            >
              For partnership related queries, write to us at :
            </Heading>
            <Tag className={styles.info}>partnerships@echoindia.in</Tag>
          </div>

          <div className={styles.group}>
            <Heading
              className="no-margin margin-b-sm"
              fontWeight="normal"
              size="h4"
            >
              For media & communication related queries, reach out at :
            </Heading>
            <Tag className={styles.info}>communications@echoindia.in</Tag>
          </div>
        </Box>
      </div>
      <div className="">
        <Heading className="margin-b-sm" size="h4">
          Registered & Corporate Office
        </Heading>
        <Box>
          <Heading className="no-margin" fontWeight="normal" size="h4">
            <strong>Extension for Community Healthcare Outcomes</strong>
            <br />
            Building No 232A, 1st Floor, Okhla Phase III
            <br />
            Okhla Industrial Area
            <br />
            New Delhi – 110020
            <br />
            India
            <br />
            Phone: +91 11 4106 8396
            <br />
            <Link to="https://goo.gl/maps/ABJeDnZrZYGNKfyB6" target="_blank">
              View on Google Maps →
            </Link>
          </Heading>
        </Box>
      </div>
    </div>
  );
};

export default ContactInfo;
