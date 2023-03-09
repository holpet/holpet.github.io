interface aboutProps {
  [key: string]: { [key: string]: string };
}

// const about: aboutProps = {
//   en: {
//     code: "about",
//     title: "Who Am I...",
//     "1-a":
//       "I am a fan of all things functional and beautifully designed. Development of web apps, though, has a special place in my heart. I found my way to programming and web dev in general some years ago during a school lecture, which introduced us to the basics of HTML and CSS. This got me interested and eventually, I was asked to create landing webpages for my professor's wife who practiced Reiki. My daily dose of entertainment consisted of experimenting with colors and writing ",
//     "1-phrase": "lines of code",
//     "1-b":
//       " , trying to figure out how to liven up the - now well past its prime - static look of the pages.",
//     "2-a":
//       "A long time has passed since then and although, study- and career-wise my path eventually led to a different field, I've often spent my free time making graphics and solving various programming challenges out of curiosity. The need to move pictures and ",
//     "2-phrase": "graphics with purpose",
//     "2-b":
//       " and fine-tune every detail of a project is kind of in my blood. Using code, one can bring to life unique ideas, and thanks to the internet, those can be accessed by a large number of people. It's exactly the opportunity to participate in creating projects that are truly worth it, that serves as great motivation for me.",
//     "3-a":
//       "Because programming can be difficult. It's sleepless nights filled with debugging of obscure errors, frustration that something doesn't work the way it's supposed to, and well - you're always sort of learning to drive while steering the wheel. But it's also hours of work that lead to tangible results and constant reinforcement of one's ability to come up with solutions. Thereby, I would love to become a ",
//     "3-phrase": "member of a team",
//     "3-b":
//       ", that works on interesting projects, and facilitates both personal and professional growth for their members.",
//   },
//   cz: {
//     code: "about",
//     title: "Kdo jsem...",
//     "1-a":
//       'Jsem příznivec všech věcí, které dobře fungují a vypadají. Vývoj webových aplikací má však v mém srdci zvláštní místo. S programováním a vůbec nějakými základy webového developmentu jsem se poprvé setkala před lety ve škole, kde jsme si představili HTML a CSS, a dostali za úkol náležitě "se vyřádit". Já nakonec získala i příležitost vytvořit landingové stránky pro manželku našeho učitele, která provozovala svou praxi Reiki. Denně jsem se bavila experimentováním s barvami a psaním ',
//     "1-phrase": "řádků kódu",
//     "1-b":
//       ", a vymýšlela, jak tehdejší - dnes již přežitou - statickou podobu stránek jakkoli oživit.",
//     "2-a":
//       "Od té doby uplynula dlouhá doba, a ačkoli mě život studiem i profesně nakonec zavál jiným směrem, volné chvíle jsem často trávila nad grafickými programy a ze zvědavosti i řešením různých programovacích úloh. Chuť rozpohybovat obraz, ",
//     "2-phrase": "vizuálně nadchnout",
//     "2-b":
//       " a doladit projekt do detailu mám tak nějak v krvi. Pomocí kódu dokáže ožít kdejaký nápad, a díky internetu se k němu dostane nepřeberné množství lidí. Právě možnost podílet se na vytváření projektů, které stojí za to, je pro mě obrovskou motivací.",
//     "3-a":
//       "Dobře totiž vím, že programování je složité. Jsou to probdělé noci debuggování chyb, frustrace z toho, že něco nefunguje tak, jak má, a vůbec - tak trochu se stále učíte řízení za jízdy. Ale jsou to taky hodiny práce, po nichž za sebou vidíte hmatatelné výsledky, a neustále si dokazujete, že na problémy dokážete nacházet řešení. Proto bych se moc ráda stala ",
//     "3-phrase": "součástí týmu",
//     "3-b":
//       ", který pracuje na zajímavých projektech, a pomáhá svým členům jak v profesním, tak v personálním rozvoji.",
//   },
// };

const about: aboutProps = {
  en: {
    code: "about",
    title: "Who Am I...",
    "1":
      "I am *a fan of all things functional* and beautifully designed. Development of web apps, though, has a special place in my heart. I found my way to programming and web dev in general some years ago, when we were introduced to the basics of HTML and CSS at school. My daily dose of entertainment consisted of experimenting with colors and writing lines of code, trying to figure out how to liven up the - now well past its prime - static look of the pages. In the end, I was asked to create landing webpages for a local Reiki business in exchange for my first Photoshop licence ☺️.",
    "2":
      "A long time had passed since then and although, study- and career-wise my path eventually led me to a different field, I've often spent my free time making graphics *and *solving various programming challenges out of curiosity. The need to move *graphics with purpose* and fine-tune the details and fuctionality of a project is kind of in my blood. Using code, one can bring to life unique ideas, and thanks to the internet, those can be accessed by a large number of people. It's exactly the opportunity to participate in creating projects that are truly worth it, that serves as great motivation for me.",
    "3-a":
      "Because programming can be difficult. It's sleepless nights filled with debugging of obscure errors, frustration that something doesn't work the way it's supposed to, and well - you're always sort of learning to drive while steering the wheel. But it's also hours of work that lead to tangible results and constant reinforcement of one's ability to come up with solutions. Thereby, I would love to become a ",
    "3-phrase": "member of a team",
    "3-b":
      ", that works on interesting projects, and facilitates both personal and professional growth for their members.",
  },
  cz: {
    code: "about",
    title: "Kdo jsem...",
    "1":
      "Jsem *příznivec *všech *věcí, které dobře fungují* a vypadají. Vývoj webových aplikací má však v mém srdci zvláštní místo. S programováním a vůbec základy web developmentu jsem se poprvé setkala před lety ve škole, kde jsme si představili HTML a CSS. Denně jsem se bavila experimentováním s barvami, psaním kódu, a vymýšlela, jak tehdejší - dnes již přežitou - statickou podobu stránek jakkoli oživit. Díky barterovému obchodu s panem učitelem jsem nakonec získala i svou první licenci Photoshopu výměnou za vypracování landingových stránek pro jednu místní provozovnu Reiki ☺️.",
    "2":
      "Od té doby uplynula dlouhá doba, a ačkoli mě život studiem i profesně nakonec zavál jiným směrem, volné chvíle jsem často trávila nad grafickými programy *a *ze zvědavosti i řešením různých programovacích úloh. Chuť rozpohybovat obraz, *vizuálně nadchnou*t a doladit projekt do detailu, aby skutečně fungoval podle přání, mám tak nějak v krvi. Pomocí kódu dokáže ožít kdejaký nápad, a díky internetu se k němu často dostane nepřeberné množství lidí. Právě možnost podílet se na vytváření projektů, které stojí za to, je pro mě obrovskou motivací.",
    "3-a":
      "Dobře totiž vím, že programování je složité. Jsou to probdělé noci debuggování chyb, frustrace z toho, že něco nefunguje tak, jak má, a vůbec - tak trochu se stále učíte řízení za jízdy. Ale jsou to taky hodiny práce, po nichž za sebou vidíte hmatatelné výsledky, a neustále si dokazujete, že na problémy dokážete nacházet řešení. Proto bych se moc ráda stala ",
    "3-phrase": "součástí týmu",
    "3-b":
      ", který pracuje na zajímavých projektech, a pomáhá svým členům jak v profesním, tak v personálním rozvoji.",
  },
};

export default about;
