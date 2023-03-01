import { useEffect, useRef, useState } from "react";
import "./Work.scss";
import { butterfly } from "../../assets";
import work from "../../lib/data/Work";
import SectionWrapper from "../../components/Wrappers/SectionWrapper";
import { atomLang } from "../../lib/atoms/Atoms";
import { useAtom } from "jotai";
import DescCard from "./components/DescCard";
import DemoCard from "./components/DemoCard";

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
          {work[activeLang].projects.map((project: any, idx: number) =>
            idx % 2 === 0 ? (
              <>
                <DemoCard project={project} idx={idx} key={idx} />
                <DescCard project={project} idx={idx} key={idx} />
              </>
            ) : (
              <>
                <DescCard project={project} idx={idx} key={idx} />
                <DemoCard project={project} idx={idx} key={idx} />
              </>
            )
          )}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Work;
