import { useEffect, useRef, useState } from "react";
import "./Work.scss";
import { butterfly } from "../../assets";
import { demo1, demo2 } from "../../assets/demo";
import { ImEye as Eye, ImEyeBlocked as EyeBlocked } from "react-icons/im";
import { FaGithub as Github } from "react-icons/fa";
import SectionWrapper from "../../components/Wrappers/SectionWrapper";

const Work = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState("200px");

  function getLineHeight() {
    const vw = window.innerWidth / 100;
    const vw_icon = vw * 25;
    const vw_lineFromTop = vw * 10;
    let gridLineHeight = 0;
    if (gridRef.current?.clientHeight !== undefined) {
      gridLineHeight = gridRef.current.clientHeight + vw_icon - vw_lineFromTop;
    }
    return gridLineHeight;
  }

  useEffect(() => {
    setLineHeight(getLineHeight() + "px");
  }, []);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setLineHeight(getLineHeight() + "px");
    });
    return;
  });

  return (
    <SectionWrapper section="work" char="見" title="What I've done...">
      <div
        className="work-icon-container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <img src={butterfly} className="work-icon" />
        <div className="work-line" style={{ height: lineHeight }}></div>
      </div>

      {/* ************ container ************** */}

      <div className="grid" ref={gridRef}>
        {/* First row */}
        {/* ---------------- Project image -------------------- */}
        <div
          className="grid-item"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="grid-title">#1</div>
          <div
            className="grid-image"
            style={{ backgroundImage: `url(${demo1})` }}
          ></div>
          <div className="grid-links">
            <div
              className="grid-github"
              onClick={() => {
                window.open("https://github.com/holpet", "_blank");
              }}
            >
              <Github className="gh" />
            </div>
            <div
              className="grid-url"
              onClick={() => {
                window.open("https://e-comm-clk.vercel.app/", "_blank");
              }}
            >
              <Eye className="eye" />
            </div>
          </div>
        </div>
        {/* ---------------- Project description -------------------- */}
        <div className="grid-item">
          <div></div> {/* decor div */}
          <div className="grid-description" data-aos="fade-left">
            <p>E-Commerce web</p>
            <p>○ TypeScript, JavaScript, HTML, CSS</p>
            <p>○ Next.js, Tailwind</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              faucibus urna. Morbi eu pulvinar metus. Sed a augue quis dolor
              facilisis iaculis nec et lacus. Mauris ultrices bibendum leo, sed
              eleifend lorem tristique ut. Sed laoreet magna vitae diam pharetra
              commodo. Proin urna orci, ultrices sed malesuada nec, rutrum vitae
              orci. Duis interdum molestie rhoncus. Praesent quis nisl blandit,
              auctor nulla id, tincidunt quam. Praesent molestie posuere
              aliquet. Aenean molestie semper massa, a sollicitudin risus
              viverra sed. Aliquam cursus placerat mauris vitae tristique.
              Nullam erat risus, posuere eu sollicitudin sed, pharetra rutrum
              justo. Praesent eu nunc quis enim tempor tempus eget eget sem.
              Duis sit amet sapien in dolor hendrerit ullamcorper. Aliquam at
              condimentum urna.
            </p>
          </div>
        </div>
        {/* Second row */}
        {/* ---------------- Project description -------------------- */}
        <div className="grid-item">
          <div className="grid-description">
            <p>Chatbox web</p>
            <p>○ TypeScript, JavaScript, HTML, CSS</p>
            <p>○ Next.js, Tailwind</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              faucibus urna. Morbi eu pulvinar metus. Sed a augue quis dolor
              facilisis iaculis nec et lacus. Mauris ultrices bibendum leo, sed
              eleifend lorem tristique ut. Sed laoreet magna vitae diam pharetra
              commodo. Proin urna orci, ultrices sed malesuada nec, rutrum vitae
              orci. Duis interdum molestie rhoncus. Praesent quis nisl blandit,
              auctor nulla id, tincidunt quam. Praesent molestie posuere
              aliquet.
            </p>
          </div>
          <div></div> {/* decor div */}
        </div>
        {/* ---------------- Project image -------------------- */}
        <div className="grid-item">
          <div className="grid-title">#2</div>
          <div className="grid-links" style={{ zIndex: "2" }}>
            <div
              className="grid-github"
              onClick={() => {
                window.open("https://github.com/holpet", "_blank");
              }}
            >
              <Github className="gh" />
            </div>
            <div
              className="grid-url"
              onClick={() => {
                window.open("https://e-comm-clk.vercel.app/", "_blank");
              }}
            >
              <Eye className="eye" />
            </div>
          </div>
          <div
            className="grid-image"
            style={{ backgroundImage: `url(${demo2})`, zIndex: "1" }}
          ></div>
        </div>

        {/* +++++++++++++++++++++++++++++++++++ */}
        {/* +++++++++++++++++++++++++++++++++++ */}
        {/* Third row */}
        <div className="grid-item">
          <div></div>
        </div>
        <div className="grid-item">
          <div></div>
          <div>UUUUUF</div>
        </div>
        {/* Fourth row */}
        <div className="grid-item">
          <div>HAAAAA</div>
          <div></div>
        </div>
        <div className="grid-item">
          <div></div>
        </div>
        {/* Fifth row */}
        <div className="grid-item">
          <div></div>
        </div>
        <div className="grid-item">
          <div></div>
          <div>SIIIICK</div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Work;
