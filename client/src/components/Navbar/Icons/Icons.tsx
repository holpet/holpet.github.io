import "./Icons.scss";
import Flags from "./Flags/Flags";
import Themes from "./ThemeHandler/ThemeHandler";
import Socials from "./Socials/Socials";

const Icons = () => {
  return (
    <div className="icons-section">
      <Flags />
      <Themes />
      <Socials />
    </div>
  );
};

export default Icons;
