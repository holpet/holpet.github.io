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
    strokeOuter: "#bf96e3",
  },
};

export default function handleThemeSwap() {
  // get theme from local storage, or default to dark if not found
  const theme = window.localStorage.getItem("theme") || "dark";

  // change theme of body elements accordingly
  rootProps.forEach((prop) => {
    document.documentElement.style.setProperty(
      prop[0],
      //@ts-ignore
      theme === "dark" ? themeColors.dark[prop[1]] : themeColors.light[prop[1]]
    );
  });

  // body change
  const body = window.document.getElementsByTagName("body")[0];
  body.style.backgroundColor =
    theme === "dark" ? themeColors.dark.bgContent : themeColors.light.bgContent;
  body.style.color =
    theme === "dark" ? themeColors.dark.fontBase : themeColors.light.fontBase;

  // change svg mouse trailing gfx
  const svgPath1 = document.querySelector("#path");
  const svgPath2 = document.querySelector("#path2");
  if (svgPath1 === null || svgPath2 === null) return;
  svgPath1.setAttribute(
    "stroke",
    theme === "dark"
      ? themeColors.dark.strokeOuter
      : themeColors.light.strokeOuter
  );
  svgPath2.setAttribute(
    "stroke",
    theme === "dark"
      ? themeColors.dark.strokeInner
      : themeColors.light.strokeInner
  );
}
