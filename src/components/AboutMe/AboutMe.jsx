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
              When I'm not coding, I enjoy exploring new technologies. I'm always excited to take on new challenges and
              collaborate with like-minded individuals.
            </p>
          </div>

          <div className="typeracer-section">
            <h4>Typing Skills</h4>
            <div className="typeracer-badge">
              <a
                href="https://data.typeracer.com/pit/profile?user=nicholas206&ref=badge"
                target="_blank"
                rel="noopener noreferrer"
                className="typeracer-link"
              >
                <img
                  src="https://data.typeracer.com/misc/badge?user=nicholas206"
                  alt="TypeRacer.com scorecard for user nicholas206"
                  className="typeracer-img"
                />
              </a>
              <p className="typeracer-description">
                I enjoy improving my typing speed and accuracy through TypeRacer challenges.
              </p>
            </div>
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
              "Music",
              "Geography & Football",
              "Learning New Languages"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
