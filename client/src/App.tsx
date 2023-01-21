import React from "react";
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

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="app-navbar">
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
  );
};

export default App;
