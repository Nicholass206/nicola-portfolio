import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";
  }, [isDarkMode]);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="container">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
};

export default App;