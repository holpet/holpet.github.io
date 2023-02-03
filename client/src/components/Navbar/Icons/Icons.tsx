import { useEffect, useState } from "react";
import {
  atomIsClosed as closed,
  atomIsDarkTheme as dark,
} from "../../../lib/atoms/Atoms";
import { useAtom } from "jotai";
import { FaGithub as Github } from "react-icons/fa";
import { IoDocumentTextSharp as CV } from "react-icons/io5";
import { RiMoonFill as Moon } from "react-icons/ri";
import { BsSunFill as Sun } from "react-icons/bs";
import { cz, uk } from "../../../assets";
import "./Icons.scss";
import handleThemeSwap from "../../../lib/utils/ThemeSwapper";

const Icons = () => {
  const [isFlagActive, setIsFlagActive] = useState(false);
  const [isLangActive, setIsLangActive] = useState(false);
  const [, setIsClosed] = useAtom(closed);
  const [isDarkTheme, setIsDarkTheme] = useAtom(dark);

  useEffect(() => {
    handleThemeSwap();
  }, [isDarkTheme]);

  return (
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
          onClick={async () => {
            setIsClosed(true);
            setIsLangActive(!isLangActive);
            window.localStorage.setItem("dark-theme", "false");
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
            window.localStorage.setItem("dark-theme", "true");
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
  );
};

export default Icons;
