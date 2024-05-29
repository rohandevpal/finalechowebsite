import React from "react";

import { Banner, ContactDisplay } from "../../reusable/organisms";
import { DefaultLayout } from "../../reusable/Templates";

import contactBanner from "../../assets/images/contact/ContactBanner.png";

const Contact = () => {
  return (
    <DefaultLayout>
      <Banner
        image={contactBanner}
        subtitle="If you’re looking for more information about ECHO India and want to get in touch with the team for partnerships, starting an ECHO or any media related queries, please feel free to reach out to us.  "
        title="Get In Touch"
      />

      <ContactDisplay />
    </DefaultLayout>
  );
};

export default Contact;
