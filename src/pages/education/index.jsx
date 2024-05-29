import React from "react";

import educationBanner from "../../assets/images/education/educationBanner.png";
import trained from "../../assets/images/education/trained.svg";
import educationProgram from "../../assets/images/education/educationProgram.svg";
import benefited from "../../assets/images/education/benefited.svg";
import educationcarepartner1 from "../../assets/images/education/logo_tn.png";
import educationcarepartner2 from "../../assets/images/education/logo_apngc.png";
import educationcarepartner3 from "../../assets/images/education/logo_dsprud.jpg";
import educationcarepartner4 from "../../assets/images/education/logo_rusa.png";
import thimk from "../../assets/images/education/thimk.svg";
import gramurja from "../../assets/images/education/gramurja.png";
import nuroSculpting from "../../assets/images/education/Neurosculpting.svg";
import readingWriting from "../../assets/images/education/Reading_Skills.svg";
import buildingMath from "../../assets/images/education/Building_Mathematical_Competence.svg";
import makingScience from "../../assets/images/education/Making_Science.svg";
import collaborative from "../../assets/images/education/Collaborative_Storytelling.svg";
import mindFulness from "../../assets/images/education/Mindfulness.svg";
import preventHealth from "../../assets/images/education/Preventive_Health_Children.svg";
import schoolLeadership from "../../assets/images/education/School_Leadership.svg";

import { Banner, ProgramLayout } from "../../reusable/organisms";
import { DefaultLayout, Section } from "../../reusable/Templates";
import { Heading, Paragraph } from "../../reusable/atoms";
import { FocusAreaCard, InfoImageCard } from "../../reusable/molecules";

import * as styles from "./education.module.scss";

