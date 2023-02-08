import { atomIsClosed as closed } from "../../../../lib/atoms/Atoms";
import { useAtom } from "jotai";
import { FaGithub as Github } from "react-icons/fa";
import { IoDocumentTextSharp as CV } from "react-icons/io5";

const Socials = () => {
  const [, setIsClosed] = useAtom(closed);

  return (
    <ul className="social-icons">
      <a href="https://github.com/holpet" onClick={() => setIsClosed(true)}>
        <Github id="github" />
      </a>
      <a href="https://github.com/holpet" onClick={() => setIsClosed(true)}>
        <CV id="cv" />
      </a>
    </ul>
  );
};

export default Socials;
