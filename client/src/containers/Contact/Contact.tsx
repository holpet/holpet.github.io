import { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import { paperplane } from "../../assets";
import SectionWrapper from "../../components/Wrappers/SectionWrapper";
import ContactForm from "./components/ContactForm";
import { atomLang } from "../../lib/atoms/Atoms";
import { useAtom } from "jotai";
import contact from "../../lib/data/Contact";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formHeight, setFormHeight] = useState("100px");
  const [activeLang] = useAtom(atomLang);

  useEffect(() => {
    setFormHeight(formRef.current?.clientHeight + "px");
  }, []);

  return (
    <div id="contact-section">
      <SectionWrapper
        section={contact[activeLang].code}
        char="会"
        title={contact[activeLang].title}
      >
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
