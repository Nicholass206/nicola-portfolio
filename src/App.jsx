import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";
import Projects from "./components/Projects/Projects";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Footer from "./components/Footer/Footer";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import { Routes, Route, useLocation } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

const App = () => {

  const HomePage = () => (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <WorkExperience />
      <ContactMe />
    </>
  );

  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith('/projects/');

  return (
    <>
      <ParticleBackground />
      {!isDetailsPage && (
        <Navbar />
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