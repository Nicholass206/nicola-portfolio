import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

const roles = [
  "Frontend Developer",
  "Flutter Developer",
  "Full-Stack Engineer",
  "UI / UX Enthusiast",
];

const SECRET_CLICKS_NEEDED = 5;

const Hero = () => {
  const [displayedRole, setDisplayedRole] = useState(roles[0]);
  const [phase, setPhase] = useState("idle");
  const [secretCount, setSecretCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const secretResetRef = useRef(null);
  const secretHideRef = useRef(null);

  const handleCoreClick = () => {
    clearTimeout(secretResetRef.current);
    setSecretCount((prev) => {
      const next = prev + 1;
      if (next >= SECRET_CLICKS_NEEDED) {
        setShowSecret(true);
        clearTimeout(secretHideRef.current);
        secretHideRef.current = setTimeout(() => setShowSecret(false), 7000);
        return 0;
      }
      return next;
    });
    secretResetRef.current = setTimeout(() => setSecretCount(0), 1200);
  };

  useEffect(() => {
    return () => {
      clearTimeout(secretResetRef.current);
      clearTimeout(secretHideRef.current);
    };
  }, []);

  // const downloadResume = () => {
  //   try {
  //     const link = document.createElement("a");
  //     link.href =
  //       "https://nicholass206.github.io/nicola-portfolio/images/Nicola-Fadoul-Resume.pdf";
  //     link.download = "Nicola-Fadoul-Resume.pdf";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch {
  //     window.open(
  //       "https://nicholass206.github.io/nicola-portfolio/images/Nicola-Fadoul-Resume.pdf",
  //       "_blank"
  //     );
  //   }
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("exit");

      const swap = setTimeout(() => {
        setDisplayedRole((prev) => {
          const idx = roles.indexOf(prev);
          return roles[(idx + 1) % roles.length];
        });
        setPhase("enter");

        const reset = setTimeout(() => setPhase("idle"), 420);
        return () => clearTimeout(reset);
      }, 360);

      return () => clearTimeout(swap);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-container">
      <div className="hero-inner">

        <div className="hero-text">
          <h1 className="hero-name">
            <span className="name-first">Nicola</span>
            <span className="name-last">Fadoul</span>
          </h1>

          <div className="hero-divider" />

          <div className="hero-role-track">
            <span
              className={`hero-role phase-${phase}`}
              key={displayedRole}
            >
              {displayedRole}
            </span>
          </div>

          <p className="hero-tagline">
            Driven by clean code, thoughtful UI, and continuous learning.
          </p>

          <div className="hero-ctas">
            <a
              href="#projects"
              className="hero-btn hero-btn--primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit-scene">
            <button
              type="button"
              className="orbit-core"
              onClick={handleCoreClick}
              tabIndex={-1}
              aria-hidden="true"
            />

            <div className="orbit-tilt orbit-tilt-1" aria-hidden="true">
              <div className="orbit-ring orbit-ring-1">
                <div className="orbit-dot" />
              </div>
            </div>

            <div className="orbit-tilt orbit-tilt-2" aria-hidden="true">
              <div className="orbit-ring orbit-ring-2">
                <div className="orbit-dot" />
              </div>
            </div>

            <div className="orbit-tilt orbit-tilt-3" aria-hidden="true">
              <div className="orbit-ring orbit-ring-3">
                <div className="orbit-dot" />
              </div>
            </div>

            {showSecret && (
              <div className="secret-card" role="status">
                <div className="secret-stripe" aria-hidden="true" />
                <button
                  type="button"
                  className="secret-close"
                  onClick={() => setShowSecret(false)}
                  aria-label="Close"
                >
                  ×
                </button>
                <p className="secret-title">A little secret 👀</p>

                <div className="secret-row">
                  <div className="secret-flags" aria-hidden="true">
                    <span>🇱🇧</span>
                    <span>🇬🇧</span>
                    <span>🇮🇹</span>
                  </div>
                  <p className="secret-sub">Arabic · English · Italian</p>
                </div>

                <div className="secret-row">
                  <span className="club-badge" aria-hidden="true" />
                  <p className="secret-sub">Atlético Madrid fan</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
