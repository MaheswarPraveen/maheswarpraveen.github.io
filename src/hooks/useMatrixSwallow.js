import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function useMatrixSwallow(cardRef, { isHero = false, isStack = false } = {}) {
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let targetSelectors = '.section-title, .tag, .project-index, .section-desc';
    if (isHero) {
      targetSelectors = '.name-line, .hero-subtitle, .clean-link';
    } else if (isStack) {
      targetSelectors = '.section-title, .project-index, .stack-label, .stack-val';
    }

    const split = new SplitType(card.querySelectorAll(targetSelectors), {
      types: 'chars'
    });

    const chars = Array.from(card.querySelectorAll('.char'));
    const boxes = Array.from(card.querySelectorAll('.tag, .section-title, .hero-links, .clean-link, .stack-col'));
    const totalChars = chars.length;

    // Cache original characters and initialize state
    chars.forEach((c) => {
      c.dataset.orig = c.textContent;
      c._state = 0; // 0: original, 1: scrambling, 2: locked_zero, 3: swallowed
    });

    let charOffsets = [];
    function measureCharPositions() {
      charOffsets = chars.map((c) => {
        const rect = c.getBoundingClientRect();
        return { x: rect.left, y: rect.top };
      });
    }

    measureCharPositions();

    // ------------------------------------------------------------------------
    // DECOUPLED SILKY RAF FLICKER (Zero layout reflow during mouse wheel scroll)
    // ------------------------------------------------------------------------
    let rafId;
    let frameCount = 0;
    function flickerLoop() {
      rafId = requestAnimationFrame(flickerLoop);
      frameCount++;
      // Flip binary glyphs every 4th frame (~15Hz silky cyber cadence)
      if (frameCount % 4 === 0) {
        for (let i = 0; i < totalChars; i++) {
          if (chars[i]._state === 1) {
            chars[i].textContent = Math.random() > 0.5 ? '1' : '0';
          }
        }
      }
    }
    flickerLoop();

    // ------------------------------------------------------------------------
    // SNAPPY PINNED SLIDE SCROLL (Zero dead gaps: +=24% duration)
    // ------------------------------------------------------------------------
    const pinTrigger = ScrollTrigger.create({
      trigger: card,
      start: "top top",
      end: isHero ? "+=20%" : "+=26%", // Snappy, effortless slide progression!
      pin: true,
      pinSpacing: true,
      scrub: 0.8, // Snappy 0.8s damping
      onEnter: () => measureCharPositions(),
      onEnterBack: () => measureCharPositions(),
      onUpdate: (self) => {
        const p = self.progress;

        // Phase 0: Solid, pristine reading state
        if (p <= 0.05) {
          if (card._isPris) return;
          card._isPris = true;
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
        card._isPris = false;

        if (charOffsets.length !== totalChars) measureCharPositions();

        const bhScreen = window.__getBHScreenCoord
          ? window.__getBHScreenCoord()
          : { x: window.innerWidth * 0.72, y: window.innerHeight * 0.5 };

        // Process characters with discrete state transitions (no continuous textContent thrashing!)
        for (let idx = 0; idx < totalChars; idx++) {
          const c = chars[idx];
          const charStart = 0.05 + (idx / totalChars) * 0.30;
          const scrambleDur = 0.16;
          const holdZeroDur = 0.14;

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

          // PHASE 1: Scrambling into glowing 0s and 1s
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
          // PHASE 2: Locks into a solid glowing golden '0'
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
          // PHASE 3: 3D Orbital Swallow into the Black Hole (GPU-only translation)
          else {
            if (c._state !== 3) {
              c.textContent = '0';
              c._state = 3;
            }

            const swallowT = Math.min(1.0, (localProgress - scrambleDur - holdZeroDur) / 0.32);
            const accel = Math.pow(swallowT, 2.0);

            const origin = charOffsets[idx] || { x: window.innerWidth * 0.25, y: window.innerHeight * 0.5 };
            const dx = bhScreen.x - origin.x;
            const dy = bhScreen.y - origin.y;

            // Fluid 3D spiral into event horizon
            const swirlAngle = idx * 0.10 + accel * 3.2;
            const swirlX = Math.sin(swirlAngle) * 20 * (1 - accel);
            const swirlY = Math.cos(swirlAngle) * 15 * (1 - accel);

            const curX = dx * accel + swirlX;
            const curY = dy * accel + swirlY;
            const curZ = -accel * 500;

            const scaleX = 1.0 + accel * 0.3;
            const scaleY = Math.max(0.1, 1.0 - accel * 0.8);
            const rotX = accel * 50;
            const rotZ = -accel * 15;
            const remainingOpacity = Math.max(0, 1.0 - Math.pow(swallowT, 2.2));

            c.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, ${curZ.toFixed(0)}px) rotateX(${rotX.toFixed(0)}deg) rotateZ(${rotZ.toFixed(0)}deg) scale(${scaleX.toFixed(2)}, ${scaleY.toFixed(2)})`;
            c.style.color = accel < 0.5 ? '#ff9010' : '#dd3000';
            c.style.textShadow = `0 0 ${Math.max(2, 10 * (1 - accel)).toFixed(1)}px rgba(255, 120, 20, 0.8)`;
            c.style.opacity = remainingOpacity.toFixed(2);
          }
        }

        // Pill tags & container fade in smooth unison
        const boxProgress = Math.max(0, (p - 0.40) / 0.50);
        const boxFade = Math.max(0, 1.0 - boxProgress * 1.4);
        card.style.opacity = boxFade.toFixed(2);
        boxes.forEach((b) => {
          b.style.opacity = boxFade.toFixed(2);
          b.style.borderColor = `rgba(255, 255, 255, ${(0.12 * boxFade).toFixed(3)})`;
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

    return () => {
      cancelAnimationFrame(rafId);
      pinTrigger.kill();
      split.revert();
    };
  }, [isHero, isStack]);
}
