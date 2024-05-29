import React from "react";
import { Heading } from "../../atoms";

import { Section } from "../../Templates";
import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";

import * as styles from "./contactDisplay.module.scss";

const ContactDisplay = () => {
  return (
    <Section>
      <Heading className="no-margin margin-b-xl">Share your details</Heading>
      <div className={styles.container}>
        <ContactForm className={styles.form} />
        <ContactInfo />
      </div>
    </Section>
  );
};

export default ContactDisplay;
