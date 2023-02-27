interface menuProps {
  [key: string]: { [key: string]: string };
}

const menu: menuProps = {
  en: {
    link1: "About",
    link2: "Skills",
    link3: "Work",
    link4: "Contact",
  },
  cz: {
    link1: "O mně",
    link2: "Dovednosti",
    link3: "Portfolio",
    link4: "Kontakt",
  },
};

export default menu;
