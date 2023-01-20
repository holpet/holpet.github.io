import React from "react";
import "./HomePage.scss";
import { AiOutlineArrowDown as Arrow } from "react-icons/ai";

const HomePage = () => {
  const name = "Petra";
  const nameArray = name.split("");

  // function reveal() {
  //   var reveals = document.querySelectorAll(".reveal");

  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveals[i].getBoundingClientRect().top;
  //     var elementVisible = 150;

  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals[i].classList.add("active");
  //     } else {
  //       reveals[i].classList.remove("active");
  //     }
  //   }
  // }

  // window.addEventListener("scroll", reveal);

  return (
    <>
      <div className="home">
        <div>
          <div className="wrapper">
            {/* Background img */}
            <div className="img-wrapper">
              <hr />
              <hr />
              <img />
            </div>
            {/* Text */}
            <div className="text-wrapper bounce">
              <p className="code">&lt;Home&gt;</p>
              <p className="greeting">Hello,</p>
              <p className="name">
                I'm{" "}
                {nameArray.map((el, i) => {
                  return (
                    <span key={i} className="squared-text">
                      {el}
                    </span>
                  );
                })}
                .
              </p>
              <p className="profession">Web developer.</p>
              <p className="role">Full Stack || Coding and learning</p>
              <a href="/" className="gradient-link">
                <span>contact</span>
                <span>contact</span>
                <div></div>
              </a>
              <p className="code">&lt;/Home&gt;</p>
            </div>
          </div>
        </div>
      </div>
      <Arrow id="arrow" />
    </>
  );
};

export default HomePage;
