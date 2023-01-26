import { useEffect, useRef } from "react";
import "./App.scss";
import {
  Home,
  About,
  Contact,
  Skills,
  Work,
  Header,
  Footer,
} from "./containers";
import { Navbar } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 800, startEvent: "load", offset: 50 });
  }, []);

  return (
    <div ref={appRef} className={`app-wrapper`}>
      <div className={`app-navbar`}>
        <Navbar />
      </div>
      <div className="app-content" data-aos="fade-left" data-aos-delay="400">
        <Header />
        <main className="app-main">
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
