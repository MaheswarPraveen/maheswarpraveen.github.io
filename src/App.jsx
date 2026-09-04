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
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
    });

    lenis.on('scroll', ScrollTrigger.update);

    // Magnetic slide settling: stopping anywhere glides to the nearest
    // slide — or the solar finale past the runway midpoint — so scroll can
    // never rest between slides in a half-decrypted state. Timer re-arms
    // on every scroll event, so it only fires on a true stop; any new
    // scroll clears the flag, so user input can never wedge it.
    let settleTimer = null;
    let settling = false;
    let settleStart = 0;
    lenis.on('scroll', () => {
      settling = false;
      if (settleTimer) clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        // Stale-glide safety: a settle older than 2s can never wedge the flag.
        if (settling && performance.now() - settleStart < 2000) return;
        settling = false;
        if (Math.abs(lenis.velocity || 0) > 1) return;
        const vh = window.innerHeight;
        const max = document.documentElement.scrollHeight - vh;
        const y = window.scrollY;
        if (y < 8) return; // hero top is already a landing
        const currentCards = Array.from(container.querySelectorAll('.card'));
        if (!currentCards.length) return;
        const cardAnchors = currentCards.map((c) =>
          Math.max(0, Math.min(max, c.offsetTop - (vh - c.offsetHeight) / 2))
        );
        const inFinale = y > max - vh * 2.6;
        const pool = inFinale ? [cardAnchors[cardAnchors.length - 1], max] : cardAnchors;
        let best = pool[0];
        let bd = 1e9;
        for (const a of pool) {
          const d = Math.abs(a - y);
          if (d < bd) { bd = d; best = a; }
        }
        if (bd < 8) return;
        settling = true;
        settleStart = performance.now();
        lenis.scrollTo(best, {
          duration: 0.9,
          easing: (t) => 1 - Math.pow(1 - t, 3),
          onComplete: () => { settling = false; }
        });
      }, 350);
    });

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
              { y: 70, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
              {
                y: 0,
                opacity: 1,
                clipPath: 'inset(0 0 0% 0)',
                duration: 1.3,
                stagger: 0.14,
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

        // Powder dissolve: scrubbed, deterministic, forever upright. Same
        // scroll position always renders the same pixels — fast
        // back-and-forth is perfect by construction. No timelines, nothing
        // to flap, strand, or tilt sideways. Letters hold -> binary wave ->
        // crumble like powder. Scroll back even a bit -> letters restore.
        const HOLD_END = 0.62;  // below: pristine letters, always
        const WAVE_END = 0.74;  // binary cascade 0.62 -> 0.72, beat to 0.74
        const GONE_AT = 0.92;   // fully powdered from here on (informational)
        const CASCADE = 0.10;   // wave sweeps 0.62 -> 0.72
        const powderGlyph = isHero ? '1' : '0';

        chars.forEach((c, i) => {
          c.dataset.orig = c.textContent;
          c._swallowState = 0;
          c._lastFlip = Math.random() * 100;
          // Deterministic per-char powder drift (no per-tick random, so
          // scrubbing back and forth never shimmers or tears).
          const h1 = Math.sin(i * 12.9898) * 43758.5453;
          const h2 = Math.sin(i * 78.233) * 12543.1234;
          const f1 = h1 - Math.floor(h1);
          const f2 = h2 - Math.floor(h2);
          c._driftX = (f1 - 0.5) * 26;
          c._driftY = -(10 + f2 * 24);
        });

        const resetChars = () => {
          for (let idx = 0; idx < totalChars; idx++) {
            const c = chars[idx];
            if (c.dataset && c.dataset.orig !== undefined) {
              c.textContent = c.dataset.orig;
            }
            c.style.color = '';
            c.style.opacity = '';
            c.style.transform = '';
            c.style.textShadow = '';
            c.style.willChange = '';
            c.style.filter = '';
            c._swallowState = 0;
          }
          boxes.forEach((b) => {
            b.style.opacity = '';
            b.style.transform = '';
          });
          card.style.opacity = '';
        };

        // (Foreign constants block removed: single HOLD/WAVE/CASCADE scheme above.
        // Two writers collided here and the duplicate broke compilation.)
        const renderScramble = (p) => {
          const now = performance.now();
          for (let idx = 0; idx < totalChars; idx++) {
            const c = chars[idx];
            const charStart = HOLD_END + (idx / totalChars) * CASCADE;
            if (p < charStart) {
              if (c._swallowState !== 0) {
                if (c.dataset && c.dataset.orig !== undefined) c.textContent = c.dataset.orig;
                c.style.color = '';
                c.style.opacity = '';
                c.style.transform = '';
                c.style.textShadow = '';
                c.style.willChange = '';
                c._swallowState = 0;
              }
            } else if (c._swallowState !== 1) {
              // Fast cipher snap: lively flicker that exists ONLY while the
              // flight is (about to be) running — never a place to rest.
              if (now - c._lastFlip > 110) {
                c.textContent = Math.random() > 0.5 ? '1' : '0';
                c._lastFlip = now;
              }
              c.style.color = '#ff6600';
              c.style.textShadow = '0 0 12px rgba(255, 102, 0, 0.8)';
              c.style.opacity = '1';
              c.style.transform = '';
              c._swallowState = 1;
            } else if (now - c._lastFlip > 110) {
              c.textContent = Math.random() > 0.5 ? '1' : '0';
              c._lastFlip = now;
            }
          }
          // Pre-powder zone: container always clean here (powder owns it past
          // WAVE_END, resetChars owns it at rest).
          boxes.forEach(b => b.style.opacity = '');
          card.style.opacity = '';
        };

        // Powder renderer: binary chars crumble in place — rise, shrink,
        // fade. Upright forever (translate + scale only, zero rotation).
        // Pure function of p: scrubbing back un-crumbles every char.
        const renderPowder = (p) => {
          const contFade = 1 - Math.min(1, Math.max(0, (p - 0.80) / 0.15));
          card.style.opacity = contFade < 1 ? contFade.toFixed(3) : '';
          boxes.forEach(b => { b.style.opacity = contFade < 1 ? contFade.toFixed(3) : ''; });
          for (let idx = 0; idx < totalChars; idx++) {
            const c = chars[idx];
            const dStart = WAVE_END + (idx / totalChars) * 0.10;
            if (p < dStart) {
              if (c._swallowState !== 1) {
                c.textContent = powderGlyph;
                c.style.color = '#ff6600';
                c.style.textShadow = '0 0 12px rgba(255, 102, 0, 0.8)';
                c.style.opacity = '1';
                c.style.transform = '';
                c._swallowState = 1;
              }
              continue;
            }
            const local = Math.min(1, (p - dStart) / 0.08);
            if (c._swallowState !== 2) {
              c.textContent = powderGlyph;
              c._swallowState = 2;
            }
            const e = local * local;
            c.style.opacity = (1 - local).toFixed(3);
            c.style.transform = `translate3d(${(c._driftX * e).toFixed(1)}px, ${(c._driftY * e).toFixed(1)}px, 0) scale(${(1 - 0.4 * e).toFixed(3)})`;
            c.style.color = '#ff6600';
            c.style.textShadow = `0 0 ${(12 * (1 - local)).toFixed(1)}px rgba(255, 102, 0, ${(0.8 * (1 - local)).toFixed(2)})`;
          }
        };

        // ----------------------------------------------------------------------
        // Autonomous flight: own 0.9s timeline, decoupled from scroll scrub so
        // it can never freeze mid-air or fight ScrollTrigger for progress.
        // ----------------------------------------------------------------------
        // DEAD flight engine (powder replaced it): stubs keep the orphaned
        // block below from throwing if anything ever touches it. Do NOT
        // re-hook timelines here — states are scroll-mapped now.
        const flightDur = 0.001, flightEase = 'none', flightGlyph = '0';
        const depthPush = 0, xyPull = 1, staggerSpan = 0.12, rotAmt = 0;
        const orbitTurns = 0, orbitR = 0;
        let offsets = null, offsetsFresh = false;
        const measure = () => {};
        const flight = { t: 0 };
        const flightTl = gsap.timeline({ paused: true });
        flightTl.eventCallback('onStart', () => {
          // Baseline origins are captured ONCE per flight cycle, from a
          // pristine card. Re-launching mid-reverse must REUSE them —
          // re-measuring mid-air rects corrupted origins into garbage.
          // (Glyphs dissolve per-char inside onUpdate, never in one frame;
          // the same path runs in reverse: mirror decrypt.)
          if (flightTl.progress() === 0 && !offsetsFresh) {
            measure();
            offsetsFresh = true;
          }
        });
        flightTl.to(flight, {
          t: 1.0,
          duration: flightDur,
          ease: flightEase,
          onUpdate: () => {
            if (!offsets || !offsets.length) measure();
            if (!offsets || !offsets.length) return;
            const bhScreen = window.__getBHScreenCoord
              ? window.__getBHScreenCoord()
              : { x: window.innerWidth * 0.72, y: window.innerHeight * 0.5 };
            const ft = flight.t;
            const tnow = performance.now();
            for (let idx = 0; idx < totalChars; idx++) {
              const c = chars[idx];
              const charFlightStart = (idx / totalChars) * staggerSpan;
              const prog = Math.max(0, Math.min(1.0, (ft - charFlightStart) / (1 - staggerSpan)));
              // Perf: pristine chars belong to renderScramble and settled
              // chars are done — only the transitioning band costs style
              // writes per tick. This collapses ~2000 writes to ~200.
              if (prog <= 0 && c._swallowState !== 3) continue;
              if (prog >= 1 && c._flyDone) continue;
              // Glyph ownership follows flight progress BOTH ways: chars
              // dissolve into binary as the flight reaches them, and decrypt
              // back to letters in mirror order on reverse. No instant swaps.
              if (prog > 0.12) {
                if (c._swallowState !== 3) {
                  c.textContent = flightGlyph;
                  c._swallowState = 3;
                  c.style.willChange = 'transform, opacity';
                }
              } else if (c._swallowState === 3) {
                c.textContent = c.dataset.orig;
                c.style.color = '';
                c.style.textShadow = 'none';
                c.style.transform = 'none';
                c._swallowState = 0;
              }
              // Hero: slow ease-in then accelerating plunge *behind* the hole.
              // Accel is gentle early so the "backwards into depth" reads.
              const accel = isHero ? Math.pow(prog, 2.2) : Math.pow(prog, 1.7);
              const origin = offsets[idx];
              const dx = bhScreen.x - (origin.x - window.scrollX);
              const dy = bhScreen.y - (origin.y - window.scrollY);
              const angle = Math.atan2(dy, dx);
              // End point: *behind* the horizon, not in front of it. Slight
              // overshoot past the center so chars vanish inside the void.
              const tx = dx * (isHero ? 1.04 : 1.18) * xyPull;
              const ty = dy * (isHero ? 1.04 : 1.18) * xyPull;
              // Realistic bow: gravitational lensing curve perpendicular to
              // the infall direction, stronger for hero.
              const bow = isHero ? 110 : 40;
              const perpX = -Math.sin(angle) * bow * (1 - accel);
              const perpY = Math.cos(angle) * (bow * 0.72) * (1 - accel);
              // Orbital capture: chars loop the hole on a decaying orbit
              // before the plunge — captured and consumed, never effortless.
              const env = Math.sin(Math.min(1, prog * 1.12) * Math.PI);
              const oa = prog * orbitTurns * Math.PI * 2 + idx * 0.7;
              const orbX = Math.cos(oa) * orbitR * env;
              const orbY = Math.sin(oa) * orbitR * 0.62 * env;
              // Early tremble: resistance before release.
              const tremble = prog < 0.2 ? Math.sin(tnow * 0.045 + idx * 1.7) * 4 * (1 - prog * 5) : 0;
              const mx = dx * 0.5 * xyPull + perpX + orbX;
              const my = dy * 0.5 * xyPull + perpY + orbY + tremble;
              const ia = 1 - accel;
              // Quadratic bezier: start -> bow/orbit -> target (behind)
              const curX = 2 * ia * accel * mx + accel * accel * tx;
              const curY = 2 * ia * accel * my + accel * accel * ty;
              // Recede *behind* the hole: sink deep in Z (away from viewer)
              // and stretch ALONG the infall angle for tidal spaghettification.
              // Hero stretches more subtly and stays smaller overall so the
              // depth read is "receding" not "popping forward".
              const heroStretch = 1.0 + accel * 1.1;
              const heroCrush = Math.max(0.06, 1.0 - Math.pow(prog, 1.5) * 0.88);
              const normStretch = 1.0 + accel * 1.8;
              const normCrush = Math.max(0.04, 1.0 - Math.pow(prog, 1.45) * 0.94);
              const stretch = isHero ? heroStretch : normStretch;
              const crush = isHero ? heroCrush : normCrush;
              const deg = (angle * 180) / Math.PI;
              // Upright flight: only a slight lean into the fall (25%) and a
              // hint of depth tilt — chars fly readable, never sideways.
              c.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, ${(-accel * depthPush).toFixed(0)}px) rotateZ(${(deg * 0.25).toFixed(1)}deg) rotateX(${(accel * rotAmt * 0.3).toFixed(0)}deg) scale(${stretch.toFixed(2)}, ${crush.toFixed(2)})`;
              // Heat flare, quantized: glow repaints ~6x per flight instead of
              // every tick (motion stays 60fps, paint cost collapses).
              const heatStep = prog < 0.52 ? 0 : (prog < 0.84 ? 1 : 2);
              const glowQ = Math.round(Math.sin(Math.min(1, prog) * Math.PI) * 5);
              if (c._heatStep !== heatStep || c._glowQ !== glowQ) {
                c._heatStep = heatStep;
                c._glowQ = glowQ;
                c.style.color = ['#ff6600', '#ffe9b8', '#ff5010'][heatStep];
                c.style.textShadow = `0 0 ${8 + glowQ * 7}px rgba(255, ${170 - heatStep * 30}, 40, 0.95)`;
              }
              // Vanish INTO the void: fade starts early so no binary wall ever
              // sits on screen — the old slide dissolves as it flies, clearing
              // the stage before the next slide arrives.
              const tailFade = prog < 0.5 ? 1 - Math.pow(prog, 1.2) * 0.55 : Math.max(0, 1 - (prog - 0.5) / 0.5);
              c.style.opacity = tailFade.toFixed(2);
              c._flyDone = (prog >= 1);
            }
            const boxFade = Math.max(0, 1.0 - Math.pow(ft, 1.4));
            boxes.forEach(b => b.style.opacity = boxFade.toFixed(2));
            card.style.opacity = Math.max(0, 1.0 - Math.pow(ft, 1.4)).toFixed(2);
          }
        });
        flightTl.eventCallback('onReverseComplete', resetChars);

        // ----------------------------------------------------------------------
        // SCROLLTRIGGER: plain trigger, no scrubbed animation, so nothing ever
        // fights the flight timeline for progress.
        // ----------------------------------------------------------------------
        const cardST = ScrollTrigger.create({
          trigger: card,
          start: isHero ? "top top" : "top 30%",
          // Window (100%) stays under the card spacing (122vh) so two cards
          // are never mid-transition at once — that overlap read as "messy".
          end: isHero ? "+=70%" : "+=100%",
          onUpdate: (self) => {
            // Pure scroll-mapped states (HOLD -> WAVE -> POWDER). Same
            // progress always renders the same pixels: nothing to flap,
            // strand, or tilt. Backing up even a bit restores letters.
            const p = self.progress;
            if (p < HOLD_END) {
              if (p <= 0.03) resetChars();
              else renderScramble(p);
              return;
            }
            if (p < WAVE_END) {
              renderScramble(p);
              return;
            }
            renderPowder(p);
          },
          onLeave: () => renderPowder(1),
          onLeaveBack: () => resetChars()
        });
        createdTriggers.push(cardST);
        cardWatch.push({ st: cardST, card, lastP: 0, stableSince: 0, resetChars, renderScramble, renderPowder });

        // Ambient parallax: a whisper of drift while the slide holds center.
        // One compositor transform, zero layout cost. The deck rhythm comes
        // from staging, not from constant motion.
        const glide = gsap.fromTo(card, { y: 40 }, {
          y: -40,
          ease: 'none',
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true }
        });
        createdTriggers.push(glide);
        if (glide.scrollTrigger) createdTriggers.push(glide.scrollTrigger);

        // Deck furniture: slide counter follows the centered slide; hairline
        // tracks whole-page progress. Both pointer-transparent, zero layout.
        const counterEl = document.getElementById('deck-counter');
        if (counterEl) {
          // Total from data (static): hero + projects + stack. Never derived
          // from DOM timing, so the placeholder can never survive a race.
          const total = String(1 + projects.length + 1).padStart(2, '0');
          counterEl.textContent = `01 / ${total}`;
          cards.forEach((c, i) => {
            const num = String(i + 1).padStart(2, '0');
            const st = ScrollTrigger.create({
              trigger: c,
              start: 'top center',
              end: 'bottom center',
              onToggle: (self) => {
                if (self.isActive && counterEl) counterEl.textContent = `${num} / ${total}`;
              }
            });
            createdTriggers.push(st);
          });
        }
        const hairline = gsap.fromTo('#deck-progress-bar', { scaleX: 0 }, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 }
        });
        createdTriggers.push(hairline);
        if (hairline.scrollTrigger) createdTriggers.push(hairline.scrollTrigger);
      });

      // Finale (dive -> black -> white -> solar system) is owned by the
      // canvas finale trigger in BlackHoleCanvas — overlay, camera and
      // scene swap all live there so scroll-forward and scroll-back share
      // one reversible mapping. Nothing overlay-related lives here.

      // Stop-watchdog: fires even with hands off the wheel. Keeps the binary
      // flicker alive when stopped mid-wave, launches the flight the instant
      // progress reaches lock, and — stopped dead on fully-binary text —
      // launches after a 900ms dwell. Mirrors the trigger rules so scrolling
      // back up always restores. No state can ever look stuck.
      // Stop-watchdog: monitors card states and guarantees that when a user
      // stops scrolling or scrolls backward, text NEVER stays stuck in binary or tilted.
      const watchdog = setInterval(() => {
        // Flicker upkeep only: no timelines exist, so there is nothing to
        // launch, reverse, or strand. Binary chars shimmer while visible.
        const now = performance.now();
        const live = container.querySelectorAll('.char');
        for (let i = 0; i < live.length; i++) {
          const c = live[i];
          if (c._swallowState === 1 && now - c._lastFlip > 110) {
            c.textContent = Math.random() > 0.5 ? '1' : '0';
            c._lastFlip = now;
          }
        }
      }, 120);

      // Recalculate all trigger positions once fonts and elements are rendered
      ScrollTrigger.refresh();

      // Remount sync: after an HMR swap or a mid-page reload, derive every
      // card's character state from live scroll truth immediately — never
      // wait for the next scroll event, never strand a torn frame.
      // (Literals mirror per-card HOLD_END 0.62 / WAVE_END 0.74, which live
      // inside the card closure and aren't visible out here.)
      for (const w of cardWatch) {
        const p = w.st.progress;
        if (p < 0.62) w.resetChars();
        else if (p < 0.74) w.renderScramble(p);
        else w.renderPowder(p);
      }

      // Store watchdog for cleanup
      container._watchdog = watchdog;
    });

    return () => {
      if (settleTimer) clearTimeout(settleTimer);
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
      <div id="deck-progress"><div id="deck-progress-bar" /></div>
      <div id="deck-counter">{`01 / ${String(1 + projects.length + 1).padStart(2, '0')}`}</div>
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
      <div className="scroll-end-trigger" style={{ height: '260vh', width: '100%' }} />
    </>
  );
}
