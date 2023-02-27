import SectionWrapper from "../../components/Wrappers/SectionWrapper";
import about from "../../lib/data/About";
import { atomLang } from "../../lib/atoms/Atoms";
import { useAtom } from "jotai";
import "./About.scss";

const About = () => {
  const [activeLang] = useAtom(atomLang);

  return (
    <div id="about-section">
      <SectionWrapper
        section={about[activeLang].code}
        char="私"
        title={about[activeLang].title}
      >
        <div className="grid">
          {/* ITEM 1 */}
          <div className="grid-item" data-aos="fade-right">
            <div>
              {about[activeLang]["1-a"]}
              <span className="primary-span">
                {about[activeLang]["1-phrase"]}
              </span>
              {about[activeLang]["1-b"]}
            </div>
            <div className="box1"></div>
          </div>
          {/* ITEM 2 */}
          <div className="grid-item">
            <div></div>
            <div>
              <div data-aos="zoom-in">{about[activeLang]["1-phrase"]}</div>
            </div>
          </div>
          {/* ITEM 3 */}
          <div className="grid-item">
            <div></div>
            <div>
              <div data-aos="zoom-in">{about[activeLang]["2-phrase"]}</div>
            </div>
          </div>
          {/* ITEM 4 */}
          <div className="grid-item" data-aos="fade-left">
            <div className="box2"></div>
            <div>
              {about[activeLang]["2-a"]}
              <span className="secondary-span">
                {about[activeLang]["2-phrase"]}
              </span>
              {about[activeLang]["2-b"]}
            </div>
          </div>
          {/* ITEM 5 */}
          <div className="grid-item" data-aos="fade-right">
            <div>
              {about[activeLang]["3-a"]}
              <span className="primary-span">
                {about[activeLang]["3-phrase"]}
              </span>
              {about[activeLang]["3-b"]}
            </div>
            <div className="box3"></div>
          </div>
          {/* ITEM 6 */}
          <div className="grid-item">
            <div></div>
            <div>
              <div data-aos="zoom-in">{about[activeLang]["3-phrase"]}</div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
