import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Carousel from "./Components/Carousel";
import Stats from "./Components/Stats";
import Specialists from "./Components/Specialists";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <Stats />
      <Services />
      <Specialists />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
