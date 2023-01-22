import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FlipCard.scss";

interface props {
  text: string;
  card: string;
}

const FlipCard = ({ text, card }: props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      className={`scene`}
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      data-aos="flip-left"
      data-aos-delay={`${card === "left" ? "" : "500"}`}
      data-aos-duration="1100"
    >
      <div className={`card ${isFlipped ? "is-flipped" : ""}`}>
        <div
          className={`card__face card__face--front ${
            card === "left" ? "blue-card" : "purple-card"
          }`}
        >
          {card === "left" ? "front end" : "back end"}
        </div>
        <div className={`card__face card__face--back`}>back</div>
      </div>
    </div>
  );
};

export default FlipCard;
