import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";
  }, [isDarkMode]);

  const HomePage = () => (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );

  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith('/projects/');

  return (
    <>
      {!isDetailsPage && (
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      )}
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;