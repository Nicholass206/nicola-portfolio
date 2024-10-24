import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ imageUrl, title, description, reverse,ProjectUrl }) => {
  return (
    <div className={`project-card ${reverse ? 'reverse' : ''}`}>
      <div className="project-square">
       <a href={ProjectUrl} target='blank'> <img src={imageUrl} alt={title} className="project-image" /></a>
        <h6 className="project-title">{title}</h6>
      </div>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
