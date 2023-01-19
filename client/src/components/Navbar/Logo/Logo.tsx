import React, { useState } from "react";
import { logo1, logo2 } from "../../../assets";
import "./Logo.scss";

const Logo = () => {
  const [isOver, setIsOver] = useState(false);

  return (
    <div
      className="logo"
      onMouseOver={() => setIsOver(true)}
      onMouseOut={() => setIsOver(false)}
    >
      <img src={logo2} alt="logo" className={`logo1 ${!isOver && "hidden"}`} />
      <img src={logo1} alt="logo" className={`logo2 ${isOver && "hidden"}`} />
    </div>
  );
};

export default Logo;
