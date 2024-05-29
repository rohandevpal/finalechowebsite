import React from "react";

import trainingBanner from "../../assets/images/training/TrainingBanner.png";

import { Banner } from "../../reusable/organisms";

import { DefaultLayout } from "../../reusable/Templates";
import EchoTraining from "../../reusable/organisms/EchoTraining/EchoTraining";

const Training = () => {

  return (
    <DefaultLayout>
      <Banner
        image={trainingBanner}
        subtitle="Our focus is to educate our partners on the significance of the ECHO Model and familiarize them with the process of conducting the regular sessions
        Learn about upcoming orientations, immersions and other virtual trainings carried out to equip you to run your own ECHO programs"
        title="Trainings"
      />
      <EchoTraining/>
    </DefaultLayout>
  );
};

export default Training;
