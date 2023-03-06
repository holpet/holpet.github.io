import { demo1, demo2, demo3, demo4 } from "../../assets/demo";

interface workProps {
  [key: string]: { [key: string]: any };
}

const work: workProps = {
  en: {
    code: "work",
    title: "What I've done...",
    link: "more work",
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
          "App with the basic funtionality of a social network site like Twitter. Only with cats and therefore much cuter 😼. Users can post messages and images - anonymously or with a registered profile they can customize (icon, bg, description etc.). All messages, pictures and other data are persisted in a database and can be deleted by user. Search functionality allows for fast lookups.",
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
    link: "další práce",
    projects: [
      {
        name: "E-commerce Web",
        languages: "Typescript, Javascript, HTML, CSS",
        frameworks: "Next.js (React), Tailwind",
        description:
          "Funkční vzor webové stránky pro e-shop s oblečením a elektronikou. Aplikace volá server FakeStoreAPI, z něhož získává informace o různém zboží. Všechny vybrané položky jsou uloženy do košíku pomocí react-redux a react-persist. Uživatelé jsou autentikováni pomocí OAuth (next-auth) pro Google a Facebook. Stránka implementuje vyhledávání a filtrování.",
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
          "Appka se základní funkcionalitou sociální sítě jako je Twitter. Tentokrát však se vzorem kočky, a proto o mnoho roztomilejší 😼. Uživatelé mohou posílat zprávy a obrázky - anonymně nebo pod svým registrovaným účtem, přičemž profil lze přizpůsobit (úprava ikon, pozadí, popisu atd.). Všechna data jsou ukládána do databáze a mohou být smazána. Funkce vyhledávání příspěvků.",
        img: demo2,
        github: "https://github.com/holpet/chatbox",
        web: "https://chatbox-app.onrender.com/",
        an: "*kvůli limitu serveru je k načtení dema potřeba až 1 min",
      },
      {
        name: "Keeper App",
        languages: "Javascript, HTML, CSS",
        frameworks: "React",
        description:
          "Aplikace, která umožňuje uživatelům vytvářet poznámky a připínat je na stránku. Uživatelé mohou editovat, ukládat a mazat všechny lístky (data jsou ukládána do lokální paměti - po obnovení stránky se vrátí do původního stavu). Design implementuje Masonry efekt (poznámky jsou ve sloupcích a vertikálně se k sobě lepí) a Framer-Motion animace při uložení a mazání.",
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
          'Tato aplikace demonstruje, jak fungují algoritmy pro hledání nejkratší cesty. Tyto algoritmy jsou v reálu využívány např. v mapách Google Maps, aby určily nejlepší cestu z bodu A do bodu B. Uživatelé mohou pohybovat startovní a konečnou pozicí, kreslit normální i vážené stěny (popř. využít přidaného bludiště a schodů jako překážek) a vybrat si z 5 nejčastěji uplatňovaných algoritmů. Po kliknutí na "START" se rozjede barevná animace vyznačující cestu.',
        img: demo4,
        github: "https://github.com/holpet/pathfinder",
        web: "https://holpet.github.io/pathfinder/",
        an: "",
      },
    ],
  },
};

export default work;
