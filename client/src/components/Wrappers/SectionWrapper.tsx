import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SectionWrapper.scss";

interface props {
  children: React.ReactNode;
  section: string;
}

const SectionWrapper = ({ children, section }: props) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className={section}>
      <div className="wrapper">
        <p className="code">&lt;About&gt;</p>
        <p className="title">
          <span data-aos="fade-down-right">私</span> My Story...
        </p>
        {children}
        <p className="code">&lt;/About&gt;</p>
      </div>
    </div>
  );
};

export default SectionWrapper;
