import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';

const ContactMe = () => {
  return (
    <section id="contact-me" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div className="contact-info-card">
          <ContactInfoCard
            iconUrl={`${process.env.PUBLIC_URL}/images/gmail.png`}
            text="Send me an Email!"
            Url="mailto:nicolafadoul@gmail.com"
          />
        </div>
        <div className="contact-info-card">
          <ContactInfoCard
            iconUrl={`${process.env.PUBLIC_URL}/images/linkedin.png`}
            text="Check out my profile!"
            Url="https://www.linkedin.com/in/nicola-fadoul/"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
