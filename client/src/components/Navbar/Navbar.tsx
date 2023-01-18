import React from "react";
import { useAtom } from "jotai";
import { atomIsClosed as closed } from "../../lib/atoms/Atoms";
import "./Navbar.scss";
import { FaGithub as Github } from "react-icons/fa";
import { AiFillCloseCircle as Close } from "react-icons/ai";
import Logo from "./Logo/Logo";

const Navbar = () => {
  const [isClosed, setIsClosed] = useAtom(closed);

  return (
    <aside className={`navbar ${!isClosed && "show"}`}>
      <div className="navbar-wrapper">
        <Close id="close" onClick={() => setIsClosed(true)} />

        <div className="logo-section">
          <a rel="home" href="/">
            <Logo />
            <span>HolPet</span>
          </a>
          <span>Web Developer</span>
        </div>

        <nav className="nav-links">
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">Skills</a>
          </div>
          <div>
            <a href="#">Work</a>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>
        </nav>
        <ul className="social-icons">
          <a href="https://github.com/holpet">
            <Github id="github" />
          </a>
        </ul>
      </div>
    </aside>
  );
};

export default Navbar;
