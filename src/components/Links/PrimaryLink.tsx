import "./PrimaryLink.scss";

interface props {
  text: string;
  elemType: string;
  url?: string;
}

const PrimaryLink = ({ text, elemType, url }: props) => {
  return (
    <>
      {elemType === "button" && (
        <a href="#contact-section" className="gradient-link">
          <ButtonLink text={text} />
        </a>
      )}
      {elemType === "submit" && (
        <button type="submit" className="gradient-link">
          <ButtonLink text={text} />
        </button>
      )}
      {elemType === "link" && (
        <a href={url} className="gradient-link" target="_blank">
          <ButtonLink text={text} />
        </a>
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
      <div></div>
    </>
  );
};

export default PrimaryLink;
