import "./HomePage.scss";
import { AiOutlineArrowDown as Arrow } from "react-icons/ai";
import PrimaryLink from "../../components/Links/PrimaryLink";

const HomePage = () => {
  const name = "Petra";
  const nameArray = name.split("");

  return (
    <>
      <div className="home">
        <div>
          <div className="wrapper">
            {/* Background img */}
            <div className="img-wrapper">
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
              <p className="role">Petra Holavová || Project Portfolio</p>
              <PrimaryLink text="contact" elemType="button" />
              <p className="code end">&lt;/Home&gt;</p>
            </div>
          </div>
        </div>
      </div>
      <Arrow id="arrow" />
    </>
  );
};

export default HomePage;
