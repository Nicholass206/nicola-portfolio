import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";
// import ContactForm from "./components/ContactMe/ContactForm/ContactForm";
import Projects from "./components/Projects/Projects";

const App = () =>{
  return ( 
    <>
    
    <Navbar/>
    <div className="container">
      <Hero />
      <Skills />
      <Projects/>
      <ContactMe/>
      {/* <ContactForm/> */}
    </div>
    </>
    
  )
}

export default App