// ==========================================================================
// MAHESWAR PRAVEEN — WEBGL BLACK HOLE & PINNED SLIDE SWALLOW ENGINE
// 100vh Pinned Slides (One Project at a Time) | Zero Screen Overlap
// Centered Matrix 0000 Swallow | Zero Blinding Flash | 60+ FPS Optimization
// ==========================================================================

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initHybridEngine);
} else {
  initHybridEngine();
}

function initHybridEngine() {
  const canvas = document.getElementById('blackhole-canvas');
  if (!canvas || typeof THREE === 'undefined') return;
  if (typeof SplitType === 'undefined' || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    setTimeout(initHybridEngine, 50);
    return;
  }

  // Split text into characters for matrix scramble
  new SplitType('.content-card .section-title, .content-card .tag, .content-card .stack-val, .content-card .stack-label, .content-card .project-index, .content-card .section-desc', { types: 'chars' });

  // Store original characters on every split span
  document.querySelectorAll('.content-card .char').forEach((el) => {
    el.dataset.orig = el.textContent;
  });

  // --------------------------------------------------------------------------
  // 1. PROCEDURAL GLOWING SPHERE TEXTURE (ZERO SQUARE PARTICLES)
  // --------------------------------------------------------------------------
  function createSphereTexture() {
    const texCanvas = document.createElement('canvas');
    texCanvas.width = 64;
    texCanvas.height = 64;
    const ctx = texCanvas.getContext('2d');

    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    grad.addColorStop(0.2, 'rgba(255, 235, 170, 0.95)');
    grad.addColorStop(0.5, 'rgba(255, 130, 30, 0.5)');
    grad.addColorStop(0.8, 'rgba(220, 50, 0, 0.15)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(texCanvas);
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    return texture;
  }

  const sphereTexture = createSphereTexture();

  // --------------------------------------------------------------------------
  // 2. SCENE & CAMERA (camZ=21, anchorX=7.0)
  // --------------------------------------------------------------------------
  const anchorX = 7.0;
  const blackHolePos = new THREE.Vector3(anchorX, 0, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  // --------------------------------------------------------------------------
  // 3. SINGULARITY & DUAL LENSING PHOTON RINGS
  // --------------------------------------------------------------------------
  const singularity = new THREE.Mesh(
    new THREE.SphereGeometry(1.65, 64, 64),
    new THREE.MeshBasicMaterial({ color: 0x000000 })
  );
  singularity.position.copy(blackHolePos);
  scene.add(singularity);

  const halo = new THREE.Mesh(
    new THREE.RingGeometry(1.65, 2.05, 80),
    new THREE.MeshBasicMaterial({ color: 0xffa040, side: THREE.DoubleSide, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending })
  );
  halo.position.copy(blackHolePos);
  halo.rotation.x = Math.PI / 2;
  scene.add(halo);

  const outerRing = new THREE.Mesh(
    new THREE.RingGeometry(2.05, 2.35, 80),
    new THREE.MeshBasicMaterial({ color: 0xff5500, side: THREE.DoubleSide, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending })
  );
  outerRing.position.copy(blackHolePos);
  outerRing.rotation.x = Math.PI / 2;
  scene.add(outerRing);

  // Vertical Einstein Lensing Arch
  const verticalHalo = new THREE.Mesh(
    new THREE.RingGeometry(1.65, 1.95, 80),
    new THREE.MeshBasicMaterial({ color: 0xffaa40, side: THREE.DoubleSide, transparent: true, opacity: 0.65, blending: THREE.AdditiveBlending })
  );
  verticalHalo.position.copy(blackHolePos);
  verticalHalo.rotation.y = 0.15;
  scene.add(verticalHalo);

  // --------------------------------------------------------------------------
  // 4. ACCRETION DISK: 24,000 LENGTHY PARTICLES (OPTIMIZED GC & MATH)
  // --------------------------------------------------------------------------
  const particleCount = 24000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const angles = new Float32Array(particleCount);
  const radii = new Float32Array(particleCount);
  const speeds = new Float32Array(particleCount);

  const cIn = new THREE.Color(0xfff8ee);
  const cMid = new THREE.Color(0xff6600);
  const cOut = new THREE.Color(0x770000);
  const tempColor = new THREE.Color();

  for (let i = 0; i < particleCount; i++) {
    const rN = Math.pow(Math.random(), 1.35);
    const r = 1.85 + rN * 12.5; // Expansive lengthy reach (14.35 max radius)
    const a = Math.random() * Math.PI * 2;
    radii[i] = r;
    angles[i] = a;
    speeds[i] = 0.34 / Math.sqrt(r);

    positions[i * 3] = anchorX + Math.cos(a) * r;
    positions[i * 3 + 1] = (Math.random() - 0.5) * (0.2 + rN * 0.4);
    positions[i * 3 + 2] = Math.sin(a) * r;

    if (rN < 0.22) {
      tempColor.copy(cIn).lerp(cMid, rN / 0.22);
    } else {
      tempColor.copy(cMid).lerp(cOut, (rN - 0.22) / 0.78);
    }
    colors[i * 3] = tempColor.r;
    colors[i * 3 + 1] = tempColor.g;
    colors[i * 3 + 2] = tempColor.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.07,
    map: sphereTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particles = new THREE.Points(geometry, particleMat);
  scene.add(particles);

  // --------------------------------------------------------------------------
  // 5. AMBIENT DUST
  // --------------------------------------------------------------------------
  const ambientCount = 300;
  const ambientGeo = new THREE.BufferGeometry();
  const ambientPos = new Float32Array(ambientCount * 3);
  const ambientVel = new Float32Array(ambientCount * 3);

  for (let i = 0; i < ambientCount; i++) {
    ambientPos[i * 3] = anchorX + (Math.random() - 0.5) * 60;
    ambientPos[i * 3 + 1] = (Math.random() - 0.5) * 50;
    ambientPos[i * 3 + 2] = Math.random() * 30 + 5;
  }

  ambientGeo.setAttribute('position', new THREE.BufferAttribute(ambientPos, 3));
  const ambientParticles = new THREE.Points(ambientGeo, new THREE.PointsMaterial({
    color: 0xffcc88,
    size: 0.1,
    map: sphereTexture,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  }));
  scene.add(ambientParticles);

  // --------------------------------------------------------------------------
  // 6. ENGINE STATE & PERFORMANCE-POLISHED INTERACTION ARCHITECTURE
  // --------------------------------------------------------------------------
  const es = { camZ: 21, camY: 2.5, camX: 0, lookX: 0, lookY: 0, lookZ: 0, baseSpeed: 4.8 };

  let mouseNDC = new THREE.Vector2(0, 0);
  let mouseSmooth = new THREE.Vector2(0, 0);
  let isMousePresent = false;
  let isScrolling = false;
  let scrollStopTimer = null;

  const raycaster = new THREE.Raycaster();
  const diskPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const rawPlaneTarget = new THREE.Vector3(9999, 0, 9999);
  const _planeHit = new THREE.Vector3(); // Static reused vector (zero GC)
  let hoverStrength = 0.0;

  window.addEventListener('mousemove', (e) => {
    mouseNDC.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseNDC.y = -(e.clientY / window.innerHeight) * 2 + 1;
    isMousePresent = true;
  });

  window.addEventListener('mouseleave', () => {
    isMousePresent = false;
  });

  window.addEventListener('scroll', () => {
    isScrolling = true;
    if (scrollStopTimer) clearTimeout(scrollStopTimer);
    scrollStopTimer = setTimeout(() => {
      isScrolling = false;
    }, 120);
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // --------------------------------------------------------------------------
  // 7. 60+ FPS RENDER LOOP WITH DELTA-TIME INDEPENDENCE
  // --------------------------------------------------------------------------
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.getElapsedTime();

    // Delta-time decoupled mouse parallax
    const parallaxSpeed = isScrolling ? 4.0 : 6.0;
    mouseSmooth.x += (mouseNDC.x - mouseSmooth.x) * (1.0 - Math.exp(-parallaxSpeed * dt));
    mouseSmooth.y += (mouseNDC.y - mouseSmooth.y) * (1.0 - Math.exp(-parallaxSpeed * dt));

    const targetCamX = es.camX + mouseSmooth.x * 1.6;
    const targetCamY = es.camY + mouseSmooth.y * 1.6;

    camera.position.x += (targetCamX - camera.position.x) * (1.0 - Math.exp(-6.0 * dt));
    camera.position.y += (targetCamY - camera.position.y) * (1.0 - Math.exp(-6.0 * dt));
    camera.position.z += (es.camZ - camera.position.z) * (1.0 - Math.exp(-6.0 * dt));
    camera.lookAt(es.lookX, es.lookY, es.lookZ);

    // Smooth hover envelope: decays during scroll, recovers organically on pause
    const targetHover = (isMousePresent && !isScrolling) ? 1.0 : 0.0;
    hoverStrength += (targetHover - hoverStrength) * (1.0 - Math.exp(-8.0 * dt));

    if (isMousePresent && hoverStrength > 0.01) {
      raycaster.setFromCamera(mouseSmooth, camera);
      if (raycaster.ray.intersectPlane(diskPlane, _planeHit)) {
        rawPlaneTarget.copy(_planeHit);
      }
    } else {
      rawPlaneTarget.set(9999, 0, 9999);
    }

    // Keplerian Accretion Disk Simulation
    const spd = es.baseSpeed;
    const p = particles.geometry.attributes.position.array;
    const REPEL_RADIUS = 0.55;
    const REPEL_RADIUS_SQ = REPEL_RADIUS * REPEL_RADIUS;
    const checkRepel = (hoverStrength > 0.02 && rawPlaneTarget.x < 9000);
    const targetR = checkRepel ? Math.hypot(rawPlaneTarget.x - anchorX, rawPlaneTarget.z) : -1;

    for (let i = 0; i < particleCount; i++) {
      const r = radii[i];
      angles[i] -= speeds[i] * dt * spd * 60; // 60 FPS reference multiplier

      const bx = anchorX + Math.cos(angles[i]) * r;
      const bz = Math.sin(angles[i]) * r;

      let rx = 0, rz = 0, ry = 0;

      // 1D Radial early-out rejection skips 92% of particles from distance checks
      if (checkRepel && Math.abs(r - targetR) < REPEL_RADIUS) {
        const dx = bx - rawPlaneTarget.x;
        const dz = bz - rawPlaneTarget.z;
        const ds = dx * dx + dz * dz;

        if (ds < REPEL_RADIUS_SQ && ds > 0.0001) {
          const d = Math.sqrt(ds);
          const norm = d / REPEL_RADIUS;
          const force = Math.cos(norm * Math.PI * 0.5) * 0.35 * hoverStrength;
          rx = (dx / d) * force;
          rz = (dz / d) * force;
          ry = (1.0 - norm) * 0.22 * Math.sin(t * 5.0) * hoverStrength;
        }
      }

      // Smooth spiral arm wave
      const spiralWave = Math.sin(t * 2.2 + angles[i] * 2.5 + r * 1.6) * 0.18;

      p[i * 3]     = bx + rx;
      p[i * 3 + 1] = spiralWave + ry;
      p[i * 3 + 2] = bz + rz;
    }
    particles.geometry.attributes.position.needsUpdate = true;

    // Ambient dust
    const ap = ambientParticles.geometry.attributes.position.array;
    for (let i = 0; i < ambientCount; i++) {
      const dx = anchorX - ap[i * 3], dy = -ap[i * 3 + 1], dz = -ap[i * 3 + 2];
      const ds = dx * dx + dy * dy + dz * dz;
      const g = Math.min(20 / (ds + 1), 1.4);

      ambientVel[i * 3]     += dx * 0.0003 * g;
      ambientVel[i * 3 + 1] += dy * 0.0003 * g;
      ambientVel[i * 3 + 2] += dz * 0.0003 * g;

      ap[i * 3]     += ambientVel[i * 3];
      ap[i * 3 + 1] += ambientVel[i * 3 + 1];
      ap[i * 3 + 2] += ambientVel[i * 3 + 2];

      if (ds < 3.5 || ap[i * 3 + 2] < -10) {
        ap[i * 3]     = anchorX + (Math.random() - 0.5) * 60;
        ap[i * 3 + 1] = (Math.random() - 0.5) * 50;
        ap[i * 3 + 2] = Math.random() * 30 + 10;
        ambientVel[i * 3] = 0; ambientVel[i * 3 + 1] = 0; ambientVel[i * 3 + 2] = 0;
      }
    }
    ambientParticles.geometry.attributes.position.needsUpdate = true;

    halo.scale.setScalar(1 + Math.sin(t * 2.5) * 0.018);
    outerRing.scale.setScalar(1 + Math.cos(t * 2.0) * 0.018);
    verticalHalo.scale.setScalar(1 + Math.sin(t * 1.8) * 0.015);

    renderer.render(scene, camera);
  }

  camera.position.set(es.camX, es.camY, es.camZ);
  animate();

  // --------------------------------------------------------------------------
  // 8. MASTER CAMERA SCROLL (Earlier Continuous Top-View Tilt — ZERO FLASH)
  // --------------------------------------------------------------------------
  gsap.registerPlugin(ScrollTrigger);

  const masterTl = gsap.timeline({
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1.2 }
  });

  // Tilt starts early and progresses continuously
  masterTl.to(es, {
    camZ: 14.0,
    camY: 7.5,
    camX: 3.5,
    lookX: 3.5,
    baseSpeed: 4.8,
    duration: 0.5,
    ease: "power1.inOut"
  });

  masterTl.to(es, {
    camY: 17.5,
    camX: anchorX,
    lookX: anchorX,
    camZ: 0.2,
    baseSpeed: 5.5,
    duration: 0.5,
    ease: "power2.inOut"
  });

  // NOTE: #flash-overlay completely removed! Deep space darkness stays undisturbed!

  // --------------------------------------------------------------------------
  // 9. PINNED 100VH SLIDE SWALLOW ENGINE (ONE PROJECT AT A TIME)
  //    Each project pins at center screen -> scrambles to 0/1 -> locks to 0
  //    -> 0000s get swallowed into black hole -> unpins for next project slide!
  // --------------------------------------------------------------------------
  const _bhWorldPos = new THREE.Vector3(anchorX, 0, 0);
  const _bhScreenCache = { x: 0, y: 0 };

  function getBHScreenCoord() {
    _bhWorldPos.set(anchorX, 0, 0).project(camera);
    _bhScreenCache.x = (_bhWorldPos.x * 0.5 + 0.5) * window.innerWidth;
    _bhScreenCache.y = (-_bhWorldPos.y * 0.5 + 0.5) * window.innerHeight;
    return _bhScreenCache;
  }

  // Hero Slide: Pins briefly, then cleanly fades as you scroll down
  const hero = document.querySelector('.hero-card');
  if (hero) {
    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "+=70%",
      pin: true,
      pinSpacing: true,
      scrub: 1.0,
      onUpdate: (self) => {
        hero.style.opacity = Math.max(0, 1.0 - self.progress * 1.5);
      }
    });
  }

  // Content Project Slides: Each project pins exclusively in center view
  document.querySelectorAll('.content-card').forEach((card) => {
    const chars = Array.from(card.querySelectorAll('.char'));
    const boxes = Array.from(card.querySelectorAll('.tag, .section-title, .stack-col'));
    const totalChars = chars.length;
    let charOffsets = [];

    function measureCharPositions() {
      charOffsets = chars.map((c) => {
        const rect = c.getBoundingClientRect();
        return { x: rect.left, y: rect.top };
      });
    }

    ScrollTrigger.create({
      trigger: card,
      start: "top top",      // Card meets top of viewport -> centered content pins!
      end: "+=110%",         // Generous scroll runway while pinned in center (1.1 viewports)
      pin: true,             // Locks card in place: NO adjacent cards visible!
      pinSpacing: true,      // Holds subsequent cards completely off-screen below fold!
      scrub: 1.2,
      onEnter: () => measureCharPositions(),
      onEnterBack: () => measureCharPositions(),
      onUpdate: (self) => {
        const p = self.progress;

        // Phase 0: Pristine solid reading state (centered comfortably on screen)
        if (p <= 0.10) {
          chars.forEach(c => {
            if (c.textContent !== c.dataset.orig) c.textContent = c.dataset.orig;
            c.style.color = '';
            c.style.opacity = '1';
            c.style.transform = '';
            c.style.textShadow = '';
          });
          card.style.opacity = '1';
          boxes.forEach(b => {
            b.style.opacity = '1';
            b.style.borderColor = '';
          });
          return;
        }

        if (charOffsets.length !== totalChars) measureCharPositions();
        const bhScreen = getBHScreenCoord();

        chars.forEach((c, idx) => {
          // Cascading wave ripples down the card
          const charStart = 0.10 + (idx / totalChars) * 0.32;
          const scrambleDuration = 0.16;
          const holdZeroDuration = 0.14;

          // Before start threshold: intact text
          if (p < charStart) {
            if (c.textContent !== c.dataset.orig) c.textContent = c.dataset.orig;
            c.style.color = '';
            c.style.opacity = '1';
            c.style.transform = '';
            c.style.textShadow = '';
            return;
          }

          const localProgress = p - charStart;

          // PHASE A: Glitching / Scrambling into 0s and 1s
          if (localProgress < scrambleDuration) {
            c.textContent = Math.random() > 0.5 ? '1' : '0';
            c.style.color = Math.random() > 0.3 ? '#ffb030' : '#ffe480';
            c.style.textShadow = '0 0 6px rgba(255, 176, 48, 0.4)';
            c.style.opacity = '1';
            c.style.transform = '';
          }
          // PHASE B: Locks into a solid glowing golden '0'
          else if (localProgress < scrambleDuration + holdZeroDuration) {
            c.textContent = '0';
            c.style.color = '#ffa020';
            c.style.textShadow = '0 0 8px rgba(255, 160, 32, 0.6)';
            c.style.opacity = '1';
            c.style.transform = '';
          }
          // PHASE C: Detaches and gets physically swallowed into the black hole!
          else {
            c.textContent = '0';
            const swallowT = Math.min(1.0, (localProgress - scrambleDuration - holdZeroDuration) / 0.34);
            const accel = Math.pow(swallowT, 2.2);

            const origin = charOffsets[idx] || { x: window.innerWidth * 0.2, y: window.innerHeight * 0.5 };
            const dx = (bhScreen.x - origin.x);
            const dy = (bhScreen.y - origin.y);

            // 3D Orbital curved trajectory into event horizon
            const swirlAngle = idx * 0.12 + accel * 3.5;
            const swirlX = Math.sin(swirlAngle) * 25 * (1 - accel);
            const swirlY = Math.cos(swirlAngle) * 18 * (1 - accel);

            const curX = dx * accel + swirlX;
            const curY = dy * accel + swirlY;
            const curZ = -accel * 550; // Plunges deep behind singularity

            const scaleX = 1.0 + accel * 0.4;
            const scaleY = Math.max(0.1, 1.0 - accel * 0.8);
            const rotX = accel * 55;
            const rotZ = -accel * 18;
            const remainingOpacity = Math.max(0, 1.0 - Math.pow(swallowT, 2.5));

            c.style.transform = `translate3d(${curX}px, ${curY}px, ${curZ}px) rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${scaleX}, ${scaleY})`;
            c.style.color = THREE.MathUtils.lerp(1.0, 0.2, accel) > 0.5 ? '#ff9010' : '#dd3000';
            c.style.textShadow = `0 0 ${Math.max(2, 12 * (1 - accel))}px rgba(255, 120, 20, 0.8)`;
            c.style.opacity = remainingOpacity;
          }
        });

        // Pill tags & section boxes dissolve smoothly towards the end of swallow
        const boxProgress = Math.max(0, (p - 0.50) / 0.40);
        const boxFade = Math.max(0, 1.0 - boxProgress * 1.3);
        card.style.opacity = boxFade;
        boxes.forEach(b => {
          b.style.opacity = boxFade;
          b.style.borderColor = `rgba(255, 255, 255, ${0.08 * boxFade})`;
        });
      },
      onLeave: () => {
        chars.forEach(c => { c.textContent = '0'; c.style.opacity = '0'; });
        card.style.opacity = '0';
      },
      onLeaveBack: () => {
        chars.forEach(c => {
          c.textContent = c.dataset.orig;
          c.style.color = '';
          c.style.opacity = '1';
          c.style.transform = '';
          c.style.textShadow = '';
        });
        card.style.opacity = '1';
        boxes.forEach(b => {
          b.style.borderColor = '';
          b.style.opacity = '1';
        });
      }
    });
  });
}
