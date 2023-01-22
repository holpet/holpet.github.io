import React, { useEffect, useState } from "react";
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
import { SquareLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <SquareLoader color="#17acda" size={80} id="loader" />
        </div>
      ) : (
        <>
          <div className="app-wrapper">
            <div className={`app-navbar`}>
              <Navbar />
            </div>
            <div className="app-content">
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
        </>
      )}
    </>
  );
};

export default App;
