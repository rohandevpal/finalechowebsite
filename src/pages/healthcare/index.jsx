import React from "react";

import healthcareBanner from "../../assets/images/healthcare/healthcareBanner.png";
import completedHours from "../../assets/images/healthcare/completedhours.svg";
import ongoing from "../../assets/images/healthcare/ongoing.svg";
import totalHours from "../../assets/images/healthcare/totalhours.svg";

import healthcarepartner1 from "../../assets/images/healthcare/healthcarepartner1.png";
import healthcarepartner2 from "../../assets/images/healthcare/healthcarepartner2.png";
import healthcarepartner3 from "../../assets/images/healthcare/healthcarepartner3.png";
import healthcarepartner4 from "../../assets/images/healthcare/healthcarepartner4.png";
import healthcarepartner5 from "../../assets/images/healthcare/healthcarepartner5.png";
import cardiology from "../../assets/images/healthcare/focusarea/cardiology.svg";
import cancerPrevention from "../../assets/images/healthcare/focusarea/Cancer_Prevention.svg";
import covidManagement from "../../assets/images/healthcare/focusarea/COVID19_Management.svg";
import covid from "../../assets/images/healthcare/focusarea/COVID19.svg";

import construction from "../../assets/images/healthcare/focusarea/constructionworker.svg";
import developmentDisabilities from "../../assets/images/healthcare/focusarea/DevelopmentDisabilities.svg";
import liverDiseaseHepatitisC from "../../assets/images/healthcare/focusarea/Liver_Disease_Hepatitis.svg";
import maternalChildHealthCOVIDManagement from "../../assets/images/healthcare/focusarea/Maternal_Child_COVID19.svg";

import addictionManagement from "../../assets/images/healthcare/focusarea/Mental_Addiction_Management.svg";
import mentalhealthLGBT from "../../assets/images/healthcare/focusarea/Mental_Health_LGBT.svg";
import microbiologyAntimicrobialResistance from "../../assets/images/healthcare/focusarea/Microbiology_Anti-microbial.svg";
import palliativeCareCovid from "../../assets/images/healthcare/focusarea/PalliativeCareCovid.svg";
import palliativeCarePhysiotherapy from "../../assets/images/healthcare/focusarea/Palliative_Care_Physiotherapy.svg";
import respiratoryCOVID from "../../assets/images/healthcare/focusarea/Respiratory_COVID-19.svg";
import vaccinatioImmunizationCOVID from "../../assets/images/healthcare/focusarea/Vaccination_Immunization_COVID-19.svg";
import maternalChildHealth from "../../assets/images/healthcare/focusarea/Maternal_Child_Health.svg";
import opthalmologyDiabeticEyeDisease from "../../assets/images/healthcare/focusarea/Opthalmology_Diabetic_Disease.svg";
import pediatricDiseaseCOVID from "../../assets/images/healthcare/focusarea/Pediatric_COVID-19.svg";
import primaryHealthcare from "../../assets/images/healthcare/focusarea/Primary_Healthcare.svg";
import traditionalMedicinePrimaryHealth from "../../assets/images/healthcare/focusarea/Traditional_Primary_Health.svg";

import maternalChildHealthQualityImprovement from "../../assets/images/healthcare/focusarea/Maternal_Child_Health_Quality.svg";
import respiratoryDiseasesTuberculosis from "../../assets/images/healthcare/focusarea/Respiratory_Tuberculosis.svg";
import mentalHealth from "../../assets/images/healthcare/focusarea/Mental_Health.svg";
import pediatricneonatalHealth from "../../assets/images/healthcare/focusarea/Pediatric_Health.svg";
import palliativeCare from "../../assets/images/healthcare/focusarea/Palliative_Care.svg";
import waterManagement from "../../assets/images/healthcare/focusarea/Water_Management.svg";
import { Banner, ProgramLayout } from "../../reusable/organisms";
import { DefaultLayout, Section } from "../../reusable/Templates";
import { Heading, Link, Paragraph } from "../../reusable/atoms";
import { FocusAreaCard } from "../../reusable/molecules";

import * as styles from "./healthcare.module.scss";

