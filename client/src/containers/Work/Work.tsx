import { useEffect, useRef, useState } from "react";
import "./Work.scss";
import { butterfly } from "../../assets";
import { ImEye as Eye, ImEyeBlocked as EyeBlocked } from "react-icons/im";
import { FaGithub as Github } from "react-icons/fa";
import work from "../../lib/data/Work";
import SectionWrapper from "../../components/Wrappers/SectionWrapper";
import { atomLang } from "../../lib/atoms/Atoms";
import { useAtom } from "jotai";

const Work = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState("200px");
  const [activeLang] = useAtom(atomLang);

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
    <div id="work-section">
      <SectionWrapper
        section={work[activeLang].code}
        char="見"
        title={work[activeLang].title}
      >
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
              style={{
                backgroundImage: `url(${work[activeLang].projects[0].img})`,
              }}
            ></div>
            <div className="grid-links">
              <div
                className="grid-github"
                onClick={() => {
                  window.open(work[activeLang].projects[0].github, "_blank");
                }}
              >
                <Github className="gh" />
              </div>
              <div
                className="grid-url"
                onClick={() => {
                  window.open(work[activeLang].projects[0].web, "_blank");
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
              <p>{work[activeLang].projects[0].name}</p>
              <p>○ {work[activeLang].projects[0].languages}</p>
              <p>○ {work[activeLang].projects[0].frameworks}</p>
              <br />
              <p>{work[activeLang].projects[0].description}</p>
            </div>
          </div>
          {/* Second row */}
          {/* ---------------- Project description -------------------- */}
          <div className="grid-item">
            <div className="grid-description">
              <p>{work[activeLang].projects[1].name}</p>
              <p>○ {work[activeLang].projects[1].languages}</p>
              <p>○ {work[activeLang].projects[1].frameworks}</p>
              <br />
              <p>{work[activeLang].projects[1].description}</p>
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
                  window.open(work[activeLang].projects[1].github, "_blank");
                }}
              >
                <Github className="gh" />
              </div>
              <div
                className="grid-url"
                onClick={() => {
                  window.open(work[activeLang].projects[1].web, "_blank");
                }}
              >
                <Eye className="eye" />
              </div>
            </div>
            <div
              className="grid-image"
              style={{
                backgroundImage: `url(${work[activeLang].projects[1].img})`,
                zIndex: "1",
              }}
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
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Work;
