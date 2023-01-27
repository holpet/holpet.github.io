import "./Skills.scss";
import TagSphere from "./components/TagSphere";
import FlipCard from "./components/FlipCard";
import SectionWrapper from "../../components/Wrappers/SectionWrapper";

const Skills = () => {
  return (
    <div id="skills-section">
      <SectionWrapper section="skills" char="学" title="What can I do...">
        <div className="grid">
          <div className="grid-item">
            <FlipCard text="HELLO" card="left" key={"left-skill"} />
          </div>
          <div className="grid-item">
            <TagSphere />
          </div>
          <div className="grid-item">
            <FlipCard text="WORLD" card="right" key={"right-skill"} />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Skills;
