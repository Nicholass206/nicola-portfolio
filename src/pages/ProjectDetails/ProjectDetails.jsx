import React from 'react';
import './ProjectDetails.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { findProjectBySlug } from '../../utils/projects';
import Carousel from '../../components/Carousel/Carousel';

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = findProjectBySlug(slug);
  const isMobileScreenshots = project && project.slug === 'zamil';

  if (!project) {
    return (
      <div className="pd-page">
        <div className="pd-not-found">
          <h2>Project not found</h2>
          <Link className="pd-btn-ghost" to="/">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pd-page">

      {/* ── Back ── */}
      <button className="pd-back" onClick={() => navigate('/')}>
        ← Projects
      </button>

      {/* ── Header ── */}
      <div className="pd-header">
        <div className="pd-header-left">
          <span className="pd-label">Project</span>
          <h1 className="pd-title">{project.title}</h1>
          <p className="pd-summary">{project.summary}</p>
          <div className="pd-chips">
            {project.technologies.map((t) => (
              <span key={t} className="pd-chip">{t}</span>
            ))}
          </div>
        </div>

        <div className="pd-header-right">
          <div className="pd-meta-row">
            <span className="pd-meta-label">Role</span>
            <span className="pd-meta-value">{project.role}</span>
          </div>
          <div className="pd-links">
            {project.liveUrl && (
              <a className="pd-btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                Live ↗
              </a>
            )}
            {project.repoUrl && project.repoUrl !== project.liveUrl && (
              <a className="pd-btn-ghost" href={project.repoUrl} target="_blank" rel="noreferrer">
                Repository ↗
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="pd-divider" />

      {/* ── Carousel ── */}
      <div className="pd-carousel-wrap">
        <Carousel
          images={project.screenshots && project.screenshots.length ? project.screenshots : [project.cover]}
          alt={`${project.title} screenshots`}
          mobile={isMobileScreenshots}
        />
      </div>

      {/* ── Description ── */}
      <div className="pd-body">
        <h3 className="pd-body-title">About the project</h3>
        <p className="pd-description">{project.description}</p>
      </div>

    </div>
  );
};

export default ProjectDetails;
