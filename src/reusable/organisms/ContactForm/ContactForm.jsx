import React, { useState } from "react";

import { Input } from "../../molecules";
import { Button } from "../../atoms";

const ContactForm = ({ className }) => {
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    /**
     * TODO: formValues
     */
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Input
        label="Your Name"
        id="contact-name"
        name="fullname"
        onChange={handleChange}
        value={formValues.fullname}
        placeholder="Your Name"
        required
      />
      <Input
        type="email"
        label="Your Email"
        id="contact-email"
        name="email"
        onChange={handleChange}
        value={formValues.email}
        placeholder="Your email address"
        required
      />
      <Input
        label="Phone Number"
        id="contact-phone-number"
        name="phone"
        onChange={handleChange}
        value={formValues.phone}
        placeholder="Phone Number"
      />
      <Input
        label="Nature of Query"
        id="contact-query"
        name="query"
        onChange={handleChange}
        value={formValues.query}
        placeholder="Write your message here"
        required
      />
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
