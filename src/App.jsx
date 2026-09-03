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
        c._state = 0; // 0: original, 1: scramble, 2: locked zero, 3: flight
      });

      let offsets = [];
      function measureCharPositions() {
        offsets = chars.map((c) => {
          const rect = c.getBoundingClientRect();
          return { x: rect.left, y: rect.top };
        });
      }
      measureCharPositions();

      // ----------------------------------------------------------------------
      // BUTTERY SMOOTH SCRUBBED GSAP PINNING (1.2s Silky Damping, Generous Runway)
      // ----------------------------------------------------------------------
      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "center center", // Locks dead-center at 50vh middle-left
          end: "+=125%",          // Generous runway — NO RUSHING, NO FAST GLITCHES
          pin: true,
          pinSpacing: true,
          scrub: 1.2,             // Silky smooth GSAP physics damping
          onEnter: () => measureCharPositions(),
          onEnterBack: () => measureCharPositions(),
          onLeave: () => {
            card.style.opacity = '0';
          },
          onLeaveBack: () => {
            card.style.opacity = '1';
          }
        }
      });

      const animState = { progress: 0 };

      cardTl.to(animState, {
        progress: 1.0,
        ease: "none",
        onUpdate: () => {
          const p = animState.progress;
          const bhScreen = window.__getBHScreenCoord
            ? window.__getBHScreenCoord()
            : { x: window.innerWidth * 0.72, y: window.innerHeight * 0.5 };

          // Reading plateau (0.0 to 0.30): completely solid, readable English
          for (let idx = 0; idx < totalChars; idx++) {
            const c = chars[idx];
            // Cascade transformation starts from 0.30 to 0.70 (word by word)
            const charStart = 0.30 + (idx / totalChars) * 0.38;
            const scrambleDur = 0.12;
            const holdZeroDur = 0.04;

            if (p < charStart) {
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

            const localProgress = p - charStart;

            // Phase A: Gentle flicker into golden 0s and 1s
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
            // Phase B: Momentary golden '0'
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
            // Phase C: Smooth 3D curve into Black Hole singularity
            else {
              if (c._state !== 3) {
                c.textContent = '0';
                c._state = 3;
              }

              const flightT = Math.min(1.0, (localProgress - scrambleDur - holdZeroDur) / 0.20);
              const accel = Math.pow(flightT, 2.0);

              const origin = offsets[idx] || { x: window.innerWidth * 0.25, y: window.innerHeight * 0.5 };
              const dx = bhScreen.x - origin.x;
              const dy = bhScreen.y - origin.y;

              const swirlAngle = idx * 0.10 + accel * 3.2;
              const swirlX = Math.sin(swirlAngle) * 20 * (1 - accel);
              const swirlY = Math.cos(swirlAngle) * 15 * (1 - accel);

              const curX = dx * accel + swirlX;
              const curY = dy * accel + swirlY;
              const curZ = -accel * 500;

              const scaleX = 1.0 + accel * 0.35;
              const scaleY = Math.max(0.1, 1.0 - accel * 0.85);
              const rotX = accel * 52;
              const rotZ = -accel * 16;
              const remainingOpacity = Math.max(0, 1.0 - Math.pow(flightT, 2.0));

              c.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, ${curZ.toFixed(0)}px) rotateX(${rotX.toFixed(0)}deg) rotateZ(${rotZ.toFixed(0)}deg) scale(${scaleX.toFixed(2)}, ${scaleY.toFixed(2)})`;
              c.style.color = accel < 0.5 ? '#ff9010' : '#dd3000';
              c.style.textShadow = `0 0 ${Math.max(2, 10 * (1 - accel)).toFixed(1)}px rgba(255, 120, 20, 0.8)`;
              c.style.opacity = remainingOpacity.toFixed(2);
            }
          }

          // Card boxes dissolve smoothly
          const boxFade = p < 0.40 ? 1.0 : Math.max(0, 1.0 - (p - 0.40) * 2.5);
          boxes.forEach((b) => {
            b.style.opacity = boxFade.toFixed(2);
          });

          // Whole card smoothly fades out near the end of pin runway
          card.style.opacity = p < 0.70 ? '1' : Math.max(0, 1.0 - (p - 0.70) * 3.3).toFixed(2);
        }
      });
    });

    // Terminal Whiteout Flash at the very end of scroll runway
    ScrollTrigger.create({
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

      {/* UI Container with Middle-Left Pinned Slides */}
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
