import React from 'react'
import './MobileNavbar.css'

const MobileNavbar = ({isOpen, toggleMenu}) => {
  return( <>
        <div 
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
                <img src=".images/menu.svg" alt="" className="logo" />
                <ul>
                    <li>
                        <a href="#" className="menu-item">Home</a>
                    </li>
                    <li>
                        <a href="#" className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a href="#" className="menu-item">Work Experience</a>
                    </li>
                    <li>
                        <a href="#" className="menu-item">About</a>
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