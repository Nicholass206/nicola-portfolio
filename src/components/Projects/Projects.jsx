import React, { useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "project-zamil",
    title: "Zamil",
    description:
      "Student collaborative platform that helps students learn together through a centralized system — mobile app for students, web dashboard for doctors and faculty.",
    tags: ["Flutter", "React", "ASP.NET"],
    imageUrl: `${process.env.PUBLIC_URL}/images/zamil-logo.jpg`,
    ProjectUrl: "",
    detailsSlug: "zamil",
  },
  {
    id: "project-wordpress",
    title: "Lenabni",
    description:
      "An elegant website celebrating Syrian women — highlighting stories, culture, and creativity through a modern digital platform reflecting resilience and identity.",
    tags: ["WordPress", "CSS", "UI Design"],
    imageUrl: `${process.env.PUBLIC_URL}/images/lenabni-arabic-logo.png`,
    ProjectUrl: "https://lnabni.com/",
    detailsSlug: "lenabni",
  },
  {
    id: "project-flutter",
    title: "AthleticsDXB",
    description:
      "Full-featured athlete management system built from the ground up using Flutter for the front end and ASP.NET Core for the back end.",
    tags: ["Flutter", "ASP.NET Core", "REST API"],
    imageUrl: `${process.env.PUBLIC_URL}/images/athletics-dxb.png`,
    ProjectUrl: "https://gitlab.com/fatora1/athleticsdxb-frontend",
    detailsSlug: "athleticsdxb",
  },
  {
    id: "project-react",
    title: "Alessandra Parisi Sito",
    description:
      "Responsive portfolio website built with React.js to showcase Alessandra Parisi's collection of holy icons and religious artwork.",
    tags: ["React", "CSS", "Responsive"],
    imageUrl: `${process.env.PUBLIC_URL}/images/church-image.jpg`,
    ProjectUrl: "https://alessandraparisi.it",
    detailsSlug: "alessandra-parisi",
  },
  {
    id: "project-html",
    title: "Pierre4Ad",
    description:
      "Responsive web pages built with HTML, CSS, and JavaScript as part of a freelance project — focused on user-friendly design and clean functionality.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: `${process.env.PUBLIC_URL}/images/pierre4ad-logo.jpg`,
    ProjectUrl: "https://pierre4ad.com/",
    detailsSlug: "pierre4ad",
  },
  {
    id: "project-flutter-scanner",
    title: "Passports & IDs Scanner",
    description:
      "Integrated a Flutter SDK to scan travel documents using MRZ decoding and pdf417 barcode reading, with real-time validity checks.",
    tags: ["Flutter", "MRZ Decoding", "PDF417"],
    imageUrl: `${process.env.PUBLIC_URL}/images/passport-image.jpg`,
    ProjectUrl: "https://gitlab.com/fatora1/Scanner-Flutter-App",
    detailsSlug: "scanner",
  },
  {
    id: "project-threejs",
    title: "3D Boat Simulation",
    description:
      "3D boat simulation using Three.js, handling physics and 3D modeling independently. Demonstrates advanced interactive 3D graphics skills.",
    tags: ["Three.js", "JavaScript", "WebGL"],
    imageUrl: `${process.env.PUBLIC_URL}/images/three.png`,
    ProjectUrl: "https://github.com/Nicholass206/Boat-3js",
    detailsSlug: "threejs-boat",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="projects-container">
      <h5>My Projects</h5>

      <div className="projects-layout">
        <div className="projects-list">
          {projects.map((project, i) => (
            <div
              key={project.id}
              id={project.id}
              className={`project-item ${activeIndex === i ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <span className="project-num">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="project-item-body">
                <h3 className="project-item-title">{project.title}</h3>
                <p className="project-item-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-item-actions">
                  {project.detailsSlug && (
                    <Link
                      className="proj-btn proj-btn--primary"
                      to={`/projects/${project.detailsSlug}`}
                    >
                      Details
                    </Link>
                  )}
                  {project.ProjectUrl && (
                    <a
                      className="proj-btn proj-btn--ghost"
                      href={project.ProjectUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-preview">
          <div className="preview-frame">
            {projects.map((project, i) => (
              <img
                key={project.id}
                src={project.imageUrl}
                alt={project.title}
                className={`preview-img ${activeIndex === i ? "active" : ""}`}
              />
            ))}
            <div className="preview-label">
              {projects[activeIndex].title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
