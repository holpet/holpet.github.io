import { useRef, useState } from "react";
import PrimaryLink from "../../../components/Links/PrimaryLink";
import "./ContactForm.scss";
import emailjs from "@emailjs/browser";
import { atomLang } from "../../../lib/atoms/Atoms";
import { useAtom } from "jotai";
import contact from "../../../lib/data/Contact";

interface props {
  formRef: React.RefObject<HTMLFormElement>;
}

function isEmailValid(email: string) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) return true;
  return false;
}

const ContactForm = ({ formRef }: props) => {
  const [activeLang] = useAtom(atomLang);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      formRef.current === null ||
      name.length === 0 ||
      email.length === 0 ||
      subject.length === 0 ||
      message.length === 0 ||
      !isEmailValid(email)
    ) {
      setIsSubmitted(true);
      return;
    }
    emailjs
      .sendForm(
        "service_holpet_dev",
        "template_6yu0va4",
        formRef.current,
        "otk4aPrbtwUmy7tsV"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setSuccess(false);
        }
      );
    setIsSubmitted(false);
    setSubject("");
    setMessage("");
  }

  function handleChange(
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) {
    e.currentTarget.classList.remove("error");
    setSuccess(null);
  }

  return (
    <form
      ref={formRef}
      className="contact-form"
      onSubmit={handleOnSubmit}
      autoComplete="off"
    >
      <div>
        <input
          type="text"
          name="name"
          className={`${name.length === 0 && isSubmitted && "error"}`}
          placeholder={contact[activeLang].input1}
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
            handleChange(e);
          }}
          spellCheck="false"
        />
        <input
          type="email"
          name="email"
          className={`${
            (email.length === 0 || !isEmailValid(email)) &&
            isSubmitted &&
            "error"
          }`}
          placeholder={contact[activeLang].input2}
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
            handleChange(e);
          }}
          spellCheck="false"
        />
      </div>
      <input
        type="text"
        name="subject"
        className={`${subject.length === 0 && isSubmitted && "error"}`}
        placeholder={contact[activeLang].input3}
        value={subject}
        onChange={(e) => {
          setSubject(e.currentTarget.value);
          handleChange(e);
        }}
        spellCheck="false"
      />
      <textarea
        className={`${message.length === 0 && isSubmitted && "error"}`}
        onChange={(e) => {
          setMessage(e.currentTarget.value);
          handleChange(e);
        }}
        value={message}
        name="message"
        rows={4}
        spellCheck="false"
        placeholder={contact[activeLang].textfield}
      />
      <div className={`${success === null && "hide"}`}>
        {success ? contact[activeLang].message : contact[activeLang].error}
      </div>
      <PrimaryLink text={contact[activeLang].link} elemType="submit" />
    </form>
  );
};

export default ContactForm;
