import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSlide() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "+=70%",
      pin: true,
      pinSpacing: true,
      scrub: 1.0,
      onUpdate: (self) => {
        el.style.opacity = Math.max(0, 1.0 - self.progress * 1.5);
      }
    });

    return () => trigger.kill();
  }, []);

  return (
    <header className="card hero-card" ref={heroRef} data-offset="0">
      <h1 className="name-title">{personalInfo.name}</h1>
      <p className="hero-subtitle">{personalInfo.title}</p>
      
      <div className="hero-links">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="clean-link">GitHub</a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="clean-link">LinkedIn</a>
      </div>
    </header>
  );
}
