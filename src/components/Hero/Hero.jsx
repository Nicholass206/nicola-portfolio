import React, { useState, useEffect } from "react";
import "./Hero.css";
import Lottie from "lottie-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [startTyping, setStartTyping] = useState(false);

  const scrollToProject = (projectId) => {
    const element = document.getElementById(projectId);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    element.classList.add("project-highlight");
    setTimeout(() => {
      element.classList.remove("project-highlight");
    }, 1600);
  };

  const fullText =
    "Junior Developer | Enthusiastic Learner | Driven by Innovation";

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setStartTyping(true);
    }, 1500);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (startTyping && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, startTyping]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h2>Hi, I'm Nicola Fadoul</h2>
        <p className="typewriter-text">
          {displayText}
          <span className={`cursor ${showCursor ? "visible" : "hidden"}`}>
            |
          </span>
        </p>
      </div>

      <div className="hero-img">
        <div className="profile-container">
          {/* <img
            src={`${process.env.PUBLIC_URL}/images/profile-picture.png`}
            alt="Profile"
            className="profile-pic"
          /> */}
          <Lottie
            path={`${process.env.PUBLIC_URL}/animations/webDevelopment.json`}
            loop
            autoplay
            style={{ width: 450, height: 450 }}
          />

          <div className="tech-icons">
            <div className="tech-icon tech-icon-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/react1.png`}
                alt="React"
                role="button"
                onClick={() => scrollToProject("project-react")}
              />
            </div>
            <div className="tech-icon tech-icon-2">
              <img
                src={`${process.env.PUBLIC_URL}/images/flutter-icon.webp`}
                alt="Flutter"
                role="button"
                onClick={() => scrollToProject("project-flutter")}
              />
            </div>
            <div className="tech-icon tech-icon-3">
              <img
                src={`${process.env.PUBLIC_URL}/images/html2.png`}
                alt="HTML"
                role="button"
                onClick={() => scrollToProject("project-html")}
              />
            </div>
            <div className="tech-icon tech-icon-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/css-icon.png`}
                alt="CSS"
                role="button"
                onClick={() => scrollToProject("project-wordpress")}
              />
            </div>
            <div className="tech-icon tech-icon-5">
              <img
                src={`${process.env.PUBLIC_URL}/images/js.png`}
                alt="JavaScript"
                role="button"
                onClick={() => scrollToProject("project-threejs")}
              />
            </div>
            <div className="tech-icon tech-icon-6">
              <img
                src={`${process.env.PUBLIC_URL}/images/netframework.jpg`}
                alt="ASP.NET"
                role="button"
                onClick={() => scrollToProject("project-flutter")}
              />
            </div>
            <div className="tech-icon tech-icon-7">
              <img
                src={`${process.env.PUBLIC_URL}/images/wordpress-logo.png`}
                alt="WordPress"
                role="button"
                onClick={() => scrollToProject("project-wordpress")}
              />
            </div>
            <div className="tech-icon tech-icon-8">
              <img
                src={`${process.env.PUBLIC_URL}/images/next-js.png`}
                alt="Next.js"
                role="button"
                onClick={() => scrollToProject("project-wordpress")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
