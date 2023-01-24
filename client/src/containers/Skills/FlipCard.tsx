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
                  <span className="first-letter">A</span>s you can see on this
                  page, I quite enjoy playing with css and making a site look
                  "precise" and unique, including full responsiveness. I learned
                  a lot just by creating this page alone.
                </p>
                <p>
                  But of course, the front of the website is not all and I'm
                  happy to say I don't shy away from backend work that includes
                  handling user input, database and server management.
                </p>
                <p>
                  I've been focusing my learning around the{" "}
                  <b className="skill-para">MERN</b> stack, since I've always
                  wanted to create more complex projects with great technology -
                  fast, responsive and with a large community behind it.
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
