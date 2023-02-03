import { RiMoonFill as Moon } from "react-icons/ri";
import { BsSunFill as Sun } from "react-icons/bs";
import { atomIsClosed as closed } from "../../../../lib/atoms/Atoms";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import handleThemeSwap from "../../../../lib/utils/ThemeSwapper";

const Themes = () => {
  const [, setIsClosed] = useAtom(closed);
  const [modeTheme, setModeTheme] = useState(
    window.localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    handleThemeSwap();
  }, [modeTheme]);

  return (
    <ul className="theme-icons">
      {/* LIGHT THEME */}
      <a
        className={`${modeTheme === "light" && "active"}`}
        onClick={() => {
          setIsClosed(true);
          window.localStorage.setItem("theme", "light");
          setModeTheme("light");
        }}
      >
        <Sun id="sun" />
      </a>
      {/* DARK THEME */}
      <a
        className={`${modeTheme === "dark" && "active"}`}
        onClick={() => {
          setIsClosed(true);
          window.localStorage.setItem("theme", "dark");
          setModeTheme("dark");
        }}
      >
        <Moon id="moon" />
      </a>
    </ul>
  );
};

export default Themes;
