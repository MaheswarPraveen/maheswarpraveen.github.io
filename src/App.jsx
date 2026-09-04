import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import BlackHoleCanvas from './components/BlackHoleCanvas';
import { personalInfo, projects, technicalSkills } from './data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ------------------------------------------------------------------------
    // 1. LENIS SMOOTH SCROLL: Initialize immediately so scroll is never locked
    // ------------------------------------------------------------------------
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const rafCb = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafCb);
    gsap.ticker.lagSmoothing(0);

    const splits = [];
    const createdTriggers = [];

    // ------------------------------------------------------------------------
    // 2. WAIT FOR FONTS: Ensure glyph metrics and line boxes are pixel-exact
    // ------------------------------------------------------------------------
    document.fonts.ready.then(() => {
      const cards = Array.from(container.querySelectorAll('.card'));

      cards.forEach((card, cIdx) => {
        // 1. Separate long text elements from short ones
        const isHero = card.classList.contains('hero-card');
        const isStack = card.querySelector('.stack-grid');

        // Short elements get the binary scramble + flight
        let shortSelectors = '.project-index, .tag';
        if (isHero) shortSelectors = '.name-line, .hero-subtitle, .clean-link';
        else if (isStack) shortSelectors = '.project-index, .stack-label, .stack-val';

        const shortSplit = new SplitType(card.querySelectorAll(shortSelectors), { types: 'chars' });
        splits.push(shortSplit);

        // Long elements get the clean masked line reveal
        let longSelectors = '.section-title, .section-desc';
        if (isStack) longSelectors = '.section-title';
        else if (isHero) longSelectors = ''; // Hero has no long text
        
        if (longSelectors) {
          const longElements = card.querySelectorAll(longSelectors);
          if (longElements.length > 0) {
            // Split lines AND chars so titles/descs get a clean line reveal on
            // enter AND still participate in the binary swallow on exit.
            const longSplit = new SplitType(longElements, { types: 'lines, chars' });
            splits.push(longSplit);

            // Clean masked line reveal: triggers as card enters
            const lineTween = gsap.fromTo(longSplit.lines, 
              { y: 30, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
              {
                y: 0,
                opacity: 1,
                clipPath: 'inset(0 0 0% 0)',
                duration: 0.9,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none none"
                }
              }
            );
            if (lineTween.scrollTrigger) createdTriggers.push(lineTween.scrollTrigger);
          }
        }

        const chars = Array.from(card.querySelectorAll('.char'));
        const boxes = Array.from(card.querySelectorAll('.tag, .clean-link, .stack-col'));
        const totalChars = chars.length;

        // 1. Measure origins absolutely (including initial scroll)
        const offsets = chars.map((c) => {
          c.dataset.orig = c.textContent;
          c._swallowState = 0;
          c._lastFlip = Math.random() * 100; // stagger initial flip
          const rect = c.getBoundingClientRect();
          return { 
            x: rect.left + window.scrollX, 
            y: rect.top + window.scrollY 
          };
        });

        // ----------------------------------------------------------------------
        // TWO-STAGE SWALLOW: scroll-driven scramble, then autonomous flight.
        // p 0.00-0.40: readable English. 0.40-0.55: binary flicker.
        // p >= 0.58: autonomous flight tween finishes even with hands off.
        // Scroll back below 0.50 reverses everything.
        // ----------------------------------------------------------------------
        const anim = { phase: 0 };
        const tl = gsap.timeline({ paused: true });
        let flightTween = null;

        const renderPhase = (p) => {
          // Live BH coords every tick: camera dollies during scroll, so a
          // captured-once value sends chars the wrong way (up-left bug).
          const bhScreen = window.__getBHScreenCoord
            ? window.__getBHScreenCoord()
            : { x: window.innerWidth * 0.72, y: window.innerHeight * 0.5 };

          const now = performance.now();

          for (let idx = 0; idx < totalChars; idx++) {
            const c = chars[idx];

            if (p <= 0.40) {
              if (c._swallowState !== 0) {
                c.textContent = c.dataset.orig;
                c.style.color = '';
                c.style.opacity = '1';
                c.style.transform = 'none';
                c.style.textShadow = 'none';
                c._swallowState = 0;
              }
            } else if (p < 0.55) {
              // Synchronous flicker: all letters flip together, throttled.
              if (now - c._lastFlip > 90) {
                c.textContent = Math.random() > 0.5 ? '1' : '0';
                c._lastFlip = now;
              }
              if (c._swallowState !== 1) {
                c.style.color = '#ffaa20'; // Bright amber
                c.style.textShadow = '0 0 12px rgba(255, 170, 32, 0.8)';
                c.style.opacity = '1';
                c.style.transform = 'none';
                c._swallowState = 1;
              }
            } else {
              // Flight toward live BH position
              const flightT = (p - 0.55) / 0.45;
              const charFlightStart = (idx / totalChars) * 0.15;
              const progressInFlight = Math.max(0, Math.min(1.0, (flightT - charFlightStart) / 0.85));
              const accel = Math.pow(progressInFlight, 2.0);

              const origin = offsets[idx];
              const currentScreenX = origin.x - window.scrollX;
              const currentScreenY = origin.y - window.scrollY;

              const dx = bhScreen.x - currentScreenX;
              const dy = bhScreen.y - currentScreenY;

              const swirlAngle = idx * 0.12 + accel * 3.0;
              const swirlX = Math.sin(swirlAngle) * 18 * (1 - accel);
              const swirlY = Math.cos(swirlAngle) * 12 * (1 - accel);

              const curX = dx * accel + swirlX;
              const curY = dy * accel + swirlY;
              const curZ = -accel * 350;

              const scaleX = 1.0 + accel * 0.3;
              const scaleY = Math.max(0.1, 1.0 - accel * 0.8);
              const rotX = accel * 35;
              const rotZ = -accel * 12;
              const remainingOpacity = Math.max(0, 1.0 - Math.pow(progressInFlight, 2.2));

              c.textContent = '0';

              c.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, ${curZ.toFixed(0)}px) rotateX(${rotX.toFixed(0)}deg) rotateZ(${rotZ.toFixed(0)}deg) scale(${scaleX.toFixed(2)}, ${scaleY.toFixed(2)})`;

              c.style.color = accel < 0.6 ? '#ff9010' : '#ff2000';
              c.style.textShadow = `0 0 ${Math.max(2, 12 * (1 - accel)).toFixed(0)}px rgba(255, 120, 20, 0.9)`;
              c.style.opacity = remainingOpacity.toFixed(2);
              c._swallowState = 3;
            }
          }

          if (p < 0.55) {
            boxes.forEach(b => b.style.opacity = '1');
            card.style.opacity = '1';
          } else {
            const flightT = (p - 0.55) / 0.45;
            const boxFade = Math.max(0, 1.0 - Math.pow(flightT, 1.5));
            boxes.forEach(b => b.style.opacity = boxFade.toFixed(2));
            card.style.opacity = Math.max(0, 1.0 - Math.pow(flightT, 2.2)).toFixed(2);
          }
        };

        tl.to(anim, {
          phase: 1.0,
          duration: 1.0,
          ease: "power1.inOut",
          onUpdate: () => renderPhase(anim.phase)
        });

        // ----------------------------------------------------------------------
        // SCROLLTRIGGER: Triggers swallow ONLY when card leaves the reading center!
        // Hero: Swallows as user leaves top of page
        // Content cards: Sits fully readable in center, swallows when leaving upper viewport
        // ----------------------------------------------------------------------
        const cardST = ScrollTrigger.create({
          trigger: card,
          start: isHero ? "top top" : "top 25%",
          end: isHero ? "+=70%" : "+=60%",
          scrub: 0.6,
          animation: tl,
          onUpdate: (self) => {
            // Auto-finish: once past binary, complete flight hands-off.
            // Killed automatically when scrolling back below 0.50.
            if (self.progress >= 0.62 && tl.progress() < 1) {
              if (!flightTween || !flightTween.isActive()) {
                flightTween = gsap.to(tl, {
                  progress: 1,
                  duration: 0.7,
                  ease: "power2.in",
                  overwrite: "auto"
                });
              }
            } else if (self.progress < 0.50 && flightTween) {
              flightTween.kill();
              flightTween = null;
            }
          }
        });
        createdTriggers.push(cardST);
      });

      // Terminal Whiteout Flash at the very end of runway
      const flashST = ScrollTrigger.create({
        trigger: '.scroll-end-trigger',
        start: "top 70%",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          const overlay = document.getElementById('flash-overlay');
          if (!overlay) return;
          if (self.progress < 0.5) {
            overlay.style.backgroundColor = '#ffffff';
            overlay.style.opacity = (self.progress / 0.5).toFixed(2);
          } else {
            // Second half fades to pure black so no BH traces remain.
            overlay.style.backgroundColor = '#000000';
            overlay.style.opacity = ((self.progress - 0.5) / 0.5).toFixed(2);
          }
        }
      });
      createdTriggers.push(flashST);

      // Recalculate all trigger positions once fonts and elements are rendered
      ScrollTrigger.refresh();
    });

    return () => {
      splits.forEach((s) => s.revert());
      createdTriggers.forEach((t) => t.kill());
      gsap.ticker.remove(rafCb);
      lenis.destroy();
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
      <div className="scroll-end-trigger" style={{ height: '50vh', width: '100%' }} />
    </>
  );
}
