import { useEffect, useRef, useState } from "react";
import "./FlipCard.scss";
import { boat_blue, boat_purple } from "../../../assets";
import { SKILLS_CARD } from "../../../lib/constants/Constants";
import { employObserver } from "../../../lib/utils/Observer";
import { atomLang } from "../../../lib/atoms/Atoms";
import { useAtom } from "jotai";
import skills from "../../../lib/data/Skills";

interface props {
  card: string;
}

const FlipCard = ({ card }: props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeLang] = useAtom(atomLang);
  const textAr = skills[activeLang].text1.split("MERN");

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
              % <b className="skill-para">{skills[activeLang].p1}</b>
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
          <p className="skill-para">/ {skills[activeLang].p2} /</p>
          <hr />
        </div>
      ) : (
        <div className="card-text-container">
          <div>
            <p>
              <span className="first-letter">{textAr[0].charAt(0)}</span>
              {textAr[0].substring(1)}
              <b className="skill-para">MERN</b>
              {textAr[1]}
            </p>
          </div>
          <div>
            <p>{skills[activeLang].text2}</p>
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
