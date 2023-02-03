import { useAtom } from "jotai";
import { atomIsClosed as closed } from "../../lib/atoms/Atoms";
import "./Navbar.scss";
import { AiFillCloseCircle as Close } from "react-icons/ai";
import Logo from "./Logo/Logo";
import Icons from "./Icons/Icons";
import styled, { useTheme } from "styled-components";

const Navbar = () => {
  const [isClosed, setIsClosed] = useAtom(closed);
  const theme = useTheme();

  return (
    <aside className={`navbar ${!isClosed && "show"}`}>
      <div className="navbar-wrapper">
        <Close
          id="close"
          onClick={() => {
            setIsClosed(true);
          }}
        />

        <div className="logo-section">
          <a rel="home" href="/">
            <Logo />
            <span>HolPet</span>
          </a>
          <span>&lt;WebDev&gt;</span>
        </div>

        <nav className="nav-links">
          <div>
            <a href="#about-section" onClick={() => setIsClosed(true)}>
              About
            </a>
          </div>
          <div>
            <a href="#skills-section" onClick={() => setIsClosed(true)}>
              Skills
            </a>
          </div>
          <div>
            <a href="#work-section" onClick={() => setIsClosed(true)}>
              Work
            </a>
          </div>
          <div>
            <a href="#contact-section" onClick={() => setIsClosed(true)}>
              Contact
            </a>
          </div>
        </nav>
        <Icons />
      </div>
    </aside>
  );
};

export default Navbar;
