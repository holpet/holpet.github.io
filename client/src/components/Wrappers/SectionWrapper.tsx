import React from "react";
import "./SectionWrapper.scss";

interface props {
  children: React.ReactNode;
  section: string;
  char: string;
  title: string;
}

const SectionWrapper = ({ children, section, char, title }: props) => {
  return (
    <div className={section}>
      <div className="wrapper">
        <p className="code">&lt;{section}&gt;</p>
        <p className="title" data-aos="fade-down" data-aos-duration="600">
          <span>{char}</span> {title}
        </p>

        {/* Work start */}
        {children}
        {/* Work end */}

        <p className="code end">&lt;/{section}&gt;</p>
      </div>
    </div>
  );
};

export default SectionWrapper;
