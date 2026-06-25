import React, { useEffect, useRef, useState } from "react";
import "./AboutMe.css";

const StatCard = ({ value, suffix = "", label, className }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let current = 0;
        const step = value / (1200 / 16);
        const timer = setInterval(() => {
          current = Math.min(current + step, value);
          setCount(Math.floor(current));
          if (current >= value) clearInterval(timer);
        }, 16);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className={`bento-card bento-stat ${className}`} ref={ref}>
      <span className="stat-number">
        {count}
        {suffix && <span className="stat-suffix">{suffix}</span>}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const AboutMe = () => (
  <section id="about-me" className="about-container">
    <h5>About Me</h5>

    <div className="bento-grid">

      {/* ── Bio ── */}
      <div className="bento-card bento-bio">
        <p className="bento-overline">Who I am</p>
        <h3 className="bento-bio-heading">
          I build things for the{" "}
          <span className="gold-text">web</span> and{" "}
          <span className="gold-text">mobile</span>.
        </h3>
        <p className="bento-bio-text">
          Passionate junior developer with a strong foundation in both
          front-end and back-end technologies. My journey began with curiosity
          and has grown into a deep love for crafting polished, user-focused
          products.
        </p>
        <p className="bento-bio-text">
          I thrive in collaborative environments and believe in continuous
          learning — always pushing to write cleaner code and deliver better
          experiences.
        </p>
        <div className="avail-badge">
          <span className="avail-dot" />
          Open to Opportunities
        </div>
      </div>

      {/* ── Stats ── */}
      <StatCard value={7}  suffix=""  label="Projects Completed" className="bento-stat-a" />
      <StatCard value={5}  suffix="+" label="Tech Frameworks"    className="bento-stat-b" />

      {/* ── Approach ── */}
      <div className="bento-card bento-approach">
        <p className="bento-card-label">
          <span className="label-icon">🎯</span> Approach
        </p>
        <ul className="bento-list">
          {["Agile & Collaborative", "Detail-Oriented", "Problem-Solving", "Clean Code First"].map(
            (item) => (
              <li key={item}>
                <span className="bento-bullet">▸</span>
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      {/* ── Soft Skills ── */}
      <div className="bento-card bento-soft">
        <p className="bento-card-label">
          <span className="label-icon">💡</span> Soft Skills
        </p>
        <ul className="bento-list">
          {["Communication", "Team Collaboration", "Adaptability", "Critical Thinking"].map(
            (item) => (
              <li key={item}>
                <span className="bento-bullet">▸</span>
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      {/* ── Interests ── */}
      <div className="bento-card bento-interests">
        <p className="bento-card-label">
          <span className="label-icon">✦</span> Interests
        </p>
        <div className="interest-chips">
          {[
            ["🎵", "Music"],
            ["⚽", "Football"],
            ["🌍", "Geography"],
            ["📚", "Languages"],
          ].map(([icon, name]) => (
            <span key={name} className="interest-chip">
              {icon} {name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Currently ── */}
      <div className="bento-card bento-current">
        <p className="bento-card-label">
          <span className="label-icon">🔭</span> Currently
        </p>
        <p className="bento-current-text">
          Exploring Next.js, AI-powered tooling, and refining full-stack
          architecture patterns.
        </p>
      </div>

    </div>
  </section>
);

export default AboutMe;
