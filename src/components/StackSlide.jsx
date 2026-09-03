import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { technicalSkills } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function StackSlide() {
  const stackRef = useRef(null);

  useEffect(() => {
    const card = stackRef.current;
    if (!card) return;

    const trigger = ScrollTrigger.create({
      trigger: card,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
      scrub: 1.0
    });

    return () => trigger.kill();
  }, []);

  return (
    <section className="card content-card" ref={stackRef} data-offset="8">
      <span className="project-index">07 // STACK</span>
      <h2 className="section-title">Technical Capabilities</h2>
      <div className="stack-grid">
        {technicalSkills.map((skill, idx) => (
          <div className="stack-col" key={idx}>
            <span className="stack-label">{skill.label}</span>
            <span className="stack-val">{skill.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
