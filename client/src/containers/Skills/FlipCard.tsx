import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FlipCard.scss";
import { boat_blue, boat_purple } from "../../assets";

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
          {text}
        </div>
        <div className={`card__face card__face--back`}>
          {card === "left" ? (
            <div className="card-text-container">
              <img src={boat_blue} />
              <div>
                <span>HTML, CSS, JavaScript - TS</span>
                <div
                  className={`skill-line ${isFlipped ? "is-loading-line" : ""}`}
                  id="skill-html"
                ></div>
                <div className="skill-line skill-underline"></div>
              </div>
              <div>
                <span>React* / Next</span>
                <div
                  className={`skill-line ${isFlipped ? "is-loading-line" : ""}`}
                  id="skill-react"
                ></div>
                <div className="skill-line skill-underline"></div>
              </div>
              <br />
              <div>
                <span>Node, Express, MongoDB</span>
                <div
                  className={`skill-line ${isFlipped ? "is-loading-line" : ""}`}
                  id="skill-node"
                ></div>
                <div className="skill-line skill-underline"></div>
              </div>
              <div>
                <span>Python, Java</span>
                <div
                  className={`skill-line ${isFlipped ? "is-loading-line" : ""}`}
                  id="skill-python"
                ></div>
                <div className="skill-line skill-underline"></div>
              </div>
              <br />
              <p className="skill-para">
                *This portfolio website was created with React.
              </p>
              <hr />
            </div>
          ) : (
            <div className="card-text-container">
              <div>
                <p>
                  <span className="first-letter">A</span>s I've grown and
                  realized I wanted to create more complex, impactful projects,
                  I've been broadening my knowledge and experience in various
                  technologies, with most focus on the popular and widely used
                  <b className="skill-para"> MERN</b> stack (MongoDB, Express,
                  React, Node).
                </p>
                <p>
                  Since the IT industry progresses so fast and there are so many
                  technologies to utilize now, I think I've gained a solid basis
                  of understanding both the front and the back end, which can be
                  drawn upon for custom solutions.
                </p>
                <br />
              </div>
              <img
                src={boat_purple}
                className={`${isFlipped ? "skill-rotated" : ""}`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
