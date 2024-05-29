import React from "react";

import { Heading, Paragraph, Title } from "../../../reusable/atoms";
import { Section } from "../../../reusable/Templates";
import { ourImpactCards } from "../../../_data";

import * as styles from "./ourImpact.module.scss";

const OurImpact = () => {
  return (
    <Section>
      <Title hasTrail>Our Impact</Title>

      <Heading
        className="margin-y-md"
        size="h1"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="700"
      >
        Bridging gaps to bring change
      </Heading>
      <Paragraph
        size="display"
        className={styles.info}
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="700"
      >
        From healthcare & education to many other sustainable development goals,
        our only mission is to create real impact by serving the underserved
        population. With continued support from the government, our partners and
        funders, we are able to identify & tackle these inequities.
      </Paragraph>

      <div className={styles.cardsGrid}>
        {ourImpactCards.map((card, idx) => (
          <div
            key={idx}
            className={styles.impactCard}
            data-sal={idx % 2 === 0 ? "slide-right" : "slide-left"}
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="700"
          >
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardContent}>
              <strong>{card.subtitle}</strong> {card.content}
            </p>
            <figure className={styles.cardIcon}>
              <img src={card.icon} alt={`${card.title} ${card.subtitle}`} />
            </figure>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default OurImpact;
