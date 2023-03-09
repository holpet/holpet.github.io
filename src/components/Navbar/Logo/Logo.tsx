import React, { useState } from "react";
import {
  logo1,
  logo2,
  logo1_bg,
  logo1_bird,
  logo2_bg,
  logo2_bird,
} from "../../../assets";
import "./Logo.scss";

const Logo = () => {
  const [isOver, setIsOver] = useState(false);

  return (
    <div
      className="logo"
      onMouseOver={() => setIsOver(true)}
      onMouseOut={() => setIsOver(false)}
    >
      <img
        src={logo1_bg}
        alt="logo"
        className={`logo2_bg ${isOver && "hidden"}`}
      />
      <img
        src={logo2_bg}
        alt="logo"
        className={`logo1_bg ${!isOver && "hidden"}`}
      />
      <img
        src={logo2_bird}
        alt="logo"
        className={`logo1 ${!isOver && "hidden"}`}
      />
      <img
        src={logo1_bird}
        alt="logo"
        className={`logo2 ${isOver && "hidden"}`}
      />
    </div>
  );
};

export default Logo;
