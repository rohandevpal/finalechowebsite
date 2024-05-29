import React from "react";

import covidBanner from "../../assets/images/covid/covidbanner.png";
import sessionsConducted from "../../assets/images/covid/Sessions_Conducted.svg";
import healthWorkers from "../../assets/images/covid/Health_Workers_Trained.svg";
import totalHourTraining from "../../assets/images/covid/Total_Hours_Of_Training.svg";
import listState from "../../assets/images/covid/List_of_states_ECHO_has_partnered_with.svg";
import attendance from "../../assets/images/covid/Number_Of_Attendances.svg";

import { Heading, Paragraph } from "../../reusable/atoms";
import { Banner } from "../../reusable/organisms";
import { DefaultLayout, Section } from "../../reusable/Templates";
import { InfoImageCard } from "../../reusable/molecules";

import * as styles from "./covid.module.scss";

const Covid = () => {
  return (
    <DefaultLayout>
      <Banner
        image={covidBanner}
        subtitle="Our efforts towards COVID 19 vaccination trainings & programs"
        title="COVID-19 Response"
      />

      <Section>
        <Heading className="no-margin margin-b-lg is-text-centered">
          ECHO INDIA’s COVID RESPONSE
        </Heading>
        <Paragraph size="display" className="no-margin is-text-centered">
          With the COVID-19 pandemic forcing many countries including India to
          go into a full or partial lockdown,
          <br /> moving knowledge without moving people became more critical
          than ever before.
        </Paragraph>
      </Section>
      <Section noMargin isAltBg>
        <Heading>COVID Awareness & Management Trainings</Heading>

        <div className={styles.grid}>
          <InfoImageCard
            src={sessionsConducted}
            title="2,600+"
            info="Sessions Conducted"
          />
          <InfoImageCard
            src={healthWorkers}
            title="5,90,000+"
            info="Number of Attendances"
          />
        </div>
      </Section>
      <Section noMargin isAltBg className="no-margin-y">
        <Heading>COVID Immunization Trainings</Heading>

        <div className={styles.grid}>
          <InfoImageCard
            src={listState}
            title="22"
            info="States ECHO has partnered with"
          />
          <InfoImageCard
            src={attendance}
            title="2,20,000+"
            info="Number of Attendances"
          />
          <InfoImageCard
            src={sessionsConducted}
            title="650+"
            info="Sessions Conducted"
          />
        </div>
      </Section>
    </DefaultLayout>
  );
};

export default Covid;
