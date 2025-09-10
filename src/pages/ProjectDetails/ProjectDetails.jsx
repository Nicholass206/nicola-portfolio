import React from 'react';
import './ProjectDetails.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { findProjectBySlug } from '../../utils/projects';
import Carousel from '../../components/Carousel/Carousel';

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = findProjectBySlug(slug);

  if (!project) {
    return (
      <div className="project-details-container">
        <div className="project-details-card">
          <h2>Project not found</h2>
          <Link className="back-link" to="/">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details-container">
      <button className="back-arrow" onClick={() => navigate('/')}>← Back</button>
      <div className="project-details-card">
        <div className="project-grid">
          <div className="project-left">
            <Carousel images={project.screenshots && project.screenshots.length ? project.screenshots : [project.cover]} alt={`${project.title} screenshots`} />
            <div className="project-links">
              {project.liveUrl && (
                <a className="primary-btn" href={project.liveUrl} target="_blank" rel="noreferrer">Live / Repo</a>
              )}
              {project.repoUrl && project.repoUrl !== project.liveUrl && (
                <a className="secondary-btn" href={project.repoUrl} target="_blank" rel="noreferrer">Repository</a>
              )}
            </div>
          </div>
          <div className="project-right">
            <h1 className="project-heading">{project.title}</h1>
            <p className="project-summary">{project.summary}</p>
            <div className="project-meta">
              <div className="meta-card">
                <h4>My Role</h4>
                <p>{project.role}</p>
              </div>
              <div className="meta-card">
                <h4>Technologies</h4>
                <div className="tech-chips">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;


