import { useEffect, useState } from "react";

const ThemeWrapper = ({ children, isDarkTheme }) => {
  const [colorTheme, setColorTheme] = useState(true);

  const rootProps = [
    ["--base-font-color", "fontBase"],
    ["--bg-navig-color", "bgNavig"],
    ["--bg-content-color", "bgContent"],
    ["--border-color", "borderC"],
    ["--skill-shading-color", "skillShade"],
    ["--contact-font-color", "fontContact"],
  ];

  const themeColors = {
    dark: {
      fontBase: "#fbfeff",
      bgNavig: "#161616",
      bgContent: "#1d1d1d",
      borderC: "#797979",
      skillShade: "#3a3a3a",
      fontContact: "#cecece",
      strokeInner: "#8ad9f8",
      strokeOuter: "#1c7ece",
    },
    light: {
      fontBase: "#575757",
      bgNavig: "#dddddd",
      bgContent: "#e4e4e4",
      borderC: "#8a8a8a",
      skillShade: "#a5a5a5",
      fontContact: "#1d1d1d",
      strokeInner: "#f0f0f0",
      strokeOuter: "#ddd2db",
    },
  };

  useEffect(() => {
    const theme = localStorage.getItem("color-theme");
    if (theme) {
      setColorTheme(theme);
    }
  }, []);

  useEffect(() => {
    // theme of body elements
    rootProps.forEach((prop) => {
      document.documentElement.style.setProperty(
        prop[0],
        colorTheme === "dark"
          ? themeColors.dark[prop[1]]
          : themeColors.light[prop[1]]
      );
    });

    //svg mouse trailing gfx
    const svgPath1 = document.querySelector("#path");
    const svgPath2 = document.querySelector("#path2");
    svgPath1.setAttribute(
      "stroke",
      colorTheme === "dark"
        ? themeColors.dark.strokeOuter
        : themeColors.light.strokeOuter
    );
    svgPath2.setAttribute(
      "stroke",
      colorTheme === "dark"
        ? themeColors.dark.strokeInner
        : themeColors.light.strokeInner
    );
  }, [colorTheme, isDarkTheme]);

  return (
    <div className={`theme-wrapper ${"theme-" + colorTheme}`}>{children}</div>
  );
};

export default ThemeWrapper;
