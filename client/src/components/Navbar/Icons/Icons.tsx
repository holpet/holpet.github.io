import { atomIsClosed as closed } from "../../../lib/atoms/Atoms";
import { useAtom } from "jotai";
import { FaGithub as Github } from "react-icons/fa";
import { IoDocumentTextSharp as CV } from "react-icons/io5";
import "./Icons.scss";
import Flags from "./Flags/Flags";
import Themes from "./Themes/Themes";

const Icons = () => {
  const [, setIsClosed] = useAtom(closed);

  return (
    <div className="icons-section">
      <Flags />
      <Themes />
      <ul className="social-icons">
        <a href="https://github.com/holpet" onClick={() => setIsClosed(true)}>
          <Github id="github" />
        </a>
        <a href="https://github.com/holpet" onClick={() => setIsClosed(true)}>
          <CV id="cv" />
        </a>
      </ul>
    </div>
  );
};

export default Icons;
