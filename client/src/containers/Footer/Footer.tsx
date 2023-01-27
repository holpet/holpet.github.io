import "./Footer.scss";

const Footer = () => {
  const date = new Date().getFullYear();
  return <div className="footer">HolPet | Petra Holavová @ {date}</div>;
};

export default Footer;
