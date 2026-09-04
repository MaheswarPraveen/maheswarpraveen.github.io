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
            // Words included so wrapping never breaks mid-word.
            const longSplit = new SplitType(longElements, { types: 'lines, words, chars' });
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

        chars.forEach((c) => {
          c.dataset.orig = c.textContent;
          c._swallowState = 0;
          c._lastFlip = Math.random() * 100;
        });

        // Origins measured lazily at flight start (after the line reveal has
        // settled), never at setup while lines still sit at y:30.
        let offsets = null;
        const measure = () => {
          offsets = chars.map((c) => {
            const rect = c.getBoundingClientRect();
            return { x: rect.left + window.scrollX, y: rect.top + window.scrollY };
          });
        };

        const resetChars = () => {
          for (let idx = 0; idx < totalChars; idx++) {
            const c = chars[idx];
            if (c._swallowState !== 0) {
              c.textContent = c.dataset.orig;
              c.style.color = '';
              c.style.opacity = '1';
              c.style.transform = 'none';
              c.style.textShadow = 'none';
              c._swallowState = 0;
            }
          }
          boxes.forEach(b => b.style.opacity = '1');
          card.style.opacity = '1';
        };

        // Cheap scroll-driven scramble: state-change writes only, text swaps
        // throttled. No transforms here, so no per-tick layout thrash.
        const renderScramble = (p) => {
          const now = performance.now();
          for (let idx = 0; idx < totalChars; idx++) {
            const c = chars[idx];
            if (p < 0.50) {
              if (c._swallowState !== 0) {
                c.textContent = c.dataset.orig;
                c.style.color = '';
                c.style.opacity = '1';
                c.style.transform = 'none';
                c.style.textShadow = 'none';
                c._swallowState = 0;
              }
            } else if (p < 0.75) {
              if (now - c._lastFlip > 90) {
                c.textContent = Math.random() > 0.5 ? '1' : '0';
                c._lastFlip = now;
              }
              if (c._swallowState !== 1) {
                c.style.color = '#ffaa20';
                c.style.textShadow = '0 0 12px rgba(255, 170, 32, 0.8)';
                c.style.opacity = '1';
                c.style.transform = 'none';
                c._swallowState = 1;
              }
            } else if (c._swallowState !== 2) {
              c.textContent = '0';
              c.style.color = '#ffa020';
              c.style.textShadow = '0 0 10px rgba(255, 160, 32, 0.6)';
              c.style.opacity = '1';
              c.style.transform = 'none';
              c._swallowState = 2;
            }
          }
          if (p < 0.75) {
            boxes.forEach(b => b.style.opacity = '1');
            card.style.opacity = '1';
          }
        };

        // ----------------------------------------------------------------------
        // Autonomous flight: own 0.9s timeline, decoupled from scroll scrub so
        // it can never freeze mid-air or fight ScrollTrigger for progress.
        // ----------------------------------------------------------------------
        const flight = { t: 0 };
        const flightTl = gsap.timeline({ paused: true });
        flightTl.eventCallback('onStart', () => {
          measure();
          for (let idx = 0; idx < totalChars; idx++) {
            const c = chars[idx];
            c.textContent = '0';
            c._swallowState = 3;
          }
        });
        flightTl.to(flight, {
          t: 1.0,
          duration: 0.9,
          ease: "power2.in",
          onUpdate: () => {
            const bhScreen = window.__getBHScreenCoord
              ? window.__getBHScreenCoord()
              : { x: window.innerWidth * 0.72, y: window.innerHeight * 0.5 };
            const ft = flight.t;
            for (let idx = 0; idx < totalChars; idx++) {
              const c = chars[idx];
              const charFlightStart = (idx / totalChars) * 0.15;
              const prog = Math.max(0, Math.min(1.0, (ft - charFlightStart) / 0.85));
              const accel = Math.pow(prog, 2.0);
              const origin = offsets[idx];
              const dx = bhScreen.x - (origin.x - window.scrollX);
              const dy = bhScreen.y - (origin.y - window.scrollY);
              const swirlAngle = idx * 0.12 + accel * 3.0;
              const curX = dx * accel + Math.sin(swirlAngle) * 18 * (1 - accel);
              const curY = dy * accel + Math.cos(swirlAngle) * 12 * (1 - accel);
              c.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, ${(-accel * 350).toFixed(0)}px) rotateX(${(accel * 35).toFixed(0)}deg) rotateZ(${(-accel * 12).toFixed(0)}deg) scale(${(1.0 + accel * 0.3).toFixed(2)}, ${Math.max(0.1, 1.0 - accel * 0.8).toFixed(2)})`;
              c.style.color = accel < 0.6 ? '#ff9010' : '#ff2000';
              c.style.textShadow = `0 0 ${Math.max(2, 12 * (1 - accel)).toFixed(0)}px rgba(255, 120, 20, 0.9)`;
              c.style.opacity = Math.max(0, 1.0 - Math.pow(prog, 2.2)).toFixed(2);
            }
            const boxFade = Math.max(0, 1.0 - Math.pow(ft, 1.5));
            boxes.forEach(b => b.style.opacity = boxFade.toFixed(2));
            card.style.opacity = Math.max(0, 1.0 - Math.pow(ft, 2.2)).toFixed(2);
          }
        });
        flightTl.eventCallback('onReverseComplete', resetChars);

        // ----------------------------------------------------------------------
        // SCROLLTRIGGER: plain trigger, no scrubbed animation, so nothing ever
        // fights the flight timeline for progress.
        // ----------------------------------------------------------------------
        const cardST = ScrollTrigger.create({
          trigger: card,
          start: isHero ? "top top" : "top 25%",
          end: isHero ? "+=70%" : "+=60%",
          onUpdate: (self) => {
            const p = self.progress;
            if (p >= 0.80) {
              if (flightTl.progress() === 0 && !flightTl.isActive()) flightTl.play();
              return;
            }
            if (p < 0.62) {
              if (flightTl.progress() > 0 || flightTl.isActive()) flightTl.reverse();
              else renderScramble(p);
              return;
            }
            if (!flightTl.isActive()) renderScramble(Math.min(p, 0.79));
          },
          onLeave: () => { if (flightTl.progress() < 1) flightTl.play(); },
          onLeaveBack: () => { if (flightTl.progress() > 0) flightTl.reverse(); else resetChars(); }
        });
        createdTriggers.push(cardST);
        createdTriggers.push(flightTl);
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
