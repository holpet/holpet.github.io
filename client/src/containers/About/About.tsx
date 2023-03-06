import SectionWrapper from "../../components/Wrappers/SectionWrapper";
import about from "../../lib/data/About";
import { atomLang } from "../../lib/atoms/Atoms";
import { useAtom } from "jotai";
import "./About.scss";

/*
            <div>
              {textArr1.map((text: string, idx: number) =>
                idx % 2 === 0 ? (
                  text
                ) : (
                  <span className="primary-span">{text}</span>
                )
              )}
            </div>
*/

const About = () => {
  const [activeLang] = useAtom(atomLang);
  const textArr1 = about[activeLang]["1"].split("*");
  const textArr2 = about[activeLang]["2"].split("*");

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
              {textArr1.map((text: string, idx: number) =>
                idx % 2 === 0 ? (
                  text
                ) : (
                  <span className="primary-span">{text}</span>
                )
              )}
            </div>

            <div className="box1"></div>
          </div>
          {/* ITEM 2 */}
          <div className="grid-item">
            <div></div>
            <div>
              <div data-aos="zoom-in">
                {textArr1.map(
                  (text: string, idx: number) => idx % 2 !== 0 && text
                )}
                ...
              </div>
            </div>
          </div>
          {/* ITEM 3 */}
          <div className="grid-item">
            <div></div>
            <div>
              <div data-aos="zoom-in">
                ...
                {textArr2.map(
                  (text: string, idx: number) => idx % 2 !== 0 && text
                )}
              </div>
            </div>
          </div>
          {/* ITEM 4 */}
          <div className="grid-item" data-aos="fade-left">
            <div className="box2"></div>
            <div>
              {textArr2.map((text: string, idx: number) =>
                idx % 2 === 0 ? (
                  text
                ) : (
                  <span className="secondary-span">{text}</span>
                )
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
