# Live Project Context: MaheswarPraveen.github.io

**Last Synced:** 2026-09-04 15:21:59

## Current Focus & Active State

- Directive: no dont scale up glowing ring , only scale up black singularity., also it should be fully optimized to work smoothl6
- Rationale: Diagnosis: 1) Glowing rings were scaled with the black spot. Reverted scale on halo/outerRing meshes. 2) User reported lag despite GPU particles. The UnrealBloomPass and 1.5x pixel ratio were causing massive GPU fill-rate overhead on high-DPI displays. Fix: Capped renderer pixel ratio to 1.0 (eliminates 4x pixel overhead on Retina/4K) and downscaled the UnrealBloomPass internal resolution vector by 50% (preserves the soft glow but computes 4x faster).
- Applied workspace modifications (+0/-10 lines).

## Recent Context Stream

- **[antigravity]** (2026-09-04 05:11:53): everything is completely destroyed, check yourself
  *Rationale:* Diagnosis: 1) The 'BokehPass' completely blurred the screen into a dark mush because its 'focus' depth buffer target wasn't dynamically synced per-frame to the camera's Z distance. 2) The Gravitationa
- **[antigravity]** (2026-09-04 05:29:08): dude as soon as i loaded tmy name was absorbed into back hole. also no waves particles. and black hole is too fast
  *Rationale:* Diagnosis: 1) Instant Swallow: ScrollTrigger start was set to 'center 55%', which triggers instantly on load because the hero card is already past 55vh. Changed to 'top -50px' so user MUST scroll down
- **[antigravity]** (2026-09-04 05:36:23): we missed the bveritucal top view the white blank at the end. why is this happening. also veryy laggy and also not slide by slide and black hole not interactive and not even that small at initial pos
  *Rationale:* Diagnosis: 1) Top view & white flash: I had removed 'pin: true' shrinking the page height, and the scroll-end div had 0 height so it couldn't be scrolled into. The top-down view was also missing from 
- **[antigravity]** (2026-09-04 05:45:33): the verical is only happening at end and in a terrible way, everythibng is still laggyy, the binary only swallowed by black hole at too top and its alggy choopy and not ina smooth way.nothing is smooth. finds most effective and effienicent way to fix it with breaking any current creativity code, also the black spot inside hole is small adf
  *Rationale:* Diagnosis: 1) Lag: The CPU was calculating Math.sin/Math.cos and updating BufferAttribute buffers 14,000 times every frame. 2) Swallow timing: Text flying 'too top' because the user was actively scrol
- **[antigravity]** (2026-09-04 09:37:59): no dont scale up glowing ring , only scale up black singularity., also it should be fully optimized to work smoothl6
  *Rationale:* Diagnosis: 1) Glowing rings were scaled with the black spot. Reverted scale on halo/outerRing meshes. 2) User reported lag despite GPU particles. The UnrealBloomPass and 1.5x pixel ratio were causing 

## Open Decisions & Next Steps

- Continue active implementation according to current focus.
- Refer to DEVLOG.md for historical architecture decisions.
