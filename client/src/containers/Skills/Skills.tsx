import "./Skills.scss";
import TagSphere from "./components/TagSphere";
import FlipCard from "./components/FlipCard";
import SectionWrapper from "../../components/Wrappers/SectionWrapper";
import { atomLang } from "../../lib/atoms/Atoms";
import { useAtom } from "jotai";
import skills from "../../lib/data/Skills";

const Skills = () => {
  const [activeLang] = useAtom(atomLang);

  return (
    <div id="skills-section">
      <SectionWrapper
        section={skills[activeLang].code}
        char="学"
        title={skills[activeLang].title}
      >
        <div className="grid">
          <div className="grid-item">
            <FlipCard card="left" />
          </div>
          <div className="grid-item">
            <TagSphere />
          </div>
          <div className="grid-item">
            <FlipCard card="right" />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Skills;
