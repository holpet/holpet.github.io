import "./PrimaryLink.scss";

interface props {
  text: string;
  type: string;
  isSubmitted?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrimaryLink = ({ text, type, isSubmitted }: props) => {
  function handleOnClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (type === "submit") {
      if (isSubmitted !== undefined) isSubmitted(true);
    } else {
      console.log("clicked on contact...");
    }
  }

  return (
    <a href="#" className="gradient-link">
      <span>{text}</span>
      <span>{text}</span>
      <div></div>
    </a>
  );
};

export default PrimaryLink;
