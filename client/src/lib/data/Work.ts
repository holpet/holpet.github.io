import { demo1, demo2, demo3, demo4 } from "../../assets/demo";

interface workProps {
  [key: string]: { [key: string]: string | { [key: string]: string }[] };
}

const work: workProps = {
  en: {
    code: "work",
    title: "What I've done...",
    projects: [
      {
        name: "E-commerce Web",
        languages: "Typescript, Javascript, HTML, CSS",
        frameworks: "Next.js (React), Tailwind",
        description:
          "This is a sample website for a clothing and electronics store. App makes API calls to FakeStoreAPI to fetch various items. All selected items are then persisted in a cart using react-redux and react-persist to local storage. Users are authenticated with OAuth (next-auth) for Google & Facebook. Site has implemented search functionality and filtering.",
        img: demo1,
        github: "https://github.com/holpet/e-comm-clk",
        web: "https://e-comm-clk.vercel.app/",
        an: "",
      },
      {
        name: "C(h)atbox Web",
        languages: "Javascript, HTML, CSS",
        frameworks: "Node.js with Express, EJS, MongoDB",
        description:
          "App with the basic funtionality of a social network site like twitter. Only with cats and therefore much cuter. Users can post messages and images - anonymously or with a registered profile they can customize (icon, bg, description etc.). All messages and pictures are persisted in a database and can be deleted by user. Search functionality allows for fast lookups.",
        img: demo2,
        github: "https://github.com/holpet/chatbox",
        web: "https://chatbox-app.onrender.com/",
        an: "demo may take up to 1 min to load due to server limitations",
      },
      {
        name: "Keeper App",
        languages: "Javascript, HTML, CSS",
        frameworks: "React",
        description:
          "A React app that lets users create notes and pin them on the page. Users can edit, save and delete all notes in place (data are kept in local memory - after page refresh returning to initial state). Design implements Masonry effect (notes stick together vertically creating neat columns) and Framer-Motion animations during save / delete.",
        img: demo3,
        github: "https://github.com/holpet/keeper-app",
        web: "https://keeper-app-beige.vercel.app/",
        an: "",
      },
      {
        name: "Pathfinder App",
        languages: "Javascript, HTML, CSS",
        frameworks: "React",
        description:
          'An app that demonstrates how pathfinding algorithms work. These algorithms are used in real life application like e.g. Google maps to figure out the best/shortest paths from point A to point B. User can move around start and goal positions, draw normal and weighted walls (alternatively employ the added maze / stairs obstacles) and choose from 5 most popular algorithms. After clicking "START", colorful animation will demo the path.',
        img: demo4,
        github: "https://github.com/holpet/pathfinder",
        web: "https://holpet.github.io/pathfinder/",
        an: "",
      },
    ],
  },
  cz: {
    code: "work",
    title: "Co jsem vytvořila...",
    p1: "použito v projektech:",
    p2: "Toto webové portfolio bylo vytvořeno pomocí Reactu.",
    text1:
      "S tím, jak jsem postupně nabírala znalosti a zkušenosti s různými technologiemi a uvědomila si, že mým cílem je podílet se na vytváření komplexnějších projektů s reálnými dopady, se mé zaměření celkem přirozeně stočilo k jednomu z nejpopulárnějších a zároveň nejpoužívanějších webových tech stacků, a sice tzv. MERN (MongoDB, Express, React a Node).",
    text2:
      "Ve webovém developmentu, ale i v celém IT odvětví obecně, je dnes jasně vidět trend exponenciálního růstu, díky nemuž neustále vznikají nové a nové technologie. Pro mě bylo proto důležité vybrat si technologii osvědčenou a spolehlivou, a zároveň díky ní získat dobré základy a předpoklady k vytváření plnohodnotných aplikací a jejich optimálnímu fungování.",
  },
};

export default work;
