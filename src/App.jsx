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
    const cardWatch = []; // { st, flightTl } for the stop-watchdog below

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

        // Hero absorb: slow, backwards into 3D depth, all ones. Content
        // cards: quicker lateral swallow in zeroes.
        const flightDur = isHero ? 2.4 : 0.9;
        const flightEase = isHero ? 'power1.inOut' : 'power2.in';
        const flightGlyph = isHero ? '1' : '0';
        const depthPush = isHero ? 1050 : 420;
        const xyPull = isHero ? 0.62 : 1.0;
        const staggerSpan = isHero ? 0.30 : 0.12;
        const rotAmt = isHero ? 25 : 45;

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
            if (p < 0.45) {
              if (c._swallowState !== 0) {
                c.textContent = c.dataset.orig;
                c.style.color = '';
                c.style.opacity = '1';
                c.style.transform = 'none';
                c.style.textShadow = 'none';
                c._swallowState = 0;
              }
            } else if (p < 0.68) {
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
              c.textContent = isHero ? '1' : '0';
              c.style.color = '#ffa020';
              c.style.textShadow = '0 0 10px rgba(255, 160, 32, 0.6)';
              c.style.opacity = '1';
              c.style.transform = 'none';
              c._swallowState = 2;
            }
          }
          if (p < 0.68) {
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
            c.textContent = flightGlyph;
            c._swallowState = 3;
          }
        });
        flightTl.to(flight, {
          t: 1.0,
          duration: flightDur,
          ease: flightEase,
          onUpdate: () => {
            const bhScreen = window.__getBHScreenCoord
              ? window.__getBHScreenCoord()
              : { x: window.innerWidth * 0.72, y: window.innerHeight * 0.5 };
            const ft = flight.t;
            for (let idx = 0; idx < totalChars; idx++) {
              const c = chars[idx];
              const charFlightStart = (idx / totalChars) * staggerSpan;
              const prog = Math.max(0, Math.min(1.0, (ft - charFlightStart) / (1 - staggerSpan)));
              // Ease-in accel: hover, then plunge past the rim (overshoot)
              const accel = Math.pow(prog, 1.7);
              const origin = offsets[idx];
              const dx = bhScreen.x - (origin.x - window.scrollX);
              const dy = bhScreen.y - (origin.y - window.scrollY);
              // Gravitational arc: quadratic bezier toward an overshoot point
              // past the horizon, bowed perpendicular for a slingshot feel.
              // Hero pulls less across (xyPull) and sinks deep in Z instead.
              const tx = dx * 1.18 * xyPull, ty = dy * 1.18 * xyPull;
              const mx = dx * 0.5 * xyPull - dy * 0.38 + Math.sin(idx * 0.35) * 60 * (1 - accel);
              const my = dy * 0.5 * xyPull + dx * 0.38 + Math.cos(idx * 0.27) * 40 * (1 - accel);
              const ia = 1 - accel;
              const curX = 2 * ia * accel * mx + accel * accel * tx;
              const curY = 2 * ia * accel * my + accel * accel * ty;
              // Streak along travel: stretch long, crush thin near contact
              const streak = 1.0 + accel * 1.8;
              const crush = Math.max(0.05, 1.0 - Math.pow(prog, 1.5) * 0.95);
              c.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, ${(-accel * depthPush).toFixed(0)}px) rotateX(${(accel * rotAmt).toFixed(0)}deg) rotateZ(${(-accel * 25).toFixed(0)}deg) scale(${streak.toFixed(2)}, ${crush.toFixed(2)})`;
              // Heat flare: amber -> white-hot -> ember, crash out past the rim
              const glow = Math.sin(Math.min(1, prog) * Math.PI);
              if (prog < 0.55) {
                c.style.color = '#ffaa20';
              } else if (prog < 0.85) {
                c.style.color = '#ffe9b8';
              } else {
                c.style.color = '#ff5010';
              }
              c.style.textShadow = `0 0 ${(8 + 34 * glow).toFixed(0)}px rgba(255, ${Math.round(170 - 60 * prog)}, 40, 0.95)`;
              const tailFade = prog < 0.78 ? 1 - Math.pow(prog, 1.4) * 0.25 : Math.max(0, 1 - (prog - 0.78) / 0.22);
              c.style.opacity = tailFade.toFixed(2);
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
            if (p >= 0.72) {
              if (flightTl.progress() === 0 && !flightTl.isActive()) flightTl.play();
              return;
            }
            if (p < 0.60) {
              if (flightTl.progress() > 0 || flightTl.isActive()) flightTl.reverse();
              else renderScramble(p);
              return;
            }
            if (!flightTl.isActive()) renderScramble(Math.min(p, 0.71));
          },
          onLeave: () => { if (flightTl.progress() < 1) flightTl.play(); },
          onLeaveBack: () => { if (flightTl.progress() > 0) flightTl.reverse(); else resetChars(); }
        });
        createdTriggers.push(cardST);
        createdTriggers.push(flightTl);
        cardWatch.push({ st: cardST, flightTl });
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
          if (self.progress > 0.9) {
            // Hard clamp: fully opaque black held to the very end, canvas
            // already gone, so no scroll position can leave a trace of BH.
            overlay.style.backgroundColor = '#000000';
            overlay.style.opacity = '1';
          } else if (self.progress < 0.5) {
            overlay.style.backgroundColor = '#ffffff';
            overlay.style.opacity = (self.progress / 0.5).toFixed(2);
          } else {
            // Second half fades to pure black so no BH traces remain.
            overlay.style.backgroundColor = '#000000';
            overlay.style.opacity = ((self.progress - 0.5) / 0.5).toFixed(2);
          }
          // Once the blackout passes 80%, hide the WebGL canvas entirely so
          // no disk pixel can bleed through at the end of scroll.
          const canvas = document.getElementById('blackhole-canvas');
          if (canvas) canvas.style.opacity = self.progress > 0.8 ? '0' : '1';
        }
      });
      createdTriggers.push(flashST);

      // Stop-watchdog: fires even with hands off the wheel. Keeps the binary
      // flicker alive when stopped mid-scramble and auto-launches the flight
      // when stopped past the lock point, so no state can ever look stuck.
      const watchdog = setInterval(() => {
        const now = performance.now();
        const live = document.querySelectorAll('.char');
        for (let i = 0; i < live.length; i++) {
          const c = live[i];
          if (c._swallowState === 1 && now - c._lastFlip > 110) {
            c.textContent = Math.random() > 0.5 ? '1' : '0';
            c._lastFlip = now;
          }
        }
        for (let k = 0; k < cardWatch.length; k++) {
          const w = cardWatch[k];
          if (w.st.progress >= 0.72 && w.flightTl.progress() === 0 && !w.flightTl.isActive()) {
            w.flightTl.play();
          }
        }
      }, 120);

      // Recalculate all trigger positions once fonts and elements are rendered
      ScrollTrigger.refresh();

      // Store watchdog for cleanup
      container._watchdog = watchdog;
    });

    return () => {
      if (container._watchdog) clearInterval(container._watchdog);
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
