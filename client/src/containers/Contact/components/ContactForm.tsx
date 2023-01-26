import PrimaryLink from "../../../components/Links/PrimaryLink";
import "./ContactForm.scss";

const ContactForm = () => {
  function handleOnSubmit() {}

  function handleOnChange() {}

  return (
    <form className="contact-form" onSubmit={handleOnSubmit}>
      <input
        type="text"
        value="Golem duty"
        onChange={handleOnChange}
        spellCheck="false"
      />
      <input
        type="text"
        value="Some@value.com"
        onChange={handleOnChange}
        spellCheck="false"
      />
      <textarea onChange={handleOnChange} rows={3} spellCheck="false" />

      <PrimaryLink text="submit" type="submit" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
