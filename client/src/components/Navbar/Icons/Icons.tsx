import { useState } from "react";
import { atomIsClosed as closed } from "../../../lib/atoms/Atoms";
import { useAtom } from "jotai";
import { FaGithub as Github } from "react-icons/fa";
import { IoDocumentTextSharp as CV } from "react-icons/io5";
import { RiMoonFill as Moon } from "react-icons/ri";
import { BsSunFill as Sun } from "react-icons/bs";
import { cz, uk } from "../../../assets";
//@ts-ignore
import ThemeWrapper from "../../Wrappers/ThemeWrapper.jsx";
import "./Icons.scss";

const Icons = () => {
  const [isFlagActive, setIsFlagActive] = useState(false);
  const [isLangActive, setIsLangActive] = useState(false);
  const [isClosed, setIsClosed] = useAtom(closed);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <ThemeWrapper isDarkTheme={isDarkTheme}>
      <div className="icons-section">
        <ul className="flag-icons">
          <img
            src={cz}
            id="cz"
            className={`${isFlagActive && "active"}`}
            onClick={() => {
              setIsFlagActive(!isFlagActive);
              setIsClosed(true);
            }}
          />
          <img
            src={uk}
            id="uk"
            className={`${!isFlagActive && "active"}`}
            onClick={() => {
              setIsFlagActive(!isFlagActive);
              setIsClosed(true);
            }}
          />
        </ul>
        <ul className="theme-icons">
          <a
            className={`${isLangActive && "active"}`}
            onClick={() => {
              setIsClosed(true);
              setIsLangActive(!isLangActive);
              setIsDarkTheme(false);
            }}
          >
            <Sun id="sun" />
          </a>
          <a
            className={`${!isLangActive && "active"}`}
            onClick={() => {
              setIsClosed(true);
              setIsLangActive(!isLangActive);
              setIsDarkTheme(true);
            }}
          >
            <Moon id="moon" />
          </a>
        </ul>
        <ul className="social-icons">
          <a href="https://github.com/holpet" onClick={() => setIsClosed(true)}>
            <Github id="github" />
          </a>
          <a href="https://github.com/holpet" onClick={() => setIsClosed(true)}>
            <CV id="cv" />
          </a>
        </ul>
      </div>
    </ThemeWrapper>
  );
};

export default Icons;
