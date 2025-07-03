import React, { useState } from "react";
import "./Navbar.css";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Navbar = ({toggleTheme, isDarkMode}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const downloadButton = () => {
    try {

      const link = document.createElement("a");
      link.href = "https://nicholass206.github.io/nicola-portfolio/images/Nicola-Fadoul-Resume.pdf";
      link.download = "Nicola-Fadoul-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
      window.open("https://nicholass206.github.io/nicola-portfolio/images/Nicola-Fadoul-Resume.pdf", "_blank");
    }
  };

  return (
    <>
      <MobileNavbar
        isOpen={openMenu}
        toggleMenu={toggleMenu}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
          <div className="nav-right">
            <ul>
            <li>
              <a
                href="#home"
                className={`menu-item ${activeLink === "home" ? "active" : ""}`}
                onClick={() => setActiveLink("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className={`menu-item ${activeLink === "about-me" ? "active" : ""}`}
                onClick={() => setActiveLink("about-me")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`menu-item ${activeLink === "skills" ? "active" : ""}`}
                onClick={() => setActiveLink("skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`menu-item ${activeLink === "projects" ? "active" : ""}`}
                onClick={() => setActiveLink("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact-me"
                className={`menu-item ${activeLink === "contact-me" ? "active" : ""}`}
                onClick={() => setActiveLink("contact-me")}
              >
                Contact Me
              </a>
            </li>
            <li>
              <button className="contact-btn" onClick={downloadButton}>
                Resume
              </button>
            </li>
            </ul>
            <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
              <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
                menu
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;