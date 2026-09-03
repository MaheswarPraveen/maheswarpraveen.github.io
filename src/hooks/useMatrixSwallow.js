import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function useMatrixSwallow(cardRef, { isHero = false } = {}) {
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Split text into characters
    const targetSelectors = isHero
      ? '.name-title, .hero-subtitle, .clean-link'
      : '.section-title, .tag, .project-index, .section-desc';

    const split = new SplitType(card.querySelectorAll(targetSelectors), {
      types: 'chars'
    });

    const chars = Array.from(card.querySelectorAll('.char'));
    const boxes = Array.from(card.querySelectorAll('.tag, .section-title, .hero-links, .clean-link'));
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

    // Measure once on mount and when scrolling near
    measureCharPositions();

    // 1. SLIDE-BY-SLIDE FADE IN (As slide scrolls up into center view)
    let fadeInTrigger = null;
    if (!isHero) {
      fadeInTrigger = ScrollTrigger.create({
        trigger: card,
        start: "top 90%",
        end: "top 10%",
        scrub: 1.0,
        onUpdate: (self) => {
          if (self.progress < 1.0) {
            const opacity = Math.min(1.0, self.progress * 1.4);
            const scale = 0.95 + 0.05 * self.progress;
            card.style.opacity = opacity.toFixed(2);
            card.style.transform = `scale(${scale.toFixed(3)})`;
          }
        }
      });
    }

    // 2. PINNED CENTER MATRIX SCRAMBLE & 3D SWALLOW
    const pinTrigger = ScrollTrigger.create({
      trigger: card,
      start: "top top",
      end: isHero ? "+=80%" : "+=115%",
      pin: true,
      pinSpacing: true,
      scrub: 1.2,
      onEnter: () => measureCharPositions(),
      onEnterBack: () => measureCharPositions(),
      onUpdate: (self) => {
        const p = self.progress;

        // Phase 0: Solid, pristine reading state in center of viewport
        if (p <= 0.10) {
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
          // Cascading digital wave from top-to-bottom across the slide
          const charStart = 0.10 + (idx / totalChars) * 0.30;
          const scrambleDuration = 0.16;
          const holdZeroDuration = 0.14;

          // Before cascade reaches this character
          if (p < charStart) {
            if (c.textContent !== c.dataset.orig) c.textContent = c.dataset.orig;
            c.style.color = '';
            c.style.opacity = '1';
            c.style.transform = '';
            c.style.textShadow = '';
            return;
          }

          const localProgress = p - charStart;

          // PHASE A: Glitching / Scrambling into 0s and 1s
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
            const swallowT = Math.min(1.0, (localProgress - scrambleDuration - holdZeroDuration) / 0.32);
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

            c.style.transform = `translate3d(${curX}px, ${curY}px, ${curZ}px) rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${scaleX}, ${scaleY})`;
            c.style.color = accel < 0.5 ? '#ff9010' : '#dd3000';
            c.style.textShadow = `0 0 ${Math.max(2, 12 * (1 - accel))}px rgba(255, 120, 20, 0.8)`;
            c.style.opacity = remainingOpacity;
          }
        });

        // Pill tags, links & containers dissolve smoothly in tandem
        const boxProgress = Math.max(0, (p - 0.48) / 0.42);
        const boxFade = Math.max(0, 1.0 - boxProgress * 1.3);
        card.style.opacity = boxFade;
        boxes.forEach((b) => {
          b.style.opacity = boxFade;
          b.style.borderColor = `rgba(255, 255, 255, ${0.12 * boxFade})`;
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
  }, [isHero]);
}
