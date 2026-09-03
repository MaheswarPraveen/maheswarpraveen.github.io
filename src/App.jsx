import React from 'react';
import BlackHoleCanvas from './components/BlackHoleCanvas';
import HeroSlide from './components/HeroSlide';
import ProjectSlide from './components/ProjectSlide';
import StackSlide from './components/StackSlide';
import { projects } from './data/projects';

export default function App() {
  return (
    <>
      {/* 60+ FPS Three.js WebGL Black Hole Canvas */}
      <BlackHoleCanvas />

      {/* Editorial Engineering Dossier UI — Pinned 100vh Slides */}
      <main id="ui-container">
        {/* Initial Hero View */}
        <HeroSlide />

        {/* Project Dossier Slides */}
        {projects.map((project, idx) => (
          <ProjectSlide key={project.id} project={project} index={idx} />
        ))}

        {/* Technical Capabilities Slide */}
        <StackSlide />
      </main>

      {/* Smooth End Runway */}
      <div className="scroll-end-trigger" />
    </>
  );
}
