import React from "react";
import { Link } from "react-scroll";
import "./MobileNavbar.css";

const MobileNavbar = ({ isOpen, toggleMenu, activeLink, setActiveLink }) => {
  const handleLinkClick = (link) => {
    setActiveLink(link); 
    toggleMenu(); 
  };
  
  const downloadButton = () => {
    try {
      const link = document.createElement("a");
      link.href =
        "https://nicholass206.github.io/nicola-portfolio/images/Nicola-Fadoul-Resume.pdf";
      link.download = "Nicola-Fadoul-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
      window.open(
        "https://nicholass206.github.io/nicola-portfolio/images/Nicola-Fadoul-Resume.pdf",
        "_blank"
      );
    }
  };

  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
        {/* <img
          src={`${process.env.PUBLIC_URL}/images/menu_20dp.svg`}
          alt=""
          className="logo"
        /> */}
        <ul>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={`menu-item ${activeLink === "home" ? "active" : ""}`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-me"
              smooth={true}
              duration={500}
              className={`menu-item ${activeLink === "about-me" ? "active" : ""}`}
              onClick={() => handleLinkClick("about-me")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className={`menu-item ${activeLink === "skills" ? "active" : ""}`}
              onClick={() => handleLinkClick("skills")}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={`menu-item ${activeLink === "projects" ? "active" : ""}`}
              onClick={() => handleLinkClick("projects")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact-me"
              smooth={true}
              duration={500}
              className={`menu-item ${activeLink === "contact-me" ? "active" : ""}`}
              onClick={() => handleLinkClick("contact-me")}
            >
              Contact Me
            </Link>
          </li>
        </ul>
        <button className="contact-btn" onClick={downloadButton}>
          Resume
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;