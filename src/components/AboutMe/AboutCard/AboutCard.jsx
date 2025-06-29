import React from 'react';
import './AboutCard.css';

const AboutCard = ({ icon, title, items }) => {
  return (
    <div className="about-card">
      <div className="about-card-header">
        <span className="about-card-icon">{icon}</span>
        <h4 className="about-card-title">{title}</h4>
      </div>
      <div className="about-card-content">
        <ul className="about-card-list">
          {items.map((item, index) => (
            <li key={index} className="about-card-item">
              <span className="bullet">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;
