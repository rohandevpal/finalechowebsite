import React from "react";

import careerBaneer from "../../assets/images/careers/CareersBanner.png";

import { JobsCard } from "../../reusable/molecules";
import { Banner, BenefitsECHO } from "../../reusable/organisms";
import { Heading, Paragraph } from "../../reusable/atoms";
import { DefaultLayout, Section } from "../../reusable/Templates";

import * as styles from "./career.module.scss";
import { jobsData, officeGalleryData } from "../../_data";

const Career = () => {
  const jobs = jobsData;
  const gallery = officeGalleryData;

  return (
    <DefaultLayout>
      <Banner
        image={careerBaneer}
        subtitle="Join our team and be a part of the change!"
        title="Careers | Work with Us"
      />

      <Section>
        <Paragraph size="display" className="is-text-centered">
          At ECHO India, we are committed to collaborative efforts leading to
          larger social changes. If you’re an individual with the passion to
          create an impact and can work in a fast-paced environment, you’ll fit
          right in.
        </Paragraph>
      </Section>

      <BenefitsECHO />

      <Section className="testimonials_container">
        <div className="testimonials_subcontainer">
          <Heading>Current Openings</Heading>
          <div>
            <iframe
              src="https://echoindia.kekahire.com/api/embedjobs/64e9bd67-d935-434b-a55a-73a61e80bc78"
              frameborder="0"
              height="1000px"
              width="100%"
            ></iframe>
          </div>
        </div>
      </Section>

      <Section className={styles.gallery}>
        <Heading>Our Office Space</Heading>
        <div className={styles.galleryGrid}>
          {gallery.map((items) => {
            return (
              <div className="img_gallery_container">
                <img src={items} />
              </div>
            );
          })}
        </div>
      </Section>
    </DefaultLayout>
  );
};

export default Career;
