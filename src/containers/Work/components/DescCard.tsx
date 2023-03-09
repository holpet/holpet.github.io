const DescCard = ({ project, idx }: any) => {
  return (
    <div className="grid-item">
      {idx % 2 === 0 && <div></div>} {/* decor div */}
      <div
        className="grid-description"
        data-aos={`${idx % 2 === 0 ? "fade-left" : "fade-right"}`}
      >
        <p>{project.name}</p>
        <p>○ {project.languages}</p>
        <p>○ {project.frameworks}</p>
        <p style={{ fontSize: "0.8em" }}>{project.an}</p>
        <br />
        <p>{project.description}</p>
      </div>
      {idx % 2 !== 0 && <div></div>} {/* decor div */}
    </div>
  );
};

export default DescCard;
