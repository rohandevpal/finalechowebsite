import React from "react";
import echoForIndiaBanner from "../../assets/images/echo-for-india/echoForIndiaBanner.jpg";
import { graphql, useStaticQuery } from "gatsby";
import { Heading, Paragraph, Link } from "../../reusable/atoms";
import { Banner, StoriesCarousel } from "../../reusable/organisms";
import { DefaultLayout, Section } from "../../reusable/Templates";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./echoforindia.module.scss";

const ECHOForIndia = () => {
  const {
    allAirtable: { nodes: storiesData },
  } = useStaticQuery(graphql`
    {
      allAirtable(
        filter: {
          table: { eq: "Stories" }
          data: { Status: { eq: "Published" }, IsFeatured: { eq: true } }
        }
        sort: { fields: data___Date, order: DESC }
      ) {
        nodes {
          data {
            Title
            URL
            Date
            CTA
            Image {
              localFiles {
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <DefaultLayout>
      <Banner
        image={echoForIndiaBanner}
        subtitle="The World Health Organization (WHO) has recognised India’s Accredited Social Health Activists or ASHA workers as one of the global leaders in healthcare delivery. ASHAs were honoured with WHO’s Director-General’s Global Health Leaders’ Award in an event that was live streamed globally..."
        title="ECHO India Empowering ASHAs, The Frontline Healthcare Warriors"
        cta="Read more →"
        link="/blog/empowering-asha-workers"
        bgAlign="top"
      />
      <Section
        style={{ marginBottom: "1rem" }}
        className={`${styles.container}`}
        data-sal="fade"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <div>
          <Heading size="h2" className={`${styles.heading}`}>
            More ECHO India stories
          </Heading>
          <div
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
            className={styles.carouselParentDesktop}
          >
            <StoriesCarousel carouselData={storiesData} slidesToShow={4} />
          </div>
          <div className={styles.carouselParentMobile}>
            <StoriesCarousel carouselData={storiesData} slidesToShow={2} />
          </div>
        </div>
      </Section>
      <Section
        style={{ marginTop: 0 }}
        className={`${styles.section} ${styles.flexReverse}`}
      >
        <figure
          className={styles.image}
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="700"
        >
          <StaticImage
            src="../../assets/images/echo-for-india/nurses.jpg"
            alt="Nurses"
          />
        </figure>
        <div
          className={`${styles.content} padding-b-xl`}
          style={{ paddingLeft: "1rem" }}
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="700"
        >
          <Heading size="h2">
            Empowering Nurses – The Largest Cadre of Frontline Healthcare
            Warriors
          </Heading>
          <Paragraph size="body">
            Nurses form the largest cadre of health- care professionals and play
            an integral role in day-to-day patient care. However, nurses in
            India face several challenges, limiting their capabilities and
            morale. As compared to doctors, nurses have limited pathways for
            high..
          </Paragraph>
          <Paragraph>
            <Link to="/blog/echo-empowering-nurses">Read more →</Link>
          </Paragraph>
        </div>
      </Section>

      <Section
        className={`${styles.section} ${styles.covidBackground}`}
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
            ECHO India Goes Viral in Response to COVID-19
          </Heading>
          <Paragraph size="body">
            As the Covid-19 pandemic became India’s biggest challenge in 2020,
            it left a profound yet long-lasting impact on the healthcare sector.
            In addition to there being no specific treatment plan for the virus,
            there was also a shortage of doctors, hospital beds, and medical
            equipment, including oxygen tanks....
          </Paragraph>
          <Paragraph>
            <Link to="/blog/echo-india-goes-viral-in-response-to-covid-19">
              Read More →
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
          <StaticImage
            src="../../assets/images/echo-for-india/covidCollage.png"
            alt="Nurses"
          />
        </figure>
      </Section>
    </DefaultLayout>
  );
};

export default ECHOForIndia;
