import React from "react";
import { Heading, Paragraph, Title } from "../../atoms";
import { Section } from "../../Templates";

import * as styles from "./ourStory.module.scss";

const OurStory = () => {
  return (
    <Section>
      <Title className="is-text-centered">Our Story</Title>
      <Paragraph size="display">
        ECHO India is a non-profit trust that was founded in 2008 with a mission
        to promote equity in Healthcare, Education and other Sustainable
        Development Goals. The organization achieves this goal by providing
        capacity-building programs for healthcare professionals, educators and
        community workers.ECHO India's innovative 'Hub and Spoke' Model of
        learning involves a team of experts serving as the hub, mentoring and
        training the spokes, who are a cohort of learners. This approach is
        facilitated through a cutting-edge digital infrastructure that enables
        scalable and sustainable capacity building in a cost-effective manner.
      </Paragraph>

      <Paragraph size="display">
        ECHO India aims to impact the lives of 400 million people in India by
        the end of 2025. To achieve this goal, in collaboration with our
        partners, we have launched over 250 hubs and implemented 800
        capacity-building programs that cover more than 30 disease areas. These
        programs have witnessed over a million attendances from healthcare
        workers and educators across the country, with remarkable results. The
        ECHO Model's 'All Teach All Learn' framework has been proven effective
        and has been validated by over 500 peer-reviewed articles published in
        renowned national and international journals, such as The New England
        Journal of Medicine and The Lancet.
      </Paragraph>

      <Paragraph size="display">
        ECHO India has joined forces with the Ministry of Health and Family
        Welfare (MoHFW) and 28 state National Health Missions (NHMs), municipal
        corporations, nursing councils, and esteemed medical institutions across
        India. Some of our leading institutional partners include AIIMS (All
        India Institute of Medical Sciences), NIMHANS (National Institute of
        Mental Health & Neurological Sciences), NITRD (National Institute for
        Tuberculosis and Respiratory Diseases), NICPR (National Institute of
        Cancer Prevention & Research), Tata Memorial Hospital, and PGIMER (Post
        Graduate Institute for Medical Education & Research). By collaborating
        with these entities, ECHO India is making significant strides toward
        strengthening the country's healthcare system.
      </Paragraph>

      <Heading className={`is-text-centered ${styles.headingMargin} `}>
        The beginning of a global movement
      </Heading>
      <Paragraph size="display">
        Project ECHO grew out of one doctor’s vision, Dr Sanjeev Arora, MD, a
        liver disease specialist at the University of New Mexico Health Sciences
        Center in Albuquerque.
        <br />
        Dr Arora was frustrated that he could serve only a fraction of the
        Hepatitis C patients while thousands of patients in his home state were
        unable to get treatment simply because specialists were hardly
        accessible from where they lived. With the intention of delivering
        treatment to as many patients as possible, in the remotest, most
        underserved areas, he created a case-based learning model to mentor and
        amplify capacities of local healthcare providers on how to treat the
        condition.{" "}
      </Paragraph>

      <Paragraph size="display">
        Today, the model is being implemented by nearly 400 partners in 38
        countries, working across 70+ focus areas.
      </Paragraph>
    </Section>
  );
};

export default OurStory;
