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
    // ------------------------------------------------------------------------
    // LENIS SMOOTH SCROLL INTEGRATION
    // ------------------------------------------------------------------------
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.card'));
    const splits = [];

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
          const longSplit = new SplitType(longElements, { types: 'lines' });
          splits.push(longSplit);

          // Wrap each line in an overflow: hidden container for the mask effect
          longSplit.lines.forEach(line => {
            const wrapper = document.createElement('div');
            wrapper.style.overflow = 'hidden';
            wrapper.style.display = 'block'; // Ensure the wrapper takes up space
            wrapper.style.verticalAlign = 'top';
            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
          });

          // Create a single ScrollTrigger to play the line reveal once
          gsap.fromTo(longSplit.lines, 
            { y: '110%', opacity: 0 },
            {
              y: '0%',
              opacity: 1,
              duration: 1.0,
              stagger: 0.08,
              ease: "power4.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none" // Play once, no scrub
              }
            }
          );
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
      // CINEMATIC TIMELINE: Unpinned! Follows natural scroll.
      // ----------------------------------------------------------------------
      const anim = { phase: 0 };
      const tl = gsap.timeline({ paused: true });
      let capturedBH = null;

      tl.eventCallback('onStart', () => {
        capturedBH = window.__getBHScreenCoord
          ? window.__getBHScreenCoord()
          : { x: window.innerWidth * 0.72, y: window.innerHeight * 0.5 };
      });

      tl.to(anim, {
        phase: 1.0,
        duration: 1.4, // Faster, punchier animation
        ease: "power1.inOut",
        onUpdate: () => {
          const p = anim.phase;
          const bhScreen = capturedBH || (window.__getBHScreenCoord
            ? window.__getBHScreenCoord()
            : { x: window.innerWidth * 0.72, y: window.innerHeight * 0.5 });

          // Phase 1 (0.0 - 0.45): Organic staggered matrix decode
          // Phase 2 (0.45 - 1.0): Dynamic flight to BH (even while scrolling!)

          const now = performance.now();

          for (let idx = 0; idx < totalChars; idx++) {
            const c = chars[idx];

            if (p === 0) {
              if (c._swallowState !== 0) {
                c.textContent = c.dataset.orig;
                c.style.color = '';
                c.style.opacity = '1';
                c.style.transform = 'none';
                c.style.textShadow = 'none';
                c._swallowState = 0;
              }
            } else if (p > 0 && p < 0.45) {
              // Staggered, organic flicker
              if (now - c._lastFlip > 40 + (idx % 7) * 15) {
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
              // Flight
              const flightT = (p - 0.45) / 0.55; 
              const charFlightStart = (idx / totalChars) * 0.2;
              const progressInFlight = Math.max(0, Math.min(1.0, (flightT - charFlightStart) / 0.8));
              const accel = Math.pow(progressInFlight, 2.2);

              const origin = offsets[idx];
              // Dynamic vector math! Works seamlessly even if user is scrolling during flight
              const currentScreenX = origin.x - window.scrollX;
              const currentScreenY = origin.y - window.scrollY;
              
              const dx = bhScreen.x - currentScreenX;
              const dy = bhScreen.y - currentScreenY;

              const swirlAngle = idx * 0.15 + accel * 4.0;
              const swirlX = Math.sin(swirlAngle) * 30 * (1 - accel);
              const swirlY = Math.cos(swirlAngle) * 20 * (1 - accel);

              const curX = dx * accel + swirlX;
              const curY = dy * accel + swirlY;
              const curZ = -accel * 600;

              const scaleX = 1.0 + accel * 0.5;
              const scaleY = Math.max(0.05, 1.0 - accel * 0.9);
              const rotX = accel * 60;
              const rotZ = -accel * 20;
              const remainingOpacity = Math.max(0, 1.0 - Math.pow(progressInFlight, 2.5));

              // Don't lock to '0', keep it binary stream!
              if (c._swallowState !== 3) {
                 c.textContent = Math.random() > 0.5 ? '1' : '0'; // Locks in one random bit for flight
              }
              
              c.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, ${curZ.toFixed(0)}px) rotateX(${rotX.toFixed(0)}deg) rotateZ(${rotZ.toFixed(0)}deg) scale(${scaleX.toFixed(2)}, ${scaleY.toFixed(2)})`;
              
              const shadowStep = Math.round((1 - accel) * 4) / 4;
              c.style.color = accel < 0.6 ? '#ff9010' : '#ff2000'; // Heat up to red
              c.style.textShadow = `0 0 ${Math.max(2, 15 * shadowStep).toFixed(0)}px rgba(255, 120, 20, 0.9)`;
              c.style.opacity = remainingOpacity.toFixed(2);
              c._swallowState = 3;
            }
          }

          if (p < 0.45) {
             boxes.forEach(b => b.style.opacity = '1');
             card.style.opacity = '1';
          } else {
             const flightT = (p - 0.45) / 0.55;
             const boxFade = Math.max(0, 1.0 - Math.pow(flightT, 1.5));
             boxes.forEach(b => b.style.opacity = boxFade.toFixed(2));
             card.style.opacity = Math.max(0, 1.0 - Math.pow(flightT, 2.5)).toFixed(2);
          }
        }
      });

      // ----------------------------------------------------------------------
      // SCROLLTRIGGER: Smooth scrub without pinning to respect CSS Snap!
      // ----------------------------------------------------------------------
      ScrollTrigger.create({
        trigger: card,
        start: "top 80%", 
        end: "+=150%", // Scrubs over a much larger scroll distance
        scrub: 1.0,
        animation: tl
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
        overlay.style.backgroundColor = '#ffffff'; // Always white
        
        if (self.progress < 0.5) {
          // Fade IN white
          overlay.style.opacity = (self.progress / 0.5).toFixed(2);
        } else {
          // Fade OUT white (revealing the black hole)
          overlay.style.opacity = (1.0 - ((self.progress - 0.5) / 0.5)).toFixed(2);
        }
      }
    });

    return () => {
      splits.forEach((s) => s.revert());
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
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
