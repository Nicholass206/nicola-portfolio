import React, { useState, useEffect, Suspense, lazy } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const AboutMe = lazy(() => import("./components/AboutMe/AboutMe"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const ContactMe = lazy(() => import("./components/ContactMe/ContactMe"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails/ProjectDetails"));

import { Routes, Route, useLocation } from "react-router-dom";

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
      <Suspense fallback={<div style={{height: '200px', background: 'var(--background-color)'}}></div>}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={<div style={{height: '200px', background: 'var(--background-color)'}}></div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div style={{height: '200px', background: 'var(--background-color)'}}></div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div style={{height: '200px', background: 'var(--background-color)'}}></div>}>
        <ContactMe />
      </Suspense>
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
          <Route path="/projects/:slug" element={
            <Suspense fallback={<div style={{height: '400px', background: 'var(--background-color)'}}></div>}>
              <ProjectDetails />
            </Suspense>
          } />
        </Routes>
        <Suspense fallback={<div style={{height: '100px', background: 'var(--background-color)'}}></div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default App;