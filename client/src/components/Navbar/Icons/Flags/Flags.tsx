import { useAtom } from "jotai";
import {
  atomIsClosed as closed,
  atomLang as lang,
} from "../../../../lib/atoms/Atoms";
import { cz, uk } from "../../../../assets";

const Flags = () => {
  const [activeLang, setActiveLang] = useAtom(lang);
  const [, setIsClosed] = useAtom(closed);

  return (
    <ul className="flag-icons">
      <img
        src={cz}
        id="cz"
        className={`${activeLang === "cz" && "active"}`}
        onClick={() => {
          window.localStorage.setItem("lang", "cz");
          setActiveLang("cz");
          setIsClosed(true);
        }}
      />
      <img
        src={uk}
        id="uk"
        className={`${activeLang === "en" && "active"}`}
        onClick={() => {
          window.localStorage.setItem("lang", "en");
          setActiveLang("en");
          setIsClosed(true);
        }}
      />
    </ul>
  );
};

export default Flags;
