interface contactProps {
  [key: string]: { [key: string]: string };
}

const contact: contactProps = {
  en: {
    code: "contact",
    title: "How to reach me...",
    input1: "Your Name",
    input2: "Your Email",
    input3: "Subject",
    textfield: "Message",
    link: "Submit",
    message:
      "Thank you for contacting me. I'll get back to you as soon as possible.",
    error: "Message couldn't be sent. Please try again.",
  },
  cz: {
    code: "contact",
    title: "Jak se můžeme spojit...",
    input1: "Vaše jméno",
    input2: "Váš email",
    input3: "Předmět",
    textfield: "Zpráva",
    link: "Odeslat",
    message: "Děkuji za zprávu. Co nejdříve se vám ozvu nazpět.",
  },
};

export default contact;
