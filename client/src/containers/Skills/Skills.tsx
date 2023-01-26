import "./Skills.scss";
import TagSphere from "./components/TagSphere";
import FlipCard from "./components/FlipCard";
import SectionWrapper from "../../components/Wrappers/SectionWrapper";

const Skills = () => {
  return (
    <SectionWrapper section="skills" char="学" title="What can I do...">
      <div className="grid">
        <div className="grid-item">
          <FlipCard text="HELLO" card="left" />
        </div>
        <div className="grid-item">
          <TagSphere />
        </div>
        <div className="grid-item">
          <FlipCard text="WORLD" card="right" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
