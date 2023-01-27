import { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import { paperplane } from "../../assets";
import SectionWrapper from "../../components/Wrappers/SectionWrapper";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formHeight, setFormHeight] = useState("100px");

  useEffect(() => {
    setFormHeight(formRef.current?.clientHeight + "px");
  }, []);

  return (
    <div id="contact-section">
      <SectionWrapper section="contact" char="会" title="How to reach me...">
        <div className="grid">
          <div className="grid-item">
            <ContactForm formRef={formRef} />
          </div>
          <div className="grid-item">
            <img
              src={paperplane}
              style={{ height: formHeight }}
              data-aos="flip-right"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
