# Live Project Context: MaheswarPraveen.github.io

**Last Synced:** 2026-09-04 02:44:43

## Current Focus & Active State

- Directive: WHERES THE 0SAND1S EFFECT, WHERES THE SLIDE BY SLIDE FADE INS AND ITS JUST PLAIN SCROLLING LONG NOW. WTF. ALSO WHY DOESNT INITAL NAME AND ALL DOESNT HAVE 01S EFFECT TOO. COME ON
- Rationale: Investigating why 0s and 1s effect and slide pinning didn't work in React: 1) Checking console errors (SplitType import/ESM compatibility). 2) Removing perspective from #ui-container which breaks GSAP position:fixed pinning. 3) Adding the 0s and 1s binary swallow effect to the Hero slide as requested.
- Updated `CONTEXT.md` (+3/-20 lines).

## Recent Context Stream

- **[antigravity]** (2026-09-03 20:44:16): WHY CANT WE USE THINGS LIKE REACT
  *Rationale:* Explaining why the repository was initially created as vanilla HTML/CSS/Three.js (zero-build, native GitHub Pages hosting), comparing the trade-offs with React/Vite/R3F, and offering to migrate immedi
- **[antigravity]** (2026-09-03 20:49:08): CAN WE USE IT IN GITHUB PAGE AND TELL ME THE ADVANTAGES
  *Rationale:* Answering whether React can be deployed on GitHub Pages (yes, via Vite build or GitHub Actions CI/CD) and detailing the practical advantages of React for this portfolio.
- **[antigravity]** (2026-09-03 20:58:58): YES
  *Rationale:* User approved migration to Vite + React. Initializing Vite project, creating modular components (BlackHoleCanvas, HeroSlide, ProjectSlide, StackSlide), centralizing project data, and configuring GitHu
- **[antigravity]** (2026-09-03 21:05:25): FIRST SHOW ME
  *Rationale:* Starting local Vite server on port 8080 and capturing visual screenshots across scroll states (Hero, Project 01, Infall) to display to the user directly.
- **[antigravity]** (2026-09-03 21:09:24): WHERES THE 0SAND1S EFFECT, WHERES THE SLIDE BY SLIDE FADE INS AND ITS JUST PLAIN SCROLLING LONG NOW. WTF. ALSO WHY DOESNT INITAL NAME AND ALL DOESNT HAVE 01S EFFECT TOO. COME ON
  *Rationale:* Investigating why 0s and 1s effect and slide pinning didn't work in React: 1) Checking console errors (SplitType import/ESM compatibility). 2) Removing perspective from #ui-container which breaks GSAP

## Open Decisions & Next Steps

- Continue active implementation according to current focus.
- Refer to DEVLOG.md for historical architecture decisions.
