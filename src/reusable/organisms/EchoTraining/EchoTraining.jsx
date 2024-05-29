import React from "react";

import { Section } from "../../Templates";
import { training, virtualtraining } from "../../../_data";
import { TrainingCard } from "../../molecules";
import { Heading, Link, Paragraph } from "../../atoms";

import * as styles from "./EchoTraining.module.scss";

const EchoTraining = () => {
  return (
    <Section
      isAltBg
      noMargin
      altClassName={styles.container}
      className="no-margin-y"
    >
      <Heading>Induction</Heading>

      <div className={styles.grid}>
        {training.map((items) => {
          return (
            <TrainingCard
              title={items.title}
              img={items.img}
              info={items.info}
              link={items.link}
            />
          );
        })}
      </div>
      <Paragraph className={`margin-b-lg ${styles.note}`} size="display">
        If you have not signed the partnership documents and would like
        to attend an immersion, please contact our training team at{" "}
        <Link to="mailto:training@echoindia.in">training@echoindia.in</Link>
      </Paragraph>

      <Heading className="margin-t-xl">Virtual Training</Heading>

      <div className={styles.grid}>
        {virtualtraining.map((items) => {
          return (
            <TrainingCard
              title={items.title}
              img={items.img}
              info={items.info}
              date={items.date}
              link={items.link}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default EchoTraining;
