import React from "react";

import bannerImage from "../../assets/images/aboutUs/aboutUsBanner.jpg";

import {
  AboutECHOVideoSection,
  OurStory,
  ECHOVsTelemed,
  PillarsOfECHO,
  OurTeam,
  Banner,
  MoreAboutECHO,
} from "../../reusable/organisms";

import { DefaultLayout } from "../../reusable/Templates";

const About = () => {
  return (
    <DefaultLayout>
      <Banner
        image={bannerImage}
        subtitle="ECHO India is a not-for-profit organization working towards building capacities across areas such as healthcare, education and other sustainable development goals"
        title="About ECHO India"
      />
      <OurStory />
      <AboutECHOVideoSection />
      <ECHOVsTelemed />
      <PillarsOfECHO />
      <OurTeam />
      {/* <Testimonial /> */}
      <MoreAboutECHO />
    </DefaultLayout>
  );
};

export default About;