const Healthcare = () => {
  return (
    <DefaultLayout>
      <Banner
        image={healthcareBanner}
        subtitle="The Indian healthcare environment provides a one-of-a-kind opportunity for the adoption of the ECHO model."
        title="Healthcare"
      />

      <Section>
        <Heading className="is-text-centered">
          ECHO Model for Healthcare
        </Heading>
        <Paragraph size="display">
          The Indian healthcare environment provides a one-of-a-kind opportunity
          for the adoption of the ECHO model. The need for specialty care in
          India, especially in rural settings, is substantial and growing and
          this is truer at this time of unprecedented health criticality
        </Paragraph>

        <Paragraph size="display">
          The teleECHO programs are supported by basic and widely available
          teleconferencing technology. During the sessions, primary care
          clinicians from multiple sites present patient cases to the specialist
          teams and to each other. Specialists serve as mentors and colleagues,
          sharing their knowledge and expertise with primary care clinicians.
          Essentially, ECHO® creates ongoing learning communities where primary
          care clinicians receive support and develop the skills they need.{" "}
        </Paragraph>

        <Paragraph size="display">
          The ECHO model helps reinforce the national priority set forth by
          Prime Minister Narendra Modi in August 2014 of expanding digital
          access in rural communities and will benefit from the government
          initiative to vastly improve the broadband infrastructure.
        </Paragraph>

        <Paragraph size="display">
          With the COVID-19 pandemic forcing many countries including India to
          go into a full or partial lockdown, moving knowledge without moving
          people became more critical than ever before. Acknowledging the novel
          challenges posed by the novel coronavirus, ECHO India decided to pivot
          its operations by directing a large proportion of its focus and
          resources towards tackling this immediate public health crisis.{" "}
          <Link to="/covid">
            Read more about ECHO India’s COVID response &rarr;
          </Link>
        </Paragraph>
        <Heading size="h4">Launch of ECHO India's Nursing Vertical</Heading>
        <Paragraph size="display">
          To strengthen the nursing fraternity of India, ECHO India pledges to
          support its partners to train and upskill the nurses of the different
          healthcare settings across the country. We aim to create a scenario
          where all patients are well attended and given adequate care by
          well-trained nurses. With the launch of the ECHO India Nursing
          Vertical in 2020, we hope to address this issue. The need for
          specialty care in India is substantial and growing and this is truer
          at this time of unprecedented health criticality.{" "}
          <Link to="/nursing">
            Read more about ECHO India’s nursing initiatives &rarr;
          </Link>
        </Paragraph>
      </Section>

      <Section isAltBg>
        <Heading>Positively Impacting the Health Care Sector</Heading>
        <div className={styles.grid}>
          <div className={styles.healthInfoCard}>
            <figure className={styles.healthInfoLogo}>
              <img src={completedHours} alt="" />
            </figure>
            <Heading className="no-margin margin-b-sm">430+</Heading>
            <Paragraph className="no-margin">Completed Programs</Paragraph>
          </div>
          <div className={styles.healthInfoCard}>
            <figure className={styles.healthInfoLogo}>
              <img src={ongoing} alt="" />
            </figure>
            <Heading className="no-margin margin-b-sm">270+</Heading>
            <Paragraph className="no-margin">Ongoing programs</Paragraph>
          </div>
        </div>
      </Section>
      <Section>
        <Heading>Programs supported By ECHO India</Heading>
        <ProgramLayout cateogryFilter={"Healthcare"} />
      </Section>

      <Section>
        <Heading className="margin-b-sm">Health Care Partners</Heading>
        <Heading className="no-margin" fontWeight="normal" size="h6">
          From healthcare & education to many other sustainable development
          goals, our only mission is to create real impact by serving the
          underserved population.
        </Heading>
        <div className={styles.partnerGrid}>
          <figure>
            <img src={healthcarepartner1} />
          </figure>
          <figure>
            <img src={healthcarepartner2} />
          </figure>
          <figure>
            <img src={healthcarepartner3} />
          </figure>
          <figure>
            <img src={healthcarepartner4} />
          </figure>
          <figure>
            <img src={healthcarepartner5} />
          </figure>
        </div>
      </Section>

      <Section>
        <Heading>Focus Areas</Heading>
        <div className={styles.focusGrid}>
          <FocusAreaCard src={cardiology} title="Cardiology" />
          <FocusAreaCard
            src={construction}
            title="Construction Worker Welfare"
          />
          <FocusAreaCard src={covid} title="COVID-19" />
          <FocusAreaCard
            src={developmentDisabilities}
            title="Development Disabilities | ADHD"
          />
          <FocusAreaCard
            src={cancerPrevention}
            title="Cancer Prevention and Screening"
          />
          <FocusAreaCard src={covidManagement} title="COVID 19 Management" />
          <FocusAreaCard
            src={addictionManagement}
            title="Mental Health | Addiction Management"
          />
          <FocusAreaCard src={mentalhealthLGBT} title="Mental Health | LGBT" />
          <FocusAreaCard
            src={microbiologyAntimicrobialResistance}
            title="Microbiology | Anti-microbial Resistance"
          />
          <FocusAreaCard
            src={palliativeCareCovid}
            title="Palliative Care | COVID-19"
          />
          <FocusAreaCard
            src={palliativeCarePhysiotherapy}
            title="Palliative Care | Physiotherapy"
          />
          <FocusAreaCard
            src={respiratoryCOVID}
            title="Respiratory Diseases | COVID-19"
          />
          <FocusAreaCard
            src={vaccinatioImmunizationCOVID}
            title="Vaccination and Immunization | COVID-19"
          />
          <FocusAreaCard
            src={maternalChildHealth}
            title="Maternal and Child Health"
          />
          <FocusAreaCard
            src={opthalmologyDiabeticEyeDisease}
            title="Opthalmology | Diabetic Eye Disease"
          />
          <FocusAreaCard
            src={pediatricDiseaseCOVID}
            title="Pediatric Disease | COVID-19"
          />
          <FocusAreaCard src={primaryHealthcare} title="Primary Healthcare" />
          <FocusAreaCard
            src={traditionalMedicinePrimaryHealth}
            title="Traditional Medicine | Primary Health"
          />
          <FocusAreaCard
            src={maternalChildHealthCOVIDManagement}
            title="Maternal and Child Health | COVID-19 Management"
          />
          <FocusAreaCard
            src={maternalChildHealthQualityImprovement}
            title="Maternal and Child Health | Quality Improvement"
          />
          <FocusAreaCard
            src={respiratoryDiseasesTuberculosis}
            title="Respiratory Diseases | Tuberculosis"
          />
          <FocusAreaCard src={mentalHealth} title="Mental Health" />
          <FocusAreaCard
            src={liverDiseaseHepatitisC}
            title="Liver Disease | Hepatitis C"
          />
          <FocusAreaCard
            src={pediatricneonatalHealth}
            title="Pediatric | Neonatal Health"
          />
          <FocusAreaCard src={palliativeCare} title="Palliative Care" />
          <FocusAreaCard src={waterManagement} title="Water Management" />
        </div>
      </Section>
    </DefaultLayout>
  );
};

export default Healthcare;
