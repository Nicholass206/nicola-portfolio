import React, { useState } from "react";
import "./Navbar.css";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const downloadButton = async () => {
    const pdfUrl = "/images/Nicolas-Fadoul-Resume.pdf";
    
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', 'Nicolas-Fadoul-Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file", error);
    }
  };
  

  return (
    <>
      <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <ul>
            <li>
              <a href="#home" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="menu-item">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact-me" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={downloadButton} >
              Resume
            </button>
          </ul>
          <button className="menu-btn" onClick={() => {}}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              menu
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
