# Live Project Context: MaheswarPraveen.github.io

**Last Synced:** 2026-09-04 11:08:32

## Current Focus & Active State

- Directive: we missed the bveritucal top view the white blank at the end. why is this happening. also veryy laggy and also not slide by slide and black hole not interactive and not even that small at initial pos
- Rationale: Diagnosis: 1) Top view & white flash: I had removed 'pin: true' shrinking the page height, and the scroll-end div had 0 height so it couldn't be scrolled into. The top-down view was also missing from the timeline. 2) Lag: 'samples: 4' on the custom EffectComposer WebGLRenderTarget was running 4x MSAA, dropping frames heavily. 3) Not slide-by-slide: Removed pinning without providing CSS scroll snapping fallback. 4) Too big: I had accidentally increased the particle radius formula from 1.85 to 2.0. Fix: Added CSS scroll-snap, removed MSAA for performance, restored top-down cam plunge, gave the trigger div 50vh height, and reverted the original smaller BH radii.
- Updated `CONTEXT.md` (+3/-19 lines).

## Recent Context Stream

- **[antigravity]** (2026-09-04 04:56:00): and ineractive black hole is no more? not ripple waves? slides go above and bit and then again repositions to middle?
  *Rationale:* Diagnosis: 1) Interactive BH blocked by '#ui-container' expanding to 100% width and having 'pointer-events: auto'. 2) Ripple waves were imperceptible because the Keplerian rotation speed was reduced b
- **[antigravity]** (2026-09-04 04:57:14): **Web Dev Libraries**\nLenis  smooth scroll...
  *Rationale:* The user provided a comprehensive roadmap of advanced visual features and library integrations. Because this involves a massive architectural shift (moving CPU particles to custom GLSL GPU shaders, ad
- **[antigravity]** (2026-09-04 05:11:53): everything is completely destroyed, check yourself
  *Rationale:* Diagnosis: 1) The 'BokehPass' completely blurred the screen into a dark mush because its 'focus' depth buffer target wasn't dynamically synced per-frame to the camera's Z distance. 2) The Gravitationa
- **[antigravity]** (2026-09-04 05:29:08): dude as soon as i loaded tmy name was absorbed into back hole. also no waves particles. and black hole is too fast
  *Rationale:* Diagnosis: 1) Instant Swallow: ScrollTrigger start was set to 'center 55%', which triggers instantly on load because the hero card is already past 55vh. Changed to 'top -50px' so user MUST scroll down
- **[antigravity]** (2026-09-04 05:36:23): we missed the bveritucal top view the white blank at the end. why is this happening. also veryy laggy and also not slide by slide and black hole not interactive and not even that small at initial pos
  *Rationale:* Diagnosis: 1) Top view & white flash: I had removed 'pin: true' shrinking the page height, and the scroll-end div had 0 height so it couldn't be scrolled into. The top-down view was also missing from 

## Open Decisions & Next Steps

- Continue active implementation according to current focus.
- Refer to DEVLOG.md for historical architecture decisions.
