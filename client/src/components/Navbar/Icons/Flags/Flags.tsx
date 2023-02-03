import { useAtom } from "jotai";
import { atomIsClosed as closed } from "../../../../lib/atoms/Atoms";
import { useState } from "react";
import { cz, uk } from "../../../../assets";

const Flags = () => {
  const [isFlagActive, setIsFlagActive] = useState(
    window.localStorage.getItem("lang") || "en"
  );
  const [, setIsClosed] = useAtom(closed);

  return (
    <ul className="flag-icons">
      <img
        src={cz}
        id="cz"
        className={`${isFlagActive === "cz" && "active"}`}
        onClick={() => {
          window.localStorage.setItem("lang", "cz");
          setIsFlagActive("cz");
          setIsClosed(true);
        }}
      />
      <img
        src={uk}
        id="uk"
        className={`${isFlagActive === "en" && "active"}`}
        onClick={() => {
          window.localStorage.setItem("lang", "en");
          setIsFlagActive("en");
          setIsClosed(true);
        }}
      />
    </ul>
  );
};

export default Flags;
