import React, { useState, useEffect } from "react";
import Preloader from "../src/components/preloader/Preloader";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contato/Contato";
import Activity from "./components/Activity/Activity";
import Plans from "./components/Plans/Plans";


function App() {
  const [load, upadateLoad] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <Home />
          <About />
          <Activity/>
          <Plans/>
          <Contact/>
          <ScrollToTop />
          <Footer />
        </div>
    </div>
  );
}

export default App;
