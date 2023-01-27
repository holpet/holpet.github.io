import { useEffect, useRef, useState } from "react";
import "./FlipCard.scss";
import { boat_blue, boat_purple } from "../../../assets";
import { SKILLS_CARD } from "../../../lib/constants/Constants";
import { employObserver } from "../../../lib/utils/Observer";

interface props {
  text: string;
  card: string;
}

const FlipCard = ({ text, card }: props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    employObserver(cardRef);
  }, []);

  return (
    <div className={`card`} ref={cardRef}>
      {card === "left" ? (
        <div className="card-text-container">
          <img src={boat_blue} />
          <div>
            <span className="skill-percent">
              % <b className="skill-para">used in projects:</b>
            </span>
            <br />
            {SKILLS_CARD.map((skill, i) => (
              <div key={skill.id}>
                <SkillLine skill={skill.name} id={skill.id} />
                {i === 1 && <br />}
              </div>
            ))}
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
          <img src={boat_purple} className={`skill-rotated`} />
        </div>
      )}
    </div>
  );
};

interface propsLine {
  skill: string;
  id: string;
}

const SkillLine = ({ skill, id }: propsLine) => {
  return (
    <div>
      <span>{skill}</span>
      <div className={`skill-line observable`} id={id}></div>
      <div className="skill-line skill-underline"></div>
    </div>
  );
};

export default FlipCard;
