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
    const allChars = [];

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

      // 1. Measure origins ONCE, right now, before any animations or scrolling happen
      const offsets = chars.map((c) => {
        c.dataset.orig = c.textContent;
        c._swallowState = 0;
        const rect = c.getBoundingClientRect();
        return { x: rect.left, y: rect.top };
      });

      // ----------------------------------------------------------------------
      // AUTONOMOUS 3D SWALLOW TIMELINE (Plays automatically once all chars are 0)
      // ----------------------------------------------------------------------
      const swallowAnim = { flight: 0 };
      const autoSwallowTl = gsap.timeline({ paused: true });

      autoSwallowTl.to(swallowAnim, {
        flight: 1.0,
        duration: 0.85, // Slightly longer, more graceful flight
        ease: "power2.inOut",
        onUpdate: () => {
          const flightT = swallowAnim.flight;
          const bhScreen = window.__getBHScreenCoord
            ? window.__getBHScreenCoord()
            : { x: window.innerWidth * 0.72, y: window.innerHeight * 0.5 };

          for (let idx = 0; idx < totalChars; idx++) {
            const c = chars[idx];
            // Stagger flight trajectory into the singularity
            const charFlightStart = (idx / totalChars) * 0.25;
            const progressInFlight = Math.max(0, Math.min(1.0, (flightT - charFlightStart) / 0.75));
            const accel = Math.pow(progressInFlight, 2.0);

            const origin = offsets[idx];
            const dx = bhScreen.x - origin.x;
            const dy = bhScreen.y - origin.y;

            const swirlAngle = idx * 0.10 + accel * 3.2;
            const swirlX = Math.sin(swirlAngle) * 22 * (1 - accel);
            const swirlY = Math.cos(swirlAngle) * 16 * (1 - accel);

            const curX = dx * accel + swirlX;
            const curY = dy * accel + swirlY;
            const curZ = -accel * 550;

            const scaleX = 1.0 + accel * 0.35;
            const scaleY = Math.max(0.1, 1.0 - accel * 0.85);
            const rotX = accel * 52;
            const rotZ = -accel * 16;
            const remainingOpacity = Math.max(0, 1.0 - Math.pow(progressInFlight, 2.2));

            c.textContent = '0';
            c.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, ${curZ.toFixed(0)}px) rotateX(${rotX.toFixed(0)}deg) rotateZ(${rotZ.toFixed(0)}deg) scale(${scaleX.toFixed(2)}, ${scaleY.toFixed(2)})`;
            c.style.color = accel < 0.5 ? '#ff9010' : '#dd3000';
            c.style.textShadow = `0 0 ${Math.max(2, 10 * (1 - accel)).toFixed(1)}px rgba(255, 120, 20, 0.8)`;
            c.style.opacity = remainingOpacity.toFixed(2);
          }

          const boxFade = Math.max(0, 1.0 - flightT * 1.6);
          boxes.forEach((b) => {
            b.style.opacity = boxFade.toFixed(2);
          });
          card.style.opacity = Math.max(0, 1.0 - Math.pow(flightT, 2.0)).toFixed(2);
        }
      });

      // ----------------------------------------------------------------------
      // SCROLLTRIGGER: Controlled Binary Scramble -> Auto Swallow Trigger
      // ----------------------------------------------------------------------
      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        // Extended runway so wheel scrolling is slower and more deliberate
        end: "+=220%",
        pin: true,
        pinSpacing: true,
        scrub: 1.0,
        onUpdate: (self) => {
          const p = self.progress;

          // ------------------------------------------------------------------
          // Threshold 0.50: THE EXACT MOMENT all letters have become solid zeroes.
          // Launch automated swallowing immediately into the black hole!
          // ------------------------------------------------------------------
          if (p >= 0.50) {
            if (autoSwallowTl.progress() === 0 && !autoSwallowTl.isActive()) {
              autoSwallowTl.play();
            }
            return;
          }

          // Reverse only if scrolled back enough (p < 0.35)
          if (p < 0.35 && (autoSwallowTl.progress() > 0 || autoSwallowTl.isActive())) {
            autoSwallowTl.reverse();
            return;
          }

          if (autoSwallowTl.isActive()) return;

          // SCROLL-DRIVEN BINARY SCRAMBLE (p from 0.0 to 0.50):
          // Phase 0 (p < 0.15): Crisp readable English
          // Phase 1 (p from 0.15 to 0.35): Synchronous scramble into 0s and 1s (NO "0aheswar")
          // Phase 2 (p from 0.35 to 0.50): Solid golden zeroes
          const scrambleProgress = Math.max(0, Math.min(1.0, (p - 0.15) / 0.35));

          for (let idx = 0; idx < totalChars; idx++) {
            const c = chars[idx];

            if (scrambleProgress === 0) {
              if (c._swallowState !== 0) {
                c.textContent = c.dataset.orig;
                c.style.color = '';
                c.style.opacity = '1';
                c.style.transform = 'none';
                c.style.textShadow = 'none';
                c._swallowState = 0;
              }
            } else if (scrambleProgress > 0 && scrambleProgress < 0.85) {
              // ALL letters scramble simultaneously (prevents partial word reading)
              c.textContent = Math.random() > 0.5 ? '1' : '0';
              c.style.color = '#ffb030';
              c.style.textShadow = '0 0 8px rgba(255, 176, 48, 0.5)';
              c.style.opacity = '1';
              c.style.transform = 'none';
              c._swallowState = 1;
            } else {
              // ALL letters lock into solid 0 simultaneously
              if (c._swallowState !== 2) {
                c.textContent = '0';
                c.style.color = '#ffa020';
                c.style.textShadow = '0 0 10px rgba(255, 160, 32, 0.6)';
                c.style.opacity = '1';
                c.style.transform = 'none';
                c._swallowState = 2;
              }
            }
          }

          boxes.forEach((b) => {
            b.style.opacity = '1';
          });
          card.style.opacity = '1';
        },
        onLeave: () => {
          autoSwallowTl.progress(1);
          card.style.opacity = '0';
        },
        onLeaveBack: () => {
          autoSwallowTl.progress(0);
          chars.forEach((c) => {
            c.textContent = c.dataset.orig;
            c.style.color = '';
            c.style.opacity = '1';
            c.style.transform = 'none';
            c.style.textShadow = 'none';
            c._swallowState = 0;
          });
          card.style.opacity = '1';
          boxes.forEach((b) => {
            b.style.opacity = '1';
          });
        }
      });
    });

    // Terminal Whiteout Flash at the very end of runway
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
      <div id="flash-overlay" />
      <BlackHoleCanvas />
      <main id="ui-container" ref={containerRef}>
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
      <div className="scroll-end-trigger" />
    </>
  );
}
