# Live Project Context: MaheswarPraveen.github.io

**Last Synced:** 2026-09-04 10:46:32

## Current Focus & Active State

- Directive: everything is completely destroyed, check yourself
- Rationale: Diagnosis: 1) The 'BokehPass' completely blurred the screen into a dark mush because its 'focus' depth buffer target wasn't dynamically synced per-frame to the camera's Z distance. 2) The Gravitational Lensing shader had a hard UV cutoff ('dist < radius') that caused extreme UV tearing and a giant glowing sphere boundary. Fix: Disabled BokehPass (we will implement it later via the GPU Particle size variance natively). Re-wrote the Lensing shader to use 'smoothstep' decay so the warp smoothly blends back to 0 without any tearing.
- Updated `CONTEXT.md` (+3/-17 lines).

## Recent Context Stream

- **[antigravity]** (2026-09-04 04:11:48): its changing to fast to binary you frciking stupid and also i have to scroll to much for next slide to come and fucking also why the fuck its stuck at binary if dont scroll i said it should fucking go away once binary. also fuckin stuckky
  *Rationale:* The user's core issue is that the scramble and flight are currently tied to scroll 'scrubbing' - meaning if they stop scrolling, the animation stops, leaving it stuck in binary. Additionally, the scro
- **[antigravity]** (2026-09-04 04:30:27): dude check the scroll time inbetwwen , the stucking while binary goes to black hole , and the way cheaply the letters turn to binary, check yourself, tell me whats happening. then say the solution and we'll fix
  *Rationale:* Diagnosis: 1) 'Scroll time inbetween': Pinned sections force the user to scroll through dead space. Removing pin: true will let the layout flow naturally. 2) 'Stucking': The user scrolls faster than t
- **[antigravity]** (2026-09-04 04:56:00): and ineractive black hole is no more? not ripple waves? slides go above and bit and then again repositions to middle?
  *Rationale:* Diagnosis: 1) Interactive BH blocked by '#ui-container' expanding to 100% width and having 'pointer-events: auto'. 2) Ripple waves were imperceptible because the Keplerian rotation speed was reduced b
- **[antigravity]** (2026-09-04 04:57:14): **Web Dev Libraries**\nLenis  smooth scroll...
  *Rationale:* The user provided a comprehensive roadmap of advanced visual features and library integrations. Because this involves a massive architectural shift (moving CPU particles to custom GLSL GPU shaders, ad
- **[antigravity]** (2026-09-04 05:11:53): everything is completely destroyed, check yourself
  *Rationale:* Diagnosis: 1) The 'BokehPass' completely blurred the screen into a dark mush because its 'focus' depth buffer target wasn't dynamically synced per-frame to the camera's Z distance. 2) The Gravitationa

## Open Decisions & Next Steps

- Continue active implementation according to current focus.
- Refer to DEVLOG.md for historical architecture decisions.
