import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlackHoleCanvas from './components/BlackHoleCanvas';
import HeroSlide from './components/HeroSlide';
import ProjectSlide from './components/ProjectSlide';
import StackSlide from './components/StackSlide';
import { projects } from './data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Terminal Whiteout Swallow Flash (Only at the very end after all slides are swallowed!)
    const trigger = ScrollTrigger.create({
      trigger: '.scroll-end-trigger',
      start: "top 80%",
      end: "bottom bottom",
      scrub: 1.0,
      onUpdate: (self) => {
        const overlay = document.getElementById('flash-overlay');
        if (!overlay) return;

        // Terminal swallow: blinding white flash followed by event horizon singularity void
        if (self.progress < 0.6) {
          overlay.style.backgroundColor = '#ffffff';
          overlay.style.opacity = (self.progress / 0.6).toFixed(2);
        } else {
          overlay.style.backgroundColor = '#000000';
          overlay.style.opacity = ((self.progress - 0.6) / 0.4).toFixed(2);
        }
      }
    });

    return () => trigger.kill();
  }, []);

  return (
    <>
      {/* Terminal Swallow Whiteout Flash Overlay */}
      <div id="flash-overlay" />

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
