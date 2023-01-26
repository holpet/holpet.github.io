import "./PrimaryLink.scss";

interface props {
  text: string;
  type: string;
}

const PrimaryLink = ({ text, type }: props) => {
  return (
    <div className="primary-link">
      <a href="/" className="gradient-link">
        <span>{text}</span>
        <span>{text}</span>
        <div></div>
      </a>
    </div>
  );
};

export default PrimaryLink;
