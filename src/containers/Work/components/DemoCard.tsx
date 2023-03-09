import { ImEye as Eye, ImEyeBlocked as EyeBlocked } from "react-icons/im";
import { FaGithub as Github } from "react-icons/fa";

const DemoCard = ({ project, idx }: any) => {
  return (
    <div
      className="grid-item"
      data-aos={`${idx % 2 === 0 ? "fade-right" : "fade-left"}`}
      data-aos-duration="1500"
    >
      <div className="grid-title">#{idx + 1}</div>

      {idx % 2 === 0 ? (
        <>
          <Img project={project} />
          <Links project={project} />
        </>
      ) : (
        <>
          <Links project={project} />
          <Img project={project} />
        </>
      )}
    </div>
  );
};

const Img = ({ project }: any) => {
  return (
    <div
      className="grid-image"
      style={{
        backgroundImage: `url(${project.img})`,
        zIndex: "1",
      }}
    ></div>
  );
};

const Links = ({ project }: any) => {
  return (
    <div className="grid-links" style={{ zIndex: "2" }}>
      <div
        className="grid-github"
        onClick={() => {
          window.open(project.github, "_blank");
        }}
      >
        <Github className="gh" />
      </div>
      <div
        className="grid-url"
        onClick={() => {
          window.open(project.web, "_blank");
        }}
      >
        <Eye className="eye" />
      </div>
    </div>
  );
};

export default DemoCard;
