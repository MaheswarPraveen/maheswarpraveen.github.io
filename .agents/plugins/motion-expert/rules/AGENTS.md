# Motion Design Standards

Whenever the user requests complex UI animations, scroll-choreography, or DOM element distortion (like "spaghettification"):

1. **NO MANUAL MATH:** Do not use `requestAnimationFrame` loops with `getBoundingClientRect()` and manual Euclidean distance calculations. It is brittle and glitchy.
2. **USE GSAP:** Always use **GSAP (GreenSock)** and **ScrollTrigger** (both are free/open-source for non-commercial).
3. **TEXT SPLITTING:** For word or character level animations, use **SplitType** (a free, lightweight alternative to GSAP SplitText).
4. **WebGL:** Three.js is permitted for the canvas background, but bind its properties to the GSAP timeline using `gsap.to()` or `ScrollTrigger` for flawless synchronization.
