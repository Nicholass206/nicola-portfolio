import React, { useEffect, useRef } from "react";
import "./WorkExperience.css";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Paymera E-Payment",
    duration: "Dec 2025 – Present",
    location: "Damascus",
    iconUrl: null,
    description:
      "Work across multiple financial systems built on .NET Core, Spring Boot, and Laravel, contributing to both backend services and frontend interfaces. Contribute to product decisions and feature delivery across 4,000+ active users. Use GitLab end-to-end for task management, code reviews, merge requests, and deployments.",
    tags: [".NET Core", "Spring Boot", "Laravel", "GitLab"],
  },
  {
    role: "Full Stack Developer",
    company: "Fatora E-Payment",
    duration: "Sep 2024 – Dec 2025",
    location: "Damascus",
    iconUrl: null,
    description:
      "Optimized core financial products — Fatora Panel and Fatora User App — improving reliability and performance for banking clients. Shipped new features end-to-end across a mixed stack and maintained clean, scalable architecture with consistent code quality standards.",
    tags: [".NET Core", "Spring Boot", "Angular", "Flutter", "SQL Server"],
  },
  {
    role: "Web Administrator",
    company: "Career.sy",
    duration: "Nov 2023 – May 2024",
    location: "Damascus",
    iconUrl: null,
    description:
      "Managed the platform dashboard and ensured smooth day-to-day functionality for job seekers and recruiters. Coordinated job posting workflows and organized applicant data pipelines to support the recruitment team.",
    tags: ["WordPress", "Dashboard", "Data Management"],
  },
];

const WorkExperience = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-container">
      <h5>Work Experience</h5>

      <div className="timeline">
        {experiences.map((exp, i) => {
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <div
              key={i}
              className={`timeline-item ${side}`}
              ref={(el) => (itemsRef.current[i] = el)}
            >
              <div className="timeline-card">
                <div className="timeline-card-top">
                  {/* Company icon */}
                  <div className="exp-icon">
                    {exp.iconUrl ? (
                      <img
                        src={exp.iconUrl}
                        alt={exp.company}
                        className="exp-icon-img"
                      />
                    ) : (
                      <span className="exp-icon-letter">
                        {exp.company.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="exp-title-group">
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>

                  <div className="exp-meta">
                    <span className="exp-duration">{exp.duration}</span>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                </div>

                <p className="exp-description">{exp.description}</p>

                <div className="exp-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="exp-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperience;
