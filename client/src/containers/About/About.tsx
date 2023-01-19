import React from "react";
import { bunny } from "../../assets/index";

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div>
        <div className="about__wrapper">
          <div>
            <div>
              <hr />
              <hr />
            </div>
            <img />
          </div>
          <div className="about__textWrapper">
            <p className="about__hand">&lt;Home&gt;</p>
            <p className="about__greeting">Hello,</p>
            <p className="about__name">
              I'm{" "}
              <span className="gradient-text-secondary squared-text">
                Petra
              </span>
              .
            </p>
            <p className="about__greeting">Web developer.</p>
            <p className="about__title">Front End | Back End | Full Stack</p>
            <a href="/" className="gradient-link">
              <span>contact</span>
              <span>contact</span>
              <div></div>
            </a>
            <p className="about__hand">&lt;/Home&gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
