import React, { useState } from 'react'
import './Navbar.css'
import MobileNavbar from './MobileNavbar/MobileNavbar'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  return (
    <>
        <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}/>
        <nav className="nav-wrapper">
            <div className="nav-content">
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
                    <button className="contact-btn" onClick={()=>{}}>
                        Hire Me
                    </button>
                   
                </ul>
                <button className="menu-btn" onClick={()=>{}}>
                    <span 
                    class={"material-symbols-outlined"}
                    style={{fontSize:"1.8rem"}}
                    >
                        menu
                    </span>
                </button>
            </div>
        </nav>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Navbar