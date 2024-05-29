import React from "react";
import { Heading, Title } from "../../atoms";
import ReactPlayer from "react-player/youtube";
import { Section } from "../../Templates";

import * as styles from "./echoModel.module.scss";

const ECHOModel = () => {
  return (
    <Section
      isAltBg
      altClassName={styles.container}
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
      data-sal-duration="700"
    >
      <Title className="is-text-centered">
        How the ECHO Model&#x2122; works
      </Title>
      <Heading className="is-text-centered">Serving the Underserved</Heading>
      <div
        className={styles.videoContainer}
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
      >
        <ReactPlayer
          style={{
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=-CDsC5toTis"
          controls={true}
        />
      </div>
    </Section>
  );
};

export default ECHOModel;
