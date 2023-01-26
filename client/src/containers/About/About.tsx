import SectionWrapper from "../../components/Wrappers/SectionWrapper";
import { about } from "../../lib/data";

import "./About.scss";

const About = () => {
  return (
    <SectionWrapper section="about" char="私" title="Who am I...">
      <div className="grid">
        {/* ITEM 1 */}
        <div className="grid-item" data-aos="fade-right">
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
            <div data-aos="zoom-in">lines of code</div>
          </div>
        </div>
        {/* ITEM 3 */}
        <div className="grid-item">
          <div></div>
          <div>
            <div data-aos="zoom-in">graphics with purpose</div>
          </div>
        </div>
        {/* ITEM 4 */}
        <div className="grid-item" data-aos="fade-left">
          <div className="box2"></div>
          <div>
            {about.en["2-a"]}
            <span className="secondary-span">{about.en["2-phrase"]}</span>
            {about.en["2-b"]}
          </div>
        </div>
        {/* ITEM 5 */}
        <div className="grid-item" data-aos="fade-right">
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
            <div data-aos="zoom-in">mid-/junior position</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
