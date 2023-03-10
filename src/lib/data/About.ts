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
//       'Jsem p????znivec v??ech v??c??, kter?? dob??e funguj?? a vypadaj??. V??voj webov??ch aplikac?? m?? v??ak v m??m srdci zvl????tn?? m??sto. S programov??n??m a v??bec n??jak??mi z??klady webov??ho developmentu jsem se poprv?? setkala p??ed lety ve ??kole, kde jsme si p??edstavili HTML a CSS, a dostali za ??kol n??le??it?? "se vy????dit". J?? nakonec z??skala i p????le??itost vytvo??it landingov?? str??nky pro man??elku na??eho u??itele, kter?? provozovala svou praxi Reiki. Denn?? jsem se bavila experimentov??n??m s barvami a psan??m ',
//     "1-phrase": "????dk?? k??du",
//     "1-b":
//       ", a vym????lela, jak tehdej???? - dnes ji?? p??e??itou - statickou podobu str??nek jakkoli o??ivit.",
//     "2-a":
//       "Od t?? doby uplynula dlouh?? doba, a a??koli m?? ??ivot studiem i profesn?? nakonec zav??l jin??m sm??rem, voln?? chv??le jsem ??asto tr??vila nad grafick??mi programy a ze zv??davosti i ??e??en??m r??zn??ch programovac??ch ??loh. Chu?? rozpohybovat obraz, ",
//     "2-phrase": "vizu??ln?? nadchnout",
//     "2-b":
//       " a doladit projekt do detailu m??m tak n??jak v krvi. Pomoc?? k??du dok????e o????t kdejak?? n??pad, a d??ky internetu se k n??mu dostane nep??ebern?? mno??stv?? lid??. Pr??v?? mo??nost pod??let se na vytv????en?? projekt??, kter?? stoj?? za to, je pro m?? obrovskou motivac??.",
//     "3-a":
//       "Dob??e toti?? v??m, ??e programov??n?? je slo??it??. Jsou to probd??l?? noci debuggov??n?? chyb, frustrace z toho, ??e n??co nefunguje tak, jak m??, a v??bec - tak trochu se st??le u????te ????zen?? za j??zdy. Ale jsou to taky hodiny pr??ce, po nich?? za sebou vid??te hmatateln?? v??sledky, a neust??le si dokazujete, ??e na probl??my dok????ete nach??zet ??e??en??. Proto bych se moc r??da stala ",
//     "3-phrase": "sou????st?? t??mu",
//     "3-b":
//       ", kter?? pracuje na zaj??mav??ch projektech, a pom??h?? sv??m ??len??m jak v profesn??m, tak v person??ln??m rozvoji.",
//   },
// };

const about: aboutProps = {
  en: {
    code: "about",
    title: "Who Am I...",
    "1":
      "I am *a fan of all things functional* and beautifully designed. Development of web apps, though, has a special place in my heart. I found my way to programming and web dev in general some years ago, when we were introduced to the basics of HTML and CSS at school. My daily dose of entertainment consisted of experimenting with colors and writing lines of code, trying to figure out how to liven up the - now well past its prime - static look of the pages. In the end, I was asked to create landing webpages for a local Reiki business in exchange for my first Photoshop licence ??????.",
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
      "Jsem *p????znivec *v??ech *v??c??, kter?? dob??e funguj??* a vypadaj??. V??voj webov??ch aplikac?? m?? v??ak v m??m srdci zvl????tn?? m??sto. S programov??n??m a v??bec z??klady web developmentu jsem se poprv?? setkala p??ed lety ve ??kole, kde jsme si p??edstavili HTML a CSS. Denn?? jsem se bavila experimentov??n??m s barvami, psan??m k??du, a vym????lela, jak tehdej???? - dnes ji?? p??e??itou - statickou podobu str??nek jakkoli o??ivit. D??ky barterov??mu obchodu s panem u??itelem jsem nakonec z??skala i svou prvn?? licenci Photoshopu v??m??nou za vypracov??n?? landingov??ch str??nek pro jednu m??stn?? provozovnu Reiki ??????.",
    "2":
      "Od t?? doby uplynula dlouh?? doba, a a??koli m?? ??ivot studiem i profesn?? nakonec zav??l jin??m sm??rem, voln?? chv??le jsem ??asto tr??vila nad grafick??mi programy *a *ze zv??davosti i ??e??en??m r??zn??ch programovac??ch ??loh. Chu?? rozpohybovat obraz, *vizu??ln?? nadchnou*t a doladit projekt do detailu, aby skute??n?? fungoval podle p????n??, m??m tak n??jak v krvi. Pomoc?? k??du dok????e o????t kdejak?? n??pad, a d??ky internetu se k n??mu ??asto dostane nep??ebern?? mno??stv?? lid??. Pr??v?? mo??nost pod??let se na vytv????en?? projekt??, kter?? stoj?? za to, je pro m?? obrovskou motivac??.",
    "3-a":
      "Dob??e toti?? v??m, ??e programov??n?? je slo??it??. Jsou to probd??l?? noci debuggov??n?? chyb, frustrace z toho, ??e n??co nefunguje tak, jak m??, a v??bec - tak trochu se st??le u????te ????zen?? za j??zdy. Ale jsou to taky hodiny pr??ce, po nich?? za sebou vid??te hmatateln?? v??sledky, a neust??le si dokazujete, ??e na probl??my dok????ete nach??zet ??e??en??. Proto bych se moc r??da stala ",
    "3-phrase": "sou????st?? t??mu",
    "3-b":
      ", kter?? pracuje na zaj??mav??ch projektech, a pom??h?? sv??m ??len??m jak v profesn??m, tak v person??ln??m rozvoji.",
  },
};

export default about;
