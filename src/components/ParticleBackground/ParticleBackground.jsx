import React, { useRef, useEffect } from "react";
import "./ParticleBackground.css";

const ACCENT_RGB = "201, 168, 76";
const COUNT = 75;
const MAX_DIST = 130;
const SPEED = 0.3;

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Particles ──
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: Math.random() * 1.2 + 0.4,
    }));

    // ── Meteors ──
    const meteors = [];
    let nextMeteorAt = Date.now() + 1200;

    const spawnMeteor = () => {
      const angle = Math.PI / 6 + Math.random() * (Math.PI / 6); // 30–60° below horizontal
      const speed = 4 + Math.random() * 5;
      const length = 100 + Math.random() * 120;

      // Spawn from top edge (60%) or right edge (40%)
      let x, y;
      if (Math.random() < 0.6) {
        x = canvas.width * 0.15 + Math.random() * canvas.width * 0.85;
        y = -length;
      } else {
        x = canvas.width + length;
        y = Math.random() * canvas.height * 0.45;
      }

      const framesNeeded = Math.ceil((canvas.width * 0.9) / speed);
      meteors.push({ x, y, vx: -Math.cos(angle) * speed, vy: Math.sin(angle) * speed, speed, length, life: 0, maxLife: framesNeeded });
    };

    const drawMeteors = () => {
      const now = Date.now();
      if (now >= nextMeteorAt && meteors.length < 7) {
        spawnMeteor();
        nextMeteorAt = now + 600 + Math.random() * 1000;
      }

      ctx.save();
      ctx.lineCap = "round";

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life++;

        if (m.x < -m.length || m.y > canvas.height + m.length || m.life > m.maxLife) {
          meteors.splice(i, 1);
          continue;
        }

        // Fade out over the last 30% of lifetime
        const fadeStart = m.maxLife * 0.7;
        const opacity = m.life > fadeStart
          ? Math.max(0, 1 - (m.life - fadeStart) / (m.maxLife * 0.3))
          : 1;

        const nx = m.vx / m.speed;
        const ny = m.vy / m.speed;
        const tailX = m.x - nx * m.length;
        const tailY = m.y - ny * m.length;

        // Gradient tail — transparent at root, bright at head
        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0,   `rgba(255, 255, 255, 0)`);
        grad.addColorStop(0.4, `rgba(255, 242, 200, ${opacity * 0.08})`);
        grad.addColorStop(1,   `rgba(255, 245, 220, ${opacity * 0.88})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // Head glow
        const glow = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 5);
        glow.addColorStop(0, `rgba(255, 248, 220, ${opacity * 0.75})`);
        glow.addColorStop(1, `rgba(255, 248, 220, 0)`);
        ctx.beginPath();
        ctx.arc(m.x, m.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Bright head dot
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 250, 230, ${opacity})`;
        ctx.fill();
      }

      ctx.restore();
    };

    // ── Draw loop ──
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_RGB}, 0.55)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${ACCENT_RGB}, ${(1 - dist / MAX_DIST) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      drawMeteors();

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleBackground;
