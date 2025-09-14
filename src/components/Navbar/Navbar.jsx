import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
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

  useEffect(() => {
    const sections = [
      { id: "home", element: document.getElementById("home") },
      { id: "about-me", element: document.getElementById("about-me") },
      { id: "skills", element: document.getElementById("skills") },
      { id: "projects", element: document.getElementById("projects") },
      { id: "contact-me", element: document.getElementById("contact-me") },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (activeLink !== sectionId) {
            setActiveLink(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      if (section.element) {
        observer.observe(section.element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeLink]);

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
                  className={`menu-item ${
                    activeLink === "home" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink("home");
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-me"
                  className={`menu-item ${
                    activeLink === "about-me" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink("about-me");
                    document
                      .getElementById("about-me")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`menu-item ${
                    activeLink === "skills" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink("skills");
                    document
                      .getElementById("skills")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`menu-item ${
                    activeLink === "projects" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink("projects");
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact-me"
                  className={`menu-item ${
                    activeLink === "contact-me" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink("contact-me");
                    document
                      .getElementById("contact-me")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
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
            <button
              className="menu-btn"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "1.8rem" }}
              >
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
