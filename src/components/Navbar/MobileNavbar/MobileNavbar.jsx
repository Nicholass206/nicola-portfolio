import React from "react";
import { Link } from "react-scroll";
import "./MobileNavbar.css";

const MobileNavbar = ({ isOpen, toggleMenu, activeLink, setActiveLink }) => {
  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link
    toggleMenu(); // Close the mobile menu
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
        <button className="contact-btn" aria-label="Hire Me" onClick={() => {}}>
          Resume
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;