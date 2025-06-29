import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h5>My Projects</h5>
      <div className="projects-content">
        {/* <ProjectCard
                imageUrl={`${process.env.PUBLIC_URL}/images/Medicure with name.png`}
                title=" Medicure "
                description="Built a Laravel-based system for managing pharmacy inventory and orders, streamlining warehouse operations with efficient backend functionality and database management."
                reverse={false}  
                ProjectUrl="https://github.com/Nicholass206/Pharmacy-Warehouse/tree/first"
            /> */}
        <ProjectCard
          imageUrl={`${process.env.PUBLIC_URL}/images/three.png`}
          title="3D Boat Simulation"
          description="Created a 3D boat simulation using Three.js, handling physics and modeling independently. This project demonstrates advanced 3D graphics and interactive simulation skills."
          reverse={false}
          ProjectUrl="https://github.com/Nicholass206/Boat-3js"
        />
        <ProjectCard
          imageUrl={`${process.env.PUBLIC_URL}/images/church-image.jpg`}
          title="Alessandra Parisi Sito"
          description="Developed a responsive portfolio website using React.js to showcase Alessandra Parisi’s collection of holy icons and religious artwork."
          reverse={true}
          ProjectUrl="https://alessandraparisi.it"
        />
        <ProjectCard
          imageUrl={`${process.env.PUBLIC_URL}/images/pierre4ad-logo.jpg`}
          title="Pierre4Ad"
          description="Contributed to a freelance project by building responsive web pages with HTML, CSS, and JavaScript, focusing on user-friendly design and functionality."
          reverse={false}
          ProjectUrl="https://pierre4ad.com/"
        />
        <ProjectCard
          imageUrl={`${process.env.PUBLIC_URL}/images/passport-image.jpg`}
          title="Passports-IDs Scanner"
          description="Integrated a Flutter SDK to scan documents like (Passports, IDs, Driver's License etc..) using MRZ decoding and pdf417, check validity of these documents "
          reverse={true}
          ProjectUrl="https://gitlab.com/fatora1/Scanner-Flutter-App"
        />
        <ProjectCard
          imageUrl={`${process.env.PUBLIC_URL}/images/athletics-dxb.png`}
          title="AthleticsDXB"
          description="Designed and developed a full-featured athlete management system from the ground up using Flutter for the front end and ASP.NET Core for the back end."
          reverse={false}
          ProjectUrl="https://gitlab.com/fatora1/athleticsdxb-frontend"
        />
      </div>
    </section>
  );
};

export default Projects;
