import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function useMatrixSwallow(cardRef, { isHero = false, isStack = false } = {}) {
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Determine target selectors for character splitting
    let targetSelectors = '.section-title, .tag, .project-index, .section-desc';
    if (isHero) {
      targetSelectors = '.name-title, .hero-subtitle, .clean-link';
    } else if (isStack) {
      targetSelectors = '.section-title, .project-index, .stack-label, .stack-val';
    }

    const split = new SplitType(card.querySelectorAll(targetSelectors), {
      types: 'chars'
    });

    const chars = Array.from(card.querySelectorAll('.char'));
    const boxes = Array.from(card.querySelectorAll('.tag, .section-title, .hero-links, .clean-link, .stack-col'));
    const totalChars = chars.length;

    chars.forEach((c) => {
      c.dataset.orig = c.textContent;
    });

    let charOffsets = [];
    function measureCharPositions() {
      charOffsets = chars.map((c) => {
        const rect = c.getBoundingClientRect();
        return { x: rect.left, y: rect.top };
      });
    }

    measureCharPositions();

    // 1. SLIDE-BY-SLIDE SMOOTH FADE IN
    let fadeInTrigger = null;
    if (!isHero) {
      fadeInTrigger = ScrollTrigger.create({
        trigger: card,
        start: "top 95%",
        end: "top 5%",
        scrub: 1.0,
        onUpdate: (self) => {
          if (self.progress < 1.0) {
            const opacity = Math.min(1.0, self.progress * 1.5);
            const scale = 0.96 + 0.04 * self.progress;
            card.style.opacity = opacity.toFixed(2);
            card.style.transform = `scale(${scale.toFixed(3)})`;
          }
        }
      });
    }

    // 2. PINNED SLIDE SCRAMBLE & 3D ORBITAL SWALLOW (SNAPPY SCROLL GAP: +=45%)
    let lastStep = -1;

    const pinTrigger = ScrollTrigger.create({
      trigger: card,
      start: "top top",
      end: isHero ? "+=38%" : "+=48%", // Snappy, comfortable scroll distance!
      pin: true,
      pinSpacing: true,
      scrub: 1.0,
      onEnter: () => measureCharPositions(),
      onEnterBack: () => measureCharPositions(),
      onUpdate: (self) => {
        const p = self.progress;

        // Step quantization to eliminate wheel jitter & layout thrashing
        const currentStep = Math.floor(p * 36);
        if (currentStep === lastStep) return;
        lastStep = currentStep;

        // Phase 0: Solid, pristine reading state in center of viewport
        if (p <= 0.08) {
          chars.forEach((c) => {
            if (c.textContent !== c.dataset.orig) c.textContent = c.dataset.orig;
            c.style.color = '';
            c.style.opacity = '1';
            c.style.transform = '';
            c.style.textShadow = '';
          });
          card.style.opacity = '1';
          card.style.transform = '';
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

        chars.forEach((c, idx) => {
          // Cascading digital wave from top-to-bottom
          const charStart = 0.08 + (idx / totalChars) * 0.32;
          const scrambleDuration = 0.16;
          const holdZeroDuration = 0.14;

          if (p < charStart) {
            if (c.textContent !== c.dataset.orig) c.textContent = c.dataset.orig;
            c.style.color = '';
            c.style.opacity = '1';
            c.style.transform = '';
            c.style.textShadow = '';
            return;
          }

          const localProgress = p - charStart;

          // PHASE A: Glitching / Scrambling into 0s and 1s with golden phosphor glow
          if (localProgress < scrambleDuration) {
            c.textContent = Math.random() > 0.5 ? '1' : '0';
            c.style.color = Math.random() > 0.3 ? '#ffb030' : '#ffe480';
            c.style.textShadow = '0 0 8px rgba(255, 176, 48, 0.6)';
            c.style.opacity = '1';
            c.style.transform = '';
          }
          // PHASE B: Locks into a solid glowing golden '0'
          else if (localProgress < scrambleDuration + holdZeroDuration) {
            c.textContent = '0';
            c.style.color = '#ffa020';
            c.style.textShadow = '0 0 10px rgba(255, 160, 32, 0.7)';
            c.style.opacity = '1';
            c.style.transform = '';
          }
          // PHASE C: Detaches and gets physically swallowed into the black hole!
          else {
            c.textContent = '0';
            const swallowT = Math.min(1.0, (localProgress - scrambleDuration - holdZeroDuration) / 0.30);
            const accel = Math.pow(swallowT, 2.2);

            const origin = charOffsets[idx] || { x: window.innerWidth * 0.25, y: window.innerHeight * 0.5 };
            const dx = bhScreen.x - origin.x;
            const dy = bhScreen.y - origin.y;

            // 3D curved trajectory into event horizon
            const swirlAngle = idx * 0.12 + accel * 3.5;
            const swirlX = Math.sin(swirlAngle) * 25 * (1 - accel);
            const swirlY = Math.cos(swirlAngle) * 18 * (1 - accel);

            const curX = dx * accel + swirlX;
            const curY = dy * accel + swirlY;
            const curZ = -accel * 550; // Plunges deep behind singularity

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
        });

        // Pill tags, links & containers dissolve smoothly in tandem
        const boxProgress = Math.max(0, (p - 0.45) / 0.45);
        const boxFade = Math.max(0, 1.0 - boxProgress * 1.3);
        card.style.opacity = boxFade.toFixed(2);
        boxes.forEach((b) => {
          b.style.opacity = boxFade.toFixed(2);
          b.style.borderColor = `rgba(255, 255, 255, ${(0.12 * boxFade).toFixed(3)})`;
        });
      },
      onLeave: () => {
        chars.forEach((c) => { c.textContent = '0'; c.style.opacity = '0'; });
        card.style.opacity = '0';
      },
      onLeaveBack: () => {
        chars.forEach((c) => {
          c.textContent = c.dataset.orig;
          c.style.color = '';
          c.style.opacity = '1';
          c.style.transform = '';
          c.style.textShadow = '';
        });
        card.style.opacity = '1';
        card.style.transform = '';
        boxes.forEach((b) => {
          b.style.borderColor = '';
          b.style.opacity = '1';
        });
      }
    });

    return () => {
      if (fadeInTrigger) fadeInTrigger.kill();
      pinTrigger.kill();
      split.revert();
    };
  }, [isHero, isStack]);
}
