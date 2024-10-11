import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero-container">
        <div className="hero-content">
            <h2>Building Websites & Web Applications</h2>
            <p>Junior Front-End Developer | Hunger Learner | Passionate </p>
        </div>
     <div className="hero-img">
        <div>
            
            <div className="tech-icon">
                <img src={`${process.env.PUBLIC_URL}/images/react1.png`} alt="" />
            </div>
            
                <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="" />
            </div>
            
              <div>
              <div className="tech-icon">
                <img src={`${process.env.PUBLIC_URL}/images/html2.png`} alt="" />
              </div>
              <div className="tech-icon">
                <img src={`${process.env.PUBLIC_URL}/images/css-icon.png`} alt=""/>
              </div>
              <div className="tech-icon">
                <img src={`${process.env.PUBLIC_URL}/images/js.png`} alt="" />
              </div>
              <div className="tech-icon">
                <img src={`${process.env.PUBLIC_URL}/images/laravel.png`} alt="" />
            </div>
            </div>
        
      </div>   
    </section>
  )
}

export default Hero