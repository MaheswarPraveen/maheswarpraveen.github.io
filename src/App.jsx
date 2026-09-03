import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import BlackHoleCanvas from './components/BlackHoleCanvas';
import { personalInfo, projects, technicalSkills } from './data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ------------------------------------------------------------------------
    // SETUP SPLITTYPE ON EACH CARD
    // ------------------------------------------------------------------------
    const cards = Array.from(container.querySelectorAll('.card'));
    const splits = [];

    cards.forEach((card, cIdx) => {
      const isHero = cIdx === 0;
      const isStack = cIdx === cards.length - 1;

      let selectors = '.section-title, .tag, .project-index, .section-desc';
      if (isHero) selectors = '.name-line, .hero-subtitle, .clean-link';
      else if (isStack) selectors = '.section-title, .project-index, .stack-label, .stack-val';

      const split = new SplitType(card.querySelectorAll(selectors), { types: 'chars' });
      splits.push(split);

      const chars = Array.from(card.querySelectorAll('.char'));
      const boxes = Array.from(card.querySelectorAll('.tag, .section-title, .clean-link, .stack-col'));
      const totalChars = chars.length;

      chars.forEach((c) => {
        c.dataset.orig = c.textContent;
        c._state = 0; // 0: orig, 1: scramble, 2: locked_zero, 3: swallowed
      });

      let charOffsets = [];
      function measureCharPositions() {
        charOffsets = chars.map((c) => {
          const rect = c.getBoundingClientRect();
          return { x: rect.left, y: rect.top };
        });
      }

      measureCharPositions();

      // ----------------------------------------------------------------------
      // PINNED SLIDE SCROLLTRIGGER: Generous Dwell -> Binary -> 3D Swallow
      // ----------------------------------------------------------------------
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: "+=75%", // Comfortable 75vh dwell and transition runway
        pin: true,
        pinSpacing: true,
        scrub: 1.0,
        onEnter: () => measureCharPositions(),
        onEnterBack: () => measureCharPositions(),
        onUpdate: (self) => {
          const p = self.progress;

          // 1. GENEROUS READING DWELL TIME (0.0 to 0.35): Solid, centered, fully readable!
          if (p <= 0.35) {
            chars.forEach((c) => {
              if (c._state !== 0) {
                c.textContent = c.dataset.orig;
                c.style.color = '';
                c.style.opacity = '1';
                c.style.transform = '';
                c.style.textShadow = '';
                c._state = 0;
              }
            });
            card.style.opacity = '1';
            boxes.forEach((b) => {
              b.style.opacity = '1';
              b.style.borderColor = '';
            });
            return;
          }

          if (charOffsets.length !== totalChars) measureCharPositions();

          const bhScreen = window.__getBHScreenCoord
            ? window.__getBHScreenCoord()
            : { x: window.innerWidth * 0.72, y: window.innerHeight * 0.5 };

          // 2. BINARY SCRAMBLE & 3D SWALLOW (0.35 to 1.00)
          const animT = (p - 0.35) / 0.65; // 0.0 to 1.0

          for (let idx = 0; idx < totalChars; idx++) {
            const c = chars[idx];
            const charStart = (idx / totalChars) * 0.28;
            const scrambleDur = 0.18;
            const holdZeroDur = 0.15;

            if (animT < charStart) {
              if (c._state !== 0) {
                c.textContent = c.dataset.orig;
                c.style.color = '';
                c.style.opacity = '1';
                c.style.transform = '';
                c.style.textShadow = '';
                c._state = 0;
              }
              continue;
            }

            const localProgress = animT - charStart;

            // Phase A: Scrambling into glowing 0s and 1s
            if (localProgress < scrambleDur) {
              if (c._state !== 1) {
                c.textContent = Math.random() > 0.5 ? '1' : '0';
                c.style.color = '#ffb030';
                c.style.textShadow = '0 0 8px rgba(255, 176, 48, 0.6)';
                c.style.opacity = '1';
                c.style.transform = '';
                c._state = 1;
              }
            }
            // Phase B: Locks into solid glowing golden '0'
            else if (localProgress < scrambleDur + holdZeroDur) {
              if (c._state !== 2) {
                c.textContent = '0';
                c.style.color = '#ffa020';
                c.style.textShadow = '0 0 10px rgba(255, 160, 32, 0.7)';
                c.style.opacity = '1';
                c.style.transform = '';
                c._state = 2;
              }
            }
            // Phase C: 3D Orbital Plunge into Black Hole
            else {
              if (c._state !== 3) {
                c.textContent = '0';
                c._state = 3;
              }

              const swallowT = Math.min(1.0, (localProgress - scrambleDur - holdZeroDur) / 0.32);
              const accel = Math.pow(swallowT, 2.2);

              const origin = charOffsets[idx] || { x: window.innerWidth * 0.25, y: window.innerHeight * 0.5 };
              const dx = bhScreen.x - origin.x;
              const dy = bhScreen.y - origin.y;

              const swirlAngle = idx * 0.12 + accel * 3.5;
              const swirlX = Math.sin(swirlAngle) * 25 * (1 - accel);
              const swirlY = Math.cos(swirlAngle) * 18 * (1 - accel);

              const curX = dx * accel + swirlX;
              const curY = dy * accel + swirlY;
              const curZ = -accel * 550;

              const scaleX = 1.0 + accel * 0.4;
              const scaleY = Math.max(0.1, 1.0 - accel * 0.8);
              const rotX = accel * 55;
              const rotZ = -accel * 18;
              const remainingOpacity = Math.max(0, 1.0 - Math.pow(swallowT, 2.5));

              c.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, ${curZ.toFixed(0)}px) rotateX(${rotX.toFixed(0)}deg) rotateZ(${rotZ.toFixed(0)}deg) scale(${scaleX.toFixed(2)}, ${scaleY.toFixed(2)})`;
              c.style.color = accel < 0.5 ? '#ff9010' : '#dd3000';
              c.style.textShadow = `0 0 ${Math.max(2, 12 * (1 - accel)).toFixed(1)}px rgba(255, 120, 20, 0.8)`;
              c.style.opacity = remainingOpacity.toFixed(2);
            }
          }

          // Container & tags dissolve smoothly
          const boxProgress = Math.max(0, (animT - 0.40) / 0.55);
          const boxFade = Math.max(0, 1.0 - boxProgress * 1.3);
          card.style.opacity = boxFade.toFixed(2);
          boxes.forEach((b) => {
            b.style.opacity = boxFade.toFixed(2);
          });
        },
        onLeave: () => {
          chars.forEach((c) => { c.textContent = '0'; c.style.opacity = '0'; c._state = 3; });
          card.style.opacity = '0';
        },
        onLeaveBack: () => {
          chars.forEach((c) => {
            c.textContent = c.dataset.orig;
            c.style.color = '';
            c.style.opacity = '1';
            c.style.transform = '';
            c.style.textShadow = '';
            c._state = 0;
          });
          card.style.opacity = '1';
          boxes.forEach((b) => {
            b.style.borderColor = '';
            b.style.opacity = '1';
          });
        }
      });
    });

    // ------------------------------------------------------------------------
    // TERMINAL WHITEOUT FLASH AT THE VERY END
    // ------------------------------------------------------------------------
    const endTrigger = ScrollTrigger.create({
      trigger: '.scroll-end-trigger',
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1.0,
      onUpdate: (self) => {
        const overlay = document.getElementById('flash-overlay');
        if (!overlay) return;
        if (self.progress < 0.5) {
          overlay.style.backgroundColor = '#ffffff';
          overlay.style.opacity = (self.progress / 0.5).toFixed(2);
        } else {
          overlay.style.backgroundColor = '#000000';
          overlay.style.opacity = ((self.progress - 0.5) / 0.5).toFixed(2);
        }
      }
    });

    return () => {
      splits.forEach((s) => s.revert());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Terminal Swallow Whiteout Flash Overlay */}
      <div id="flash-overlay" />

      {/* 60+ FPS Three.js WebGL Black Hole Canvas */}
      <BlackHoleCanvas />

      {/* UI Container with 100vh Pinned Slides */}
      <main id="ui-container" ref={containerRef}>
        {/* Slide 0: Hero */}
        <header className="card hero-card">
          <h1 className="name-title">
            <span className="name-line">{personalInfo.firstName}</span>
            <span className="name-line">{personalInfo.lastName}</span>
          </h1>
          <p className="hero-subtitle">{personalInfo.title}</p>
          <div className="hero-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="clean-link">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="clean-link">LinkedIn</a>
          </div>
        </header>

        {/* Slides 1-7: Project Dossiers */}
        {projects.map((proj) => (
          <section className="card content-card" key={proj.id}>
            <span className="project-index">{proj.id} // {proj.category}</span>
            <h2 className="section-title">{proj.title}</h2>
            <p className="section-desc">{proj.description}</p>
            <div className="tag-cloud">
              {proj.tags.map((tag, tIdx) => (
                <span className="tag" key={tIdx}>{tag}</span>
              ))}
            </div>
          </section>
        ))}

        {/* Slide 8: Technical Capabilities */}
        <section className="card content-card">
          <span className="project-index">07 // STACK</span>
          <h2 className="section-title">Technical Capabilities</h2>
          <div className="stack-grid">
            {technicalSkills.map((skill, sIdx) => (
              <div className="stack-col" key={sIdx}>
                <span className="stack-label">{skill.label}</span>
                <span className="stack-val">{skill.value}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Terminal Runway */}
      <div className="scroll-end-trigger" />
    </>
  );
}
