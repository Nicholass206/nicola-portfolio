import React from 'react';
import './Footer.css';
import {socialLinks} from '../../utils/data'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-header">
          <h3>Nicola Fadoul</h3>
          <span><i>"A winner is just a loser who tried one more time."</i></span>
        </div>

        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={social.name}
            >
              <div className="social-icon">
                {social.icon.startsWith('./') ? (
                  <img src={social.icon} alt={social.name} />
                ) : (
                  <span>{social.icon}</span>
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} Nicola Fadoul. All rights reserved.</p>
            <p>Built with React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
