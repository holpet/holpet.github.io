import "./PrimaryLink.scss";

interface props {
  text: string;
  elemType: string;
}

const PrimaryLink = ({ text, elemType }: props) => {
  return (
    <>
      {elemType === "button" ? (
        <a href="#contact-section" className="gradient-link">
          <ButtonLink text={text} />
        </a>
      ) : (
        <button type="submit" className="gradient-link">
          <ButtonLink text={text} />
        </button>
      )}
    </>
  );
};

interface linkProps {
  text: string;
}

const ButtonLink = ({ text }: linkProps) => {
  return (
    <>
      <span>{text}</span>
      <span>{text}</span>
      <div></div>
    </>
  );
};

export default PrimaryLink;
