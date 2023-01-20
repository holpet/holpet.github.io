import React from "react";
import { useAtom } from "jotai";
import { atomIsClosed as close } from "../../lib/atoms/Atoms";
import { ImMenu as Menu } from "react-icons/im";
import { FaSoundcloud as Sound } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  const [isClosed, setIsClosed] = useAtom(close);
  return (
    <header>
      {/* <div>Something something</div> */}
      {/* <div>
        <Sound id="sound" />
      </div> */}
      <div>
        <Menu id="menu" onClick={() => setIsClosed(false)} />
      </div>
    </header>
  );
};

export default Header;
