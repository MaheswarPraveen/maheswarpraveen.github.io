import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import BlackHoleCanvas from './components/BlackHoleCanvas';
import { personalInfo, projects, technicalSkills } from './data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const deckRef = useRef(null);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const slides = Array.from(deck.querySelectorAll('.slide-frame'));
    const totalSlides = slides.length;

    // Initialize SplitType for all slides
    const splits = [];
    const slideData = slides.map((slide, slideIdx) => {
      const isHero = slideIdx === 0;
      const isStack = slideIdx === totalSlides - 1;

      let selectors = '.section-title, .tag, .project-index, .section-desc';
      if (isHero) selectors = '.name-line, .hero-subtitle, .clean-link';
      else if (isStack) selectors = '.section-title, .project-index, .stack-label, .stack-val';

      const split = new SplitType(slide.querySelectorAll(selectors), { types: 'chars' });
      splits.push(split);

      const chars = Array.from(slide.querySelectorAll('.char'));
      const boxes = Array.from(slide.querySelectorAll('.tag, .section-title, .clean-link, .stack-col'));

      chars.forEach((c) => {
        c.dataset.orig = c.textContent;
        c._state = 0; // 0: orig, 1: scramble, 2: locked_0, 3: swallowed
      });

      let offsets = [];
      const measure = () => {
        offsets = chars.map((c) => {
          const rect = c.getBoundingClientRect();
          return { x: rect.left, y: rect.top };
        });
      };

      return { slide, chars, boxes, offsets, measure, isHero, isStack };
    });

    // Initial measurement
    slideData.forEach((sd) => sd.measure());

    // ------------------------------------------------------------------------
    // DECOUPLED RAF TICKER: 15Hz Silky Binary Flicker (Zero Reflows)
    // ------------------------------------------------------------------------
    let rafId;
    let frame = 0;
    function flickerLoop() {
      rafId = requestAnimationFrame(flickerLoop);
      frame++;
      if (frame % 4 === 0) {
        for (let s = 0; s < totalSlides; s++) {
          const chars = slideData[s].chars;
          for (let c = 0; c < chars.length; c++) {
            if (chars[c]._state === 1) {
              chars[c].textContent = Math.random() > 0.5 ? '1' : '0';
            }
          }
        }
      }
    }
    flickerLoop();

    // ------------------------------------------------------------------------
    // MASTER CONTINUOUS SCROLLTRIGGER (720vh Scroll Runway)
    // ------------------------------------------------------------------------
    const slice = 1.0 / totalSlides;

    const masterTrigger = ScrollTrigger.create({
      trigger: '#deck-scroll-track',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.0,
      onUpdate: (self) => {
        const p = self.progress;

        const bhScreen = window.__getBHScreenCoord
          ? window.__getBHScreenCoord()
          : { x: window.innerWidth * 0.72, y: window.innerHeight * 0.5 };

        // Update each slide according to its slice
        for (let i = 0; i < totalSlides; i++) {
          const sd = slideData[i];
          const slideStart = i * slice;
          const slideEnd = (i + 1) * slice;

          // Slide is far in the future
          if (p < slideStart - slice * 0.35) {
            sd.slide.style.opacity = '0';
            sd.slide.classList.remove('is-active');
            continue;
          }

          // Slide is far in the past (swallowed)
          if (p > slideEnd) {
            sd.slide.style.opacity = '0';
            sd.slide.classList.remove('is-active');
            continue;
          }

          sd.slide.classList.add('is-active');

          // Case A: Slide is fading in as the previous slide swallows
          if (p < slideStart) {
            const emergeT = Math.max(0, (p - (slideStart - slice * 0.35)) / (slice * 0.35));
            sd.slide.style.opacity = emergeT.toFixed(2);
            sd.slide.style.transform = `scale(${(0.96 + 0.04 * emergeT).toFixed(3)})`;

            // Reset characters to pristine original
            sd.chars.forEach((c) => {
              if (c._state !== 0) {
                c.textContent = c.dataset.orig;
                c.style.color = '';
                c.style.opacity = '1';
                c.style.transform = '';
                c.style.textShadow = '';
                c._state = 0;
              }
            });
            sd.boxes.forEach((b) => {
              b.style.opacity = '1';
              b.style.borderColor = '';
            });
            continue;
          }

          // Case B: Active Slide Window (p is between slideStart and slideEnd)
          const localT = (p - slideStart) / slice; // 0.0 to 1.0 within this slide

          // 1. GENEROUS DWELL / READING PHASE (0.0 to 0.48): Rock-solid, centered, fully readable!
          if (localT <= 0.48) {
            sd.slide.style.opacity = '1';
            sd.slide.style.transform = 'scale(1)';

            sd.chars.forEach((c) => {
              if (c._state !== 0) {
                c.textContent = c.dataset.orig;
                c.style.color = '';
                c.style.opacity = '1';
                c.style.transform = '';
                c.style.textShadow = '';
                c._state = 0;
              }
            });
            sd.boxes.forEach((b) => {
              b.style.opacity = '1';
              b.style.borderColor = '';
            });
            continue;
          }

          // 2. MATRIX SCRAMBLE & 3D SWALLOW PHASE (0.48 to 1.00)
          const animT = (localT - 0.48) / 0.52; // 0.0 to 1.0 for the swallow
          if (sd.offsets.length !== sd.chars.length) sd.measure();

          for (let cIdx = 0; cIdx < sd.chars.length; cIdx++) {
            const c = sd.chars[cIdx];
            const charStart = (cIdx / sd.chars.length) * 0.28;
            const scrambleDur = 0.20;
            const holdZeroDur = 0.16;

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

            const charProgress = animT - charStart;

            // Phase A: Scramble into 0s and 1s with amber phosphor glow
            if (charProgress < scrambleDur) {
              if (c._state !== 1) {
                c.textContent = Math.random() > 0.5 ? '1' : '0';
                c.style.color = '#ffb030';
                c.style.textShadow = '0 0 8px rgba(255, 176, 48, 0.6)';
                c.style.opacity = '1';
                c.style.transform = '';
                c._state = 1;
              }
            }
            // Phase B: Lock into solid glowing golden '0'
            else if (charProgress < scrambleDur + holdZeroDur) {
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

              const swallowProg = Math.min(1.0, (charProgress - scrambleDur - holdZeroDur) / 0.36);
              const accel = Math.pow(swallowProg, 2.2);

              const origin = sd.offsets[cIdx] || { x: window.innerWidth * 0.25, y: window.innerHeight * 0.5 };
              const dx = bhScreen.x - origin.x;
              const dy = bhScreen.y - origin.y;

              const swirlAngle = cIdx * 0.12 + accel * 3.4;
              const swirlX = Math.sin(swirlAngle) * 22 * (1 - accel);
              const swirlY = Math.cos(swirlAngle) * 16 * (1 - accel);

              const curX = dx * accel + swirlX;
              const curY = dy * accel + swirlY;
              const curZ = -accel * 520;

              const scaleX = 1.0 + accel * 0.35;
              const scaleY = Math.max(0.1, 1.0 - accel * 0.85);
              const rotX = accel * 52;
              const rotZ = -accel * 16;
              const remainingOpacity = Math.max(0, 1.0 - Math.pow(swallowProg, 2.2));

              c.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, ${curZ.toFixed(0)}px) rotateX(${rotX.toFixed(0)}deg) rotateZ(${rotZ.toFixed(0)}deg) scale(${scaleX.toFixed(2)}, ${scaleY.toFixed(2)})`;
              c.style.color = accel < 0.5 ? '#ff9010' : '#dd3000';
              c.style.textShadow = `0 0 ${Math.max(2, 10 * (1 - accel)).toFixed(1)}px rgba(255, 120, 20, 0.8)`;
              c.style.opacity = remainingOpacity.toFixed(2);
            }
          }

          // Container & tags dissolve smoothly in tandem
          const fadeT = Math.max(0, (animT - 0.40) / 0.55);
          const boxFade = Math.max(0, 1.0 - fadeT * 1.3);
          sd.slide.style.opacity = boxFade.toFixed(2);
          sd.boxes.forEach((b) => {
            b.style.opacity = boxFade.toFixed(2);
          });
        }

        // Terminal Whiteout Flash (After last slide swallows at end of universe)
        const overlay = document.getElementById('flash-overlay');
        if (overlay) {
          if (p > 0.94) {
            const flashT = (p - 0.94) / 0.06;
            if (flashT < 0.5) {
              overlay.style.backgroundColor = '#ffffff';
              overlay.style.opacity = (flashT / 0.5).toFixed(2);
            } else {
              overlay.style.backgroundColor = '#000000';
              overlay.style.opacity = ((flashT - 0.5) / 0.5).toFixed(2);
            }
          } else {
            overlay.style.opacity = '0';
          }
        }
      }
    });

    window.addEventListener('resize', () => slideData.forEach((sd) => sd.measure()));

    return () => {
      cancelAnimationFrame(rafId);
      masterTrigger.kill();
      splits.forEach((s) => s.revert());
    };
  }, []);

  return (
    <>
      {/* Terminal Swallow Whiteout Flash Overlay */}
      <div id="flash-overlay" />

      {/* 60+ FPS Three.js WebGL Black Hole Canvas */}
      <BlackHoleCanvas />

      {/* Fixed Viewport: All slides exist in the EXACT same screen center! */}
      <div id="deck-viewport" ref={deckRef}>
        {/* Slide 0: Hero */}
        <header className="slide-frame is-active" style={{ opacity: 1 }}>
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
          <section className="slide-frame" key={proj.id}>
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
        <section className="slide-frame">
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
      </div>

      {/* Master Scroll Runway (720vh) */}
      <div id="deck-scroll-track" />
    </>
  );
}
