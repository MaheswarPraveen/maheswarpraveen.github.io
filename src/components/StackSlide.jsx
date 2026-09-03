import React, { useRef } from 'react';
import { technicalSkills } from '../data/projects';
import { useMatrixSwallow } from '../hooks/useMatrixSwallow';

export default function StackSlide() {
  const stackRef = useRef(null);

  // Apply matrix scramble & 3D black hole swallow to Technical Capabilities!
  useMatrixSwallow(stackRef, { isStack: true });

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
