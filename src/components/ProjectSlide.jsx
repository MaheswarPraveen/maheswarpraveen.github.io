import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSlide({ project, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Split text into characters for matrix scramble
    const split = new SplitType(card.querySelectorAll('.section-title, .tag, .project-index, .section-desc'), {
      types: 'chars'
    });

    const chars = Array.from(card.querySelectorAll('.char'));
    const boxes = Array.from(card.querySelectorAll('.tag, .section-title'));
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

    const trigger = ScrollTrigger.create({
      trigger: card,
      start: "top top",      // Card top meets screen top -> centered content pins!
      end: "+=110%",         // Scroll runway while pinned (1.1 viewports)
      pin: true,             // GSAP locks card in place: NO adjacent cards visible!
      pinSpacing: true,      // Holds subsequent cards completely off-screen below fold!
      scrub: 1.2,
      onEnter: () => measureCharPositions(),
      onEnterBack: () => measureCharPositions(),
      onUpdate: (self) => {
        const p = self.progress;

        // Phase 0: Pristine solid reading state (centered in viewport)
        if (p <= 0.10) {
          chars.forEach((c) => {
            if (c.textContent !== c.dataset.orig) c.textContent = c.dataset.orig;
            c.style.color = '';
            c.style.opacity = '1';
            c.style.transform = '';
            c.style.textShadow = '';
          });
          card.style.opacity = '1';
          boxes.forEach((b) => {
            b.style.opacity = '1';
            b.style.borderColor = '';
          });
          return;
        }

        if (charOffsets.length !== totalChars) measureCharPositions();
        const bhScreen = window.__getBHScreenCoord ? window.__getBHScreenCoord() : { x: window.innerWidth * 0.7, y: window.innerHeight * 0.5 };

        chars.forEach((c, idx) => {
          // Cascading wave ripples down the card
          const charStart = 0.10 + (idx / totalChars) * 0.32;
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

          // PHASE A: Glitching / Scrambling into 0s and 1s
          if (localProgress < scrambleDuration) {
            c.textContent = Math.random() > 0.5 ? '1' : '0';
            c.style.color = Math.random() > 0.3 ? '#ffb030' : '#ffe480';
            c.style.textShadow = '0 0 6px rgba(255, 176, 48, 0.4)';
            c.style.opacity = '1';
            c.style.transform = '';
          }
          // PHASE B: Locks into a solid glowing golden '0'
          else if (localProgress < scrambleDuration + holdZeroDuration) {
            c.textContent = '0';
            c.style.color = '#ffa020';
            c.style.textShadow = '0 0 8px rgba(255, 160, 32, 0.6)';
            c.style.opacity = '1';
            c.style.transform = '';
          }
          // PHASE C: Detaches and gets physically swallowed into the black hole!
          else {
            c.textContent = '0';
            const swallowT = Math.min(1.0, (localProgress - scrambleDuration - holdZeroDuration) / 0.34);
            const accel = Math.pow(swallowT, 2.2);

            const origin = charOffsets[idx] || { x: window.innerWidth * 0.2, y: window.innerHeight * 0.5 };
            const dx = bhScreen.x - origin.x;
            const dy = bhScreen.y - origin.y;

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

        // Pill tags & section boxes dissolve smoothly towards the end of swallow
        const boxProgress = Math.max(0, (p - 0.50) / 0.40);
        const boxFade = Math.max(0, 1.0 - boxProgress * 1.3);
        card.style.opacity = boxFade;
        boxes.forEach((b) => {
          b.style.opacity = boxFade;
          b.style.borderColor = `rgba(255, 255, 255, ${0.08 * boxFade})`;
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
        boxes.forEach((b) => {
          b.style.borderColor = '';
          b.style.opacity = '1';
        });
      }
    });

    return () => {
      trigger.kill();
      split.revert();
    };
  }, [project]);

  return (
    <section className="card content-card" ref={cardRef} data-offset={index + 1}>
      <span className="project-index">{project.id} // {project.category}</span>
      <h2 className="section-title">{project.title}</h2>
      <p className="section-desc">{project.description}</p>
      <div className="tag-cloud">
        {project.tags.map((tag, tIdx) => (
          <span className="tag" key={tIdx}>{tag}</span>
        ))}
      </div>
    </section>
  );
}
