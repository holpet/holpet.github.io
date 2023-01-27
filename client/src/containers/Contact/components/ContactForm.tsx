import { useState } from "react";
import PrimaryLink from "../../../components/Links/PrimaryLink";
import "./ContactForm.scss";

interface props {
  formRef: React.RefObject<HTMLFormElement>;
}

const ContactForm = ({ formRef }: props) => {
  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submitted...");
  }

  function handleOnChange() {}

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleOnSubmit}>
      <div>
        <input
          type="text"
          placeholder="Your Name"
          onChange={handleOnChange}
          spellCheck="false"
        />
        <input
          type="email"
          placeholder="Your Email"
          onChange={handleOnChange}
          spellCheck="false"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        onChange={handleOnChange}
        spellCheck="false"
      />
      <textarea onChange={handleOnChange} rows={4} spellCheck="false" />
      <div
        onClick={(e) => {
          formRef.current?.submit();
          e.preventDefault();
        }}
      >
        <PrimaryLink text="submit" type="submit" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
