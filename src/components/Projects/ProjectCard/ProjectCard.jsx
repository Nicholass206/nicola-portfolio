import React from 'react';
import './ProjectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ imageUrl, title, description, reverse, ProjectUrl, detailsSlug }) => {
  return (
    <div className={`project-card ${reverse ? 'reverse' : ''}`}>
      <div className="project-square">
       <a href={ProjectUrl} target='blank'> <img src={imageUrl} alt={title} className="project-image"/></a>
        <h6 className="project-title">{title}</h6>
      </div>
      <p className="project-description">{description}</p>
      {detailsSlug && (
        <div className="project-actions">
          <Link className="details-btn" to={`/projects/${detailsSlug}`}>Details</Link>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
