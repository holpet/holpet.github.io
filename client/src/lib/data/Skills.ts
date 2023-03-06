interface skillsProps {
  [key: string]: { [key: string]: string };
}

const skills: skillsProps = {
  en: {
    code: "skills",
    title: "What can I do...",
    p1: "used in projects:",
    p2: "This portfolio website was created with React.",
    text1:
      "Since web dev and the IT industry in general progresses exponentially fast nowadays, leaving us with so many options to utilize, it was important for me to start working with a technology that's reliable, constantly improving and that can provide solid building blocks for (full stack) applications with good optimization.",
    text2:
      "As I've been broadening my knowledge and experience with various technologies, my focus naturally turned to one of the most popular and widely used tech stacks: MERN (MongoDB, Express, React, Node). And more specifically, the Next.js framework, which allows for great additional funtionality on top of the React library.",
  },
  cz: {
    code: "skills",
    title: "S čím pracuji...",
    p1: "používáno v projektech:",
    p2: "Toto webové portfolio bylo vytvořeno pomocí Reactu.",
    text1:
      "Ve webovém developmentu, a v celém IT odvětví obecně, vznikají nové technologie, které se vyvíjí exponenciální rychlostí. Pro mě bylo proto důležité začít pracovat s technologií spolehlivou, s neustále se zlepšující základnou, díky níž by bylo možné vytvářet plnohodnotné aplikace, a zároveň docílit jejich optimálního fungování.",
    text2:
      "S tím, jak jsem nabírala znalosti a zkušenosti s různými technologiemi, se mé zaměření postupně stočilo k jednomu z nejpopulárnějších a nejpoužívanějších tech-stacků, tzv. MERN (MongoDB, Express, React a Node). Konkrétněji pak na framework Next.js, jež funguje jako velmi dobrá nadstavba knihovny React.",
  },
};

export default skills;
