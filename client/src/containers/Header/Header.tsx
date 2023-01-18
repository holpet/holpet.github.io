import React from "react";
import { useAtom } from "jotai";
import { atomIsClosed as close } from "../../lib/atoms/Atoms";
import { ImMenu as Menu } from "react-icons/im";
import "./Header.scss";

const Header = () => {
  const [isClosed, setIsClosed] = useAtom(close);
  return (
    <div>
      <Menu id="menu" onClick={() => setIsClosed(false)} />
    </div>
  );
};

export default Header;
