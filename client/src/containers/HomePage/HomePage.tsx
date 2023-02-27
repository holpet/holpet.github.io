import "./HomePage.scss";
import { AiOutlineArrowDown as Arrow } from "react-icons/ai";
import PrimaryLink from "../../components/Links/PrimaryLink";
import home from "../../lib/data/Home";
import { atomLang } from "../../lib/atoms/Atoms";
import { useAtom } from "jotai";

const HomePage = () => {
  const name = "P";
  const nameArray = name.split("");
  const [activeLang] = useAtom(atomLang);

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
              <p className="code">&lt;{home[activeLang].code}&gt;</p>
              <p className="greeting">{home[activeLang].title1}</p>
              <p className="name">
                {home[activeLang].title2}{" "}
                {nameArray.map((el, i) => {
                  return (
                    // className="squared-text"
                    <span key={i} className="">
                      {el}
                    </span>
                  );
                })}
                <b>etra</b>.
              </p>
              <p className="profession">{home[activeLang].title3}</p>
              <p className="role">{home[activeLang].subtitle}</p>
              <PrimaryLink text={home[activeLang].link} elemType="button" />
              <p className="code end">&lt;/{home[activeLang].code}&gt;</p>
            </div>
          </div>
        </div>
      </div>
      <Arrow id="arrow" />
    </>
  );
};

export default HomePage;
