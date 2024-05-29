import React from "react";
import nursing1 from "../../assets/images/nursing/nursing1.png";
import nursing2 from "../../assets/images/nursing/nursing2.png";
import nursingBanner from "../../assets/images/home/banner_home_3.jpg";
import nursingFocusAreas from "../../assets/images/nursing/nursing_focus_areas.jpg";
import nursingAnatomy from "../../assets/images/nursing/nursing_anatomy.png";
import nursingReach from "../../assets/images/nursing/nursing_reach.png";
import { nursingCarouselData, nursingPartnersData } from "../../_data";
import { Heading, Paragraph, Link } from "../../reusable/atoms";
import { Banner, CarouselSection } from "../../reusable/organisms";
import { DefaultLayout, Section } from "../../reusable/Templates";

import * as styles from "./nursing.module.scss";

const Nursing = () => {
  return (
    <DefaultLayout>
      <Banner
        image={nursingBanner}
        subtitle=""
        title="One nurse can change the world with her ECHO."
        bgAlign="top"
      />
      <Section className={`${styles.section} ${styles.flexReverse}`}>
        <figure
          className={styles.image}
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="700"
        >
          <img src={nursing2} />
        </figure>
        <div
          className={`${styles.content} padding-b-xl`}
          style={{ paddingLeft: "1rem" }}
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="700"
        >
          <Heading size="h2">ECHO of the nurse</Heading>
          <Paragraph size="body">
            The ECHO movement establishes ongoing learning communities through
            which primary care professionals can receive support and build the
            skills they require. The programs offer to achieve a knowledge
            transfer from tertiary care nursing experts to primary care nurses.
            We believe that a competent nurse as a care giver can lead to
            improved quality care of the patients.
          </Paragraph>
          <Paragraph size="body">
            To strengthen the nursing fraternity of India, ECHO India pledges to
            support its partners to train and upskill the nurses of the
            different healthcare settings across the country. We aim to create a
            scenario where all patients are well attended and given adequate
            care by well-trained nurses.
          </Paragraph>
          <Paragraph size="body">
            With the launch of the ECHO India Nursing Vertical in 2020, we hope
            to address this issue. The need for specialty care in India is
            substantial and growing and this is truer at this time of
            unprecedented health criticality. The ECHO India Nursing vertical
            aims to upskill and strengthen the capacity of the nursing
            fraternity by effectively integrating the ECHO model with the
            country's relevant government and collaborators.
          </Paragraph>
        </div>
      </Section>

      <Section
        className={styles.section}
        data-sal="fade"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <div
          className={styles.content}
          style={{ paddingRight: "1rem" }}
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="700"
        >
          <Heading size="h2">
            A quick snapshot of Project ECHO<sup>®</sup>
          </Heading>
          <Paragraph size="body">
            ECHO India is a not-for-profit organization working towards building
            capacities across healthcare, education and other sustainable
            development goals. With the intention of delivering treatment to as
            many patients as possible, in the most remote and underserved
            places, Dr. Sanjeev Arora, MD, a liver disease specialist at the
            University of New Mexico Health Sciences Center in Albuquerque,
            created a case-based digital learning model to mentor and upskill
            capacities of local healthcare providers to better manage patient
            care.
          </Paragraph>
          <Paragraph>
            <Link
              href="https://www.youtube.com/watch?v=lY5nlJxac0g"
              target="_blank"
            >
              Watch Dr. Arora's TEDx talk →
            </Link>
          </Paragraph>
        </div>
        <figure
          className={styles.image}
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="700"
        >
          <img src={nursing1} />
        </figure>
      </Section>
      <Section
        isAltBg
        className={styles.container}
        data-sal="fade"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <div className={styles.description}>
          <Heading className={`${styles.heading} is-text-centered`}>
            Opportunities for Nurses
          </Heading>
          <CarouselSection carouselData={nursingCarouselData} />
        </div>
      </Section>
      <Section
        data-sal="fade"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <Heading className={`is-text-centered ${styles.headingMargin} `}>
          Focus Areas
        </Heading>
        <figure className={styles.image}>
          <img src={nursingFocusAreas} />
        </figure>
      </Section>
      <Section
        isAltBg
        className={styles.container}
        data-sal="fade"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <Heading className={`is-text-centered ${styles.headingMargin} `}>
          Anatomy of an ECHO Nursing Session
        </Heading>
        <figure className={styles.image}>
          <img src={nursingAnatomy} />
        </figure>
      </Section>
      <Section data-sal="fade" data-sal-delay="300" data-sal-easing="ease">
        <Heading className={`is-text-centered ${styles.headingMargin} `}>
          Our Partners
        </Heading>
        <div className={`${styles.grid}`}>
          {nursingPartnersData.map((categoryData, index) => (
            <div>
              <Heading size="h4" className="is-text-centered">
                {categoryData.categoryName}
              </Heading>
              <ul>
                {categoryData.partnerList.map((partner) => (
                  <li className={`${styles.partnerList}`}>{partner}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* {nursingPartnersData.map((category, index) => return(
          <ul>123</ul>;
  ))} */}
      </Section>
      <Section
        isAltBg
        className={styles.container}
        data-sal="fade"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <Heading className={`is-text-centered ${styles.headingMargin} `}>
          Our Reach
        </Heading>
        <figure className={styles.image}>
          <img src={nursingReach} />
        </figure>
      </Section>
    </DefaultLayout>
  );
};

export default Nursing;
