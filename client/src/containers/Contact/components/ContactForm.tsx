import { useRef, useState } from "react";
import PrimaryLink from "../../../components/Links/PrimaryLink";
import "./ContactForm.scss";
import emailjs from "@emailjs/browser";

interface props {
  formRef: React.RefObject<HTMLFormElement>;
}

const ContactForm = ({ formRef }: props) => {
  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formRef.current === null) return;
    emailjs
      .sendForm(
        "service_holpet_dev",
        "template_6yu0va4",
        formRef.current,
        "otk4aPrbtwUmy7tsV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    formRef.current.reset();
  }

  function handleOnChange() {}

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleOnSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleOnChange}
          spellCheck="false"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleOnChange}
          spellCheck="false"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        onChange={handleOnChange}
        spellCheck="false"
      />
      <textarea
        onChange={handleOnChange}
        name="message"
        rows={4}
        spellCheck="false"
        placeholder="Message..."
      />
      <PrimaryLink text="submit" elemType="submit" />
    </form>
  );
};

export default ContactForm;