const education = () => {
  return (
    <DefaultLayout>
      <Banner
        image={educationBanner}
        subtitle="ECHO education programs are designed to train educators by creating a knowledge-sharing network led by expert teams who conduct virtual sessions with local educators and agencies"
        title="Education - a culture of learning"
      />

      <Section>
        <Heading className="is-text-centered">ECHO Model for Education</Heading>
        <Paragraph size="display" className={styles.paraColor}>
          In 2015, Ms. Anuradha Rai, Vice Principal of Ambience School, New
          Delhi at that time, saw a need to improve the expertise of her
          educators in the associated public schools, and started the ECHO
          movement in education in India. The Ambience Teacher mentoring ECHO
          hub, completed 16 ECHO programs, joined by more than 500 teacher
          participants from different schools Ever since, ECHO India has
          supported more than 35 programs that have impacted hundreds of
          educators.
        </Paragraph>
        <Paragraph size="display" className={styles.paraColor}>
          The ECHO model, which is a hub and spoke mentoring model, empowers
          educators with the best new teaching approaches and enriches their
          learnings with time-tested strategies proven beneficial for children.
          ECHO Education offers sustainable and scalable solutions for
          educators’ professional development, recruitment and retention, and
          motivation by providing regular access to expert mentorship.
        </Paragraph>
        <Paragraph size="display" className={styles.paraColor}>
          ECHO model is driven by case-based learning techniques to master
          complexity. Case-based learning approach gives a voice to the
          participants to express their challenges in a safe learning
          environment, which further helps in building trust.
        </Paragraph>
        <Paragraph size="display" className={styles.paraColor}>
          Our partners include organizations in the fields of education and
          training, from both government and non-governmental backgrounds as
          well as institutions and individuals such as school leaders, mentors,
          functionaries, and administrators. With the continuous
          teacher-mentorship, we hope to contribute towards improving the
          quality of education in schools’
        </Paragraph>
      </Section>

      <Section isAltBg>
        <Heading>Positively Impacting the Education Sector</Heading>

        <div className={styles.impactGrid}>
          <InfoImageCard
            src={educationProgram}
            title="45+"
            info="ECHO Programs"
          />
          <InfoImageCard
            src={trained}
            title="10,000+"
            info="Educators trained"
          />
          <InfoImageCard
            src={benefited}
            title="780,000+"
            info="Children benefited*"
          />
        </div>
        <Paragraph size="body" className={styles.paraColor}>
          *Estimated
        </Paragraph>
      </Section>

      <Section>
        <Heading>Programs supported by ECHO India</Heading>
        <Heading size="h4">1. Samagra Shiksha Assam</Heading>
        <Paragraph size="body" className={styles.paraColor}>
          Samagra Shiksha is an overarching programme for the school education
          sector extending from pre-school to class 12 with the broader goal of
          improving school effectiveness measured in terms of equal
          opportunities for schooling and equitable learning outcomes. Samagra
          Shiksha Assam collaborated with ECHO India to empower the educators of
          Assam.
        </Paragraph>
        <Paragraph size="body" className={styles.paraColor}>
          After the successful completion of the pilot Samagra Shiksha Assam
          School Leadership ECHO, the state has started the programs in
          Bongaigaon, Dhubri, South Salmara-Mankachar, Kamrup-Metro,
          Kamrup-Rural, West Karbi Anglong and Kokrajhar districts. These
          programs focus on foundational learning and School leadership, using
          the ECHO model to build capacities of teachers and school leaders.
        </Paragraph>
        <Heading size="h4">2. Muktangan Education Trust</Heading>
        <Paragraph size="body" className={styles.paraColor}>
          Muktangan provides child-friendly, holistic, and inclusive education
          to 3700+ children from the educationally underserved communities.
          Muktangan started their first ECHO, ‘Muktangan Student Engagement
          Strategies ECHO’, in January 2021, to improve digital literacy and
          incorporate student engagement strategies. Muktangan has started two
          more ECHO programs, on Early Childhood Education and Student
          Engagement.
        </Paragraph>
        <Heading size="h4">3. thiMk</Heading>
        <Paragraph size="body" className={styles.paraColor}>
          thiMk, based out of Bengaluru, provides consultancy services in
          education, derivatives and risk management. In collaboration with ECHO
          India, thiMk started their first ECHO program, i.e., ‘ThiMk Re-Imagine
          Math ECHO (TRIME)’ in May 2022, for elementary math teachers. The
          focus of this ECHO was to train teachers in various innovative
          teaching ideas and ways to introduce a topic in math, develop and
          solve practical problems and assess understanding without judgement.
        </Paragraph>
        <Paragraph size="body" className={styles.paraColor}>
          thiMk has also started ‘Re-Imagine Science ECHO’ in July 2022, which
          focuses on innovative ways of teaching science and developing concepts
          through hands-on experiments and activities.
        </Paragraph>
        <Heading size="h4">
          4. Andhra Pradesh National Green Corps (APNGC)
        </Heading>
        <Paragraph size="body" className={styles.paraColor}>
          Andhra Pradesh National Green Corps (APNGC) is the state wing of the
          National Green Corps (NGC) "Eco-club" Program, which was launched by
          Ministry of Environment, Forest & Climate Change, Govt. of India
          ((MoEF & CC) to inculcate environmental awareness among school/college
          children.
        </Paragraph>
        <Paragraph size="body" className={styles.paraColor}>
          APNGC concluded ‘Environmental Communication for Behaviour Change
          ECHO’ in September 2022, which aimed at creating awareness among
          government school teachers about environmental conservation and
          sustainable development.
        </Paragraph>
        <Heading size="h4">5. DSPRUD</Heading>
        <Paragraph size="body" className={styles.paraColor}>
          Delhi Society for Promotion of Rational Use of Drugs (DSPRUD) is a
          not-for-profit organization, which is dedicated to the promotion of
          essential medicine concepts, rational use of medicines and patient
          safety. DSPRUD concluded their first ECHO program for teachers on
          antimicrobial resistance and started another ECHO program ‘DSPRUD ECHO
          Awareness Program on Medication safety for School Educators’ in July
          2022
        </Paragraph>
        <Heading size="h4">
          6. Rashtriya Uchchatar Shiksha Abhiyan (RUSA), Tamil Nadu
        </Heading>
        <Paragraph size="body" className={styles.paraColor}>
          Rashtriya Uchchatar Shiksha Abhiyan (RUSA), a Centrally Sponsored
          Scheme (CSS) was launched in 2013 aiming at providing strategic
          funding to eligible State Higher Educational Institutions. State
          Project Directorate RUSA Tamil Nadu launched the RUSA-ECHO
          Transformational Leadership Program (TLP) for the Principals of
          Government Polytechnic Colleges across Tamil Nadu in August 2022. The
          program aims at creating passionate, enthusiastic, and energetic
          Principals who can meet all the challenges of the 21st century through
          experiential learning, values, and personal & organizational goals.
        </Paragraph>
      </Section>

      <Section isAltBg>
        <Heading className="margin-b-sm">Education Partners</Heading>
        <Paragraph className="no-margin" size="h5" fontWeight="normal">
          From healthcare & education to many other sustainable development
          goals, our only mission is to create real impact by serving the
          underserved population.
        </Paragraph>
        <div className={styles.partnerGrid}>
          <figure>
            <img src={educationcarepartner1} />
          </figure>
          <figure>
            <img src={educationcarepartner2} />
          </figure>
          <figure>
            <img src={educationcarepartner3} />
          </figure>
          <figure>
            <img src={educationcarepartner4} />
          </figure>
        </div>
      </Section>

      <Section>
        <Heading>Focus Areas</Heading>

        <div className={styles.focusGrid}>
          <FocusAreaCard src={nuroSculpting} title="Neurosculpting" />
          <FocusAreaCard
            src={readingWriting}
            title="Reading, Writing & Comprehension Skills"
          />
          <FocusAreaCard
            src={buildingMath}
            title="Building Mathematical Competence"
          />
          <FocusAreaCard src={makingScience} title="Making Science Hands-on" />
          <FocusAreaCard
            src={collaborative}
            title="Collaborative Storytelling"
          />
          <FocusAreaCard src={mindFulness} title="Mindfulness" />
          <FocusAreaCard
            src={preventHealth}
            title="Preventive Health & Wellness for School Children"
          />
          <FocusAreaCard src={schoolLeadership} title="School Leadership" />
          <FocusAreaCard
            src={makingScience}
            title="Early Childhood Education"
          />
        </div>
        <Paragraph>
          The ECHO programs so far have covered the above focus areas
        </Paragraph>
      </Section>
    </DefaultLayout>
  );
};

export default education;
