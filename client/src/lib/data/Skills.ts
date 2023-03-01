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
      "As I've grown and came to realize I wanted to create more complex, impactful projects, I've been broadening my knowledge and experience with various technologies, focused specifically on one of the most popular and widely used tech stacks: the MERN stack (MongoDB, Express, React, Node).",
    text2:
      "Since web dev and the IT industry in general progresses exponentially fast nowadays, leaving us with so many technologies to utilize, it was important for me to work with one that's proven, reliable, and that can provide solid building blocks for full stack applications with good optimization.",
  },
  cz: {
    code: "skills",
    title: "S čím pracuji...",
    p1: "používáno v projektech:",
    p2: "Toto webové portfolio bylo vytvořeno pomocí Reactu.",
    text1:
      "S tím, jak jsem postupně nabírala znalosti a zkušenosti s různými technologiemi a uvědomila si, že mým cílem je podílet se na vytváření komplexnějších projektů s reálnými dopady, se mé zaměření stočilo k jednomu z nejpopulárnějších a nejpoužívanějších webových tech-stacků, tzv. MERN (MongoDB, Express, React a Node).",
    text2:
      "Ve webovém developmentu, a v celém IT odvětví obecně, vznikají nové technologie, které se vyvíjí exponenciální rychlostí. Pro mě bylo proto důležité pracovat s technologií osvědčenou a spolehlivou, díky níž je možné vytvářet plnohodnotné aplikace, a zároveň docílit jejich optimálního fungování.",
  },
};

export default skills;
