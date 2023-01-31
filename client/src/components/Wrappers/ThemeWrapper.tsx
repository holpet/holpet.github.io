import { useEffect, useState } from "react";

interface props {
  children: React.ReactNode;
}

const ThemeWrapper = ({ children }: props) => {
  const [colorTheme, setColorTheme] = useState("dark");

  useEffect(() => {
    const theme = localStorage.getItem("color-theme");
    if (theme) {
      setColorTheme(theme);
    }
    //document.documentElement.style.setProperty("--base-font-color", "red");
  }, []);

  return (
    <div className={`theme-wrapper ${"theme-" + colorTheme}`}>{children}</div>
  );
};

export default ThemeWrapper;
