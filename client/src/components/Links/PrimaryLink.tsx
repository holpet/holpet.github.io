import React from "react";

interface props {
  text: string;
}

const PrimaryLink = (props: props) => {
  return (
    <a href="/" className="gradient-link">
      <span>{props.text}</span>
      <span>{props.text}</span>
      <div></div>
    </a>
  );
};

export default PrimaryLink;
