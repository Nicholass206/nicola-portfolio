import React from 'react';
import './AboutMe.css';
import AboutCard from './AboutCard/AboutCard';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-container">
      <h5>About Me</h5>
      <div className="about-content">
        <div className="about-description">
          <div className="about-text">
            <p>
              I'm a passionate junior developer with a strong foundation in both front-end and back-end technologies. 
              My journey into programming began with curiosity and has evolved into a deep love for creating innovative 
              solutions that make a difference.
            </p>
            <p>
              I believe in continuous learning and staying up-to-date with the latest technologies. My approach to 
              development is methodical yet creative, always focusing on writing clean, efficient code while 
              maintaining excellent user experience.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and 
              sharing knowledge with the developer community. I'm always excited to take on new challenges and 
              collaborate with like-minded individuals.
            </p>
          </div>
        </div>

        <div className="about-cards">
          <AboutCard
            icon="🎯"
            title="Working Style"
            items={[
              "Agile & Collaborative",
              "Detail-Oriented",
              "Problem-Solving Focused",
              "Continuous Learning",
              "User-Centric Approach"
            ]}
          />
          
          <AboutCard
            icon="💡"
            title="Soft Skills"
            items={[
              "Effective Communication",
              "Team Collaboration",
              "Time Management",
              "Adaptability",
              "Critical Thinking"
            ]}
          />
          
          <AboutCard
            icon="🎨"
            title="Hobbies & Interests"
            items={[
              "Open Source Contributing",
              "Tech Blogging",
              "Music",
              "Gaming",
              "Learning New Languages"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
