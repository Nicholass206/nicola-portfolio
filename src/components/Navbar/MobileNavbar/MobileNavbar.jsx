import React from 'react'
import './MobileNavbar.css'

const MobileNavbar = ({isOpen, toggleMenu}) => {
  return( <>
        <div 
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
                <img src={`${process.env.PUBLIC_URL}/images/menu_20dp.svg`} alt="" className="logo" />
                <ul>
                    <li>
                        <a href="#home" className="menu-item">Home</a>
                    </li>
                    <li>
                        <a href="#skills" className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="menu-item">Projects</a>
                    </li>
                    <li>
                        <a href="#contact-me" className="menu-item">Contact Me</a>
                    </li>
                </ul>
                
                <button className="contact-btn" onClick={()=>{}}>
                        Hire Me
                    </button>
            </div>
        </div>
    
    
    </>
  )  
}
  
export default MobileNavbar