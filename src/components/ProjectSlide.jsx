import React, { useRef } from 'react';
import { useMatrixSwallow } from '../hooks/useMatrixSwallow';

export default function ProjectSlide({ project, index }) {
  const cardRef = useRef(null);

  // Apply the 0s and 1s matrix scramble, slide fade-in, and 3D swallow
  useMatrixSwallow(cardRef, { isHero: false });

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
