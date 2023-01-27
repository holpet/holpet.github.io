import { useEffect, useState } from "react";
import "./FlipCard.scss";
import { boat_blue, boat_purple } from "../../../assets";

interface props {
  text: string;
  card: string;
}

const FlipCard = ({ text, card }: props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(true);
  }, []);

  return (
    <div className={`card`}>
      {card === "left" ? (
        <div className="card-text-container">
          <img src={boat_blue} />
          <div>
            <div>
              <span className="skill-percent">
                % <b className="skill-para">used in projects:</b>
              </span>
              <br />
              <span>JavaScript, TypeScript</span>
              <div
                className={`skill-line ${isFlipped ? "is-loading-line" : ""}`}
                id="skill-js"
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
            <div>
              <span>React / Next</span>
              <div
                className={`skill-line ${isFlipped ? "is-loading-line" : ""}`}
                id="skill-react"
              ></div>
              <div className="skill-line skill-underline"></div>
            </div>
            <div>
              <span>Node, MongoDB</span>
              <div
                className={`skill-line ${isFlipped ? "is-loading-line" : ""}`}
                id="skill-node"
              ></div>
              <div className="skill-line skill-underline"></div>
            </div>
          </div>

          <br />
          <p className="skill-para">
            / This portfolio website was created with React. /
          </p>
          <hr />
        </div>
      ) : (
        <div className="card-text-container">
          <div>
            <p>
              <span className="first-letter">A</span>s I've grown and realized I
              wanted to create more complex, impactful projects, I've been
              broadening my knowledge and experience in various technologies,
              with most focus on the popular and widely used
              <b className="skill-para"> MERN</b> stack (MongoDB, Express,
              React, Node).
            </p>
          </div>
          <div>
            <p>
              Since the IT industry progresses so fast and there are so many
              technologies to utilize now, I think I've gained a solid basis of
              understanding both the front and the back end, which can be drawn
              upon for custom solutions.
            </p>
          </div>
          <img
            src={boat_purple}
            className={`${isFlipped ? "skill-rotated" : ""}`}
          />
        </div>
      )}
    </div>
  );
};

export default FlipCard;
