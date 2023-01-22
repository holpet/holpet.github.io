import React, { useEffect } from "react";
import "./Skills.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { SKILLS } from "../../lib/constants/Constants";
import TagSphere from "./TagSphere";
import FlipCard from "./FlipCard";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="skills">
      <div className="wrapper">
        <p className="code">&lt;Skills&gt;</p>
        <p className="title" data-aos="fade-down" data-aos-duration="600">
          <span>学</span> What I can do...
        </p>

        {/* Skills start */}
        <div className="grid">
          <div className="grid-item">
            <FlipCard text="FRONT END" card="left" />
          </div>
          <div className="grid-item">
            <TagSphere />
          </div>
          <div className="grid-item">
            <FlipCard text="BACK END" card="right" />
          </div>
        </div>
        {/* Skills end */}

        <p className="code">&lt;/Skills&gt;</p>
      </div>
    </div>
  );
};

export default Skills;
