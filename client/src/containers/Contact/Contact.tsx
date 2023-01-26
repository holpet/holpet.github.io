import React from "react";
import "./Contact.scss";
import { paperplane } from "../../assets";
import SectionWrapper from "../../components/Wrappers/SectionWrapper";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <SectionWrapper section="contact" char="会" title="How to reach me...">
      <div className="grid">
        <div className="grid-item">
          <ContactForm />
        </div>
        <div className="grid-item">
          <img src={paperplane} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
