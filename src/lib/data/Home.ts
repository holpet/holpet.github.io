interface homeProps {
  [key: string]: { [key: string]: string };
}

const home: homeProps = {
  en: {
    code: "Home",
    title1: "Hello,",
    title2: "I'm",
    title3: "Web Developer.",
    subtitle: "Petra Holavová || Project Portfolio",
    link: "Contact",
  },
  cz: {
    code: "Home",
    title1: "Ahoj,",
    title2: "jsem",
    title3: "Web Developer.",
    subtitle: "Petra Holavová || Portfolio projektů",
    link: "Kontakt",
  },
};

export default home;
