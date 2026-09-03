import React, { useRef } from 'react';
import { personalInfo } from '../data/projects';
import { useMatrixSwallow } from '../hooks/useMatrixSwallow';

export default function HeroSlide() {
  const heroRef = useRef(null);

  // Apply the 0s and 1s matrix scramble & 3D black hole swallow to the Hero slide!
  useMatrixSwallow(heroRef, { isHero: true });

  return (
    <header className="card hero-card" ref={heroRef} data-offset="0">
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
  );
}
