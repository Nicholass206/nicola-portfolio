import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'


const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard
                    iconUrl="./images/gmail.png"
                    text="nicolafadoul@gmail.com"
                />
                 <ContactInfoCard
                    iconUrl="./images/linkedin.png"
                    text="https://www.linkedin.com/in/nicola-fadoul/"
                />
            </div>
            <div style={{flex:1}}></div>
        </div>
    </section>
  )
}

export default ContactMe