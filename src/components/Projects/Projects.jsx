import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';


const Projects = () => {
  return (
    <section id="projects" className="projects-container">
        <h5>My Projects</h5>
        <div className="projects-content">
            <ProjectCard
                imageUrl={`${process.env.PUBLIC_URL}/images/Medicure with name.png`}
                title=" Medicure "
                description="Built a Laravel-based system for managing pharmacy inventory and orders, streamlining warehouse operations with efficient backend functionality and database management."
                reverse={false}  
                ProjectUrl="https://github.com/Nicholass206/Pharmacy-Warehouse/tree/first"
            />
            <ProjectCard
                imageUrl={`${process.env.PUBLIC_URL}/images/three.png`}
                title="3D Boat Simulation"
                description="Created a 3D boat simulation using Three.js, handling physics and modeling independently. This project demonstrates advanced 3D graphics and interactive simulation skills."
                reverse={true}  
                ProjectUrl="https://github.com/Nicholass206/Boat-3js"

            />
            <ProjectCard
                imageUrl={`${process.env.PUBLIC_URL}/images/pierre4ad-logo.jpg`}
                title="Pierre4Ad"
                description="Contributed to a freelance project by building responsive web pages with HTML, CSS, and JavaScript, focusing on user-friendly design and functionality."
                reverse={false}
                ProjectUrl="https://pierre4ad.com/" 
            />
            <ProjectCard
                imageUrl={`${process.env.PUBLIC_URL}/images/Job Seekers.png`}
                title="Job Seekers"
                description="Developed a job board using React.js, enabling users to browse and apply for jobs. Emphasized interactive design and a seamless single-page experience."
                reverse={true}  
                ProjectUrl="https://github.com/Nicholass206/Job-Seekers"
            />
        </div>
    </section>
  );
}

export default Projects;
