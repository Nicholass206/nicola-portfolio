import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h5>My Projects</h5>
      <div className="projects-content">
      <div id="project-zamil">
        <ProjectCard
          imageUrl={`${process.env.PUBLIC_URL}/images/zamil-logo.jpg`}
          title="Zamil"
          description="Zamil is student collaborative platform that helps students to collaborate and learn together throught a centralized system consisting of a mobile application for the students and a web dashboard for doctors, professors and employees."
          reverse={false}
          ProjectUrl=""
          detailsSlug="zamil"
        />
        </div>
        <div id="project-wordpress">
        <ProjectCard
          imageUrl={`${process.env.PUBLIC_URL}/images/lenabni-arabic-logo.png`}
          title="Lenabni"
          description="Lnabni is an elegant website dedicated to celebrating and empowering Syrian women. The platform highlights stories, culture, and creativity while providing a modern digital space that reflects resilience and identity."
          reverse={true}
          ProjectUrl="https://lnabni.com/"
          detailsSlug="lenabni"
        />
        </div>
        <div id="project-flutter">
        <ProjectCard
          imageUrl={`${process.env.PUBLIC_URL}/images/athletics-dxb.png`}
          title="AthleticsDXB"
          description="Designed and developed a full-featured athlete management system from the ground up using Flutter for the front end and ASP.NET Core for the back end."
          reverse={false}
          ProjectUrl="https://gitlab.com/fatora1/athleticsdxb-frontend"
          detailsSlug="athleticsdxb"
        />
        </div>
        <div id="project-react">
        <ProjectCard
          imageUrl={`${process.env.PUBLIC_URL}/images/church-image.jpg`}
          title="Alessandra Parisi Sito"
          description="Developed a responsive portfolio website using React.js to showcase Alessandra Parisi’s collection of holy icons and religious artwork."
          reverse={true}
          ProjectUrl="https://alessandraparisi.it"
          detailsSlug="alessandra-parisi"
        />
        </div>
        <div id="project-html">
        <ProjectCard
          imageUrl={`${process.env.PUBLIC_URL}/images/pierre4ad-logo.jpg`}
          title="Pierre4Ad"
          description="Contributed to a freelance project by building responsive web pages with HTML, CSS, and JavaScript, focusing on user-friendly design and functionality."
          reverse={false}
          ProjectUrl="https://pierre4ad.com/"
          detailsSlug="pierre4ad"
        />
        </div>
        <div id="project-flutter-scanner">
        <ProjectCard
          imageUrl={`${process.env.PUBLIC_URL}/images/passport-image.jpg`}
          title="Passports-IDs Scanner"
          description="Integrated a Flutter SDK to scan documents like (Passports, IDs, Driver's License etc..) using MRZ decoding and pdf417, check validity of these documents "
          reverse={true}
          ProjectUrl="https://gitlab.com/fatora1/Scanner-Flutter-App"
          detailsSlug="scanner"
        />
        </div>
        <div id="project-threejs">
        <ProjectCard
          imageUrl={`${process.env.PUBLIC_URL}/images/three.png`}
          title="3D Boat Simulation"
          description="Created a 3D boat simulation using Three.js, handling physics and modeling independently. This project demonstrates advanced 3D graphics and interactive simulation skills."
          reverse={false}
          ProjectUrl="https://github.com/Nicholass206/Boat-3js"
          detailsSlug="threejs-boat"
        />
        </div>
      </div>
    </section>
  );
};

export default Projects;
