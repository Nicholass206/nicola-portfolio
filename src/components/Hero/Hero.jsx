import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Building Websites & Web Applications</h2>
            <p>Junior Front-End Developer | Hunger Learner | Passionate </p>
        </div>
     <div className="hero-img">
        <div>
            
            <div className="tech-icon">
                <img src="./images/react1.png" alt="" />
            </div>
            
                <img src="./images/profile.jpg" alt="" />
            </div>
            
              <div>
              <div className="tech-icon">
                <img src="./images/html2.png" alt="" />
              </div>
              <div className="tech-icon">
                <img src="./images/css-icon.png" alt=""/>
              </div>
              <div className="tech-icon">
                <img src="./images/js.png" alt="" />
              </div>
              <div className="tech-icon">
                <img src="./images/laravel.png" alt="" />
            </div>
            </div>
        
      </div>   
    </section>
  )
}

export default Hero