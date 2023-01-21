import React from "react";
import { about } from "../../texts";

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <p className="code">&lt;About&gt;</p>
        <p className="title">My Story...</p>
        <div className="grid">
          {/* ITEM 1 */}
          <div className="grid-item">
            <div>
              {about.en["1-a"]}
              <span className="primary-span">{about.en["1-phrase"]}</span>
              {about.en["1-b"]}
            </div>
            <div className="box1"></div>
          </div>
          {/* ITEM 2 */}
          <div className="grid-item">
            <div></div>
            <div>
              <div>lines of code</div>
            </div>
          </div>
          {/* ITEM 3 */}
          <div className="grid-item">
            <div></div>
            <div>
              <div>graphics with purpose</div>
            </div>
          </div>
          {/* ITEM 4 */}
          <div className="grid-item">
            <div className="box2"></div>
            <div>
              {about.en["2-a"]}
              <span className="secondary-span">{about.en["2-phrase"]}</span>
              {about.en["2-b"]}
            </div>
          </div>
          {/* ITEM 5 */}
          <div className="grid-item">
            <div>
              {about.en["3-a"]}
              <span className="primary-span">{about.en["3-phrase"]}</span>
              {about.en["3-b"]}
            </div>
            <div className="box3"></div>
          </div>
          {/* ITEM 6 */}
          <div className="grid-item">
            <div></div>
            <div>
              <div>mid-/junior position</div>
            </div>
          </div>
        </div>
        <p className="code">&lt;/About&gt;</p>
      </div>
    </div>
  );
};

export default About;
