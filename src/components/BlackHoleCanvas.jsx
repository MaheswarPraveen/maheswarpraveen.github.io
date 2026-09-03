import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BlackHoleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ------------------------------------------------------------------------
    // 1. SILKY-SMOOTH LUMINOUS SPHERE TEXTURE (Continuous Molten Plasma)
    // ------------------------------------------------------------------------
    function createSphereTexture() {
      const texCanvas = document.createElement('canvas');
      texCanvas.width = 64;
      texCanvas.height = 64;
      const ctx = texCanvas.getContext('2d');

      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
      grad.addColorStop(0.18, 'rgba(255, 230, 160, 0.9)');
      grad.addColorStop(0.38, 'rgba(255, 120, 20, 0.45)');
      grad.addColorStop(0.68, 'rgba(200, 40, 0, 0.15)');
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

    // ------------------------------------------------------------------------
    // 2. SCENE & CAMERA (camZ=21, anchorX=7.0)
    // ------------------------------------------------------------------------
    const anchorX = 7.0;
    const blackHolePos = new THREE.Vector3(anchorX, 0, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // ------------------------------------------------------------------------
    // 3. SINGULARITY & DUAL LENSING PHOTON RINGS
    // ------------------------------------------------------------------------
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

    const verticalHalo = new THREE.Mesh(
      new THREE.RingGeometry(1.65, 1.95, 80),
      new THREE.MeshBasicMaterial({ color: 0xffaa40, side: THREE.DoubleSide, transparent: true, opacity: 0.65, blending: THREE.AdditiveBlending })
    );
    verticalHalo.position.copy(blackHolePos);
    verticalHalo.rotation.y = 0.15;
    scene.add(verticalHalo);

    // ------------------------------------------------------------------------
    // 4. ACCRETION DISK: 24,000 SILKY PARTICLES (SLOW MAJESTIC MOTION: baseSpeed 0.60)
    // ------------------------------------------------------------------------
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
      const r = 1.85 + rN * 12.5;
      const a = Math.random() * Math.PI * 2;
      radii[i] = r;
      angles[i] = a;
      // Stately, hypnotic cosmic speed (over 70% slower!)
      speeds[i] = 0.052 / Math.sqrt(r);

      positions[i * 3] = anchorX + Math.cos(a) * r;
      positions[i * 3 + 1] = (Math.random() - 0.5) * (0.15 + rN * 0.35);
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

    const particles = new THREE.Points(geometry, new THREE.PointsMaterial({
      size: 0.13,
      map: sphereTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.70,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }));
    scene.add(particles);

    // ------------------------------------------------------------------------
    // 5. AMBIENT DUST
    // ------------------------------------------------------------------------
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
      size: 0.12,
      map: sphereTexture,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }));
    scene.add(ambientParticles);

    // ------------------------------------------------------------------------
    // 6. ENGINE STATE & SLOW COSMIC PACE (baseSpeed: 0.65)
    // ------------------------------------------------------------------------
    const es = { camZ: 21, camY: 2.5, camX: 0, lookX: 0, lookY: 0, lookZ: 0, baseSpeed: 0.65 };

    let mouseNDC = new THREE.Vector2(0, 0);
    let mouseSmooth = new THREE.Vector2(0, 0);
    let isMousePresent = false;
    let isScrolling = false;
    let scrollStopTimer = null;

    const raycaster = new THREE.Raycaster();
    const diskPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const rawPlaneTarget = new THREE.Vector3(9999, 0, 9999);
    const _planeHit = new THREE.Vector3();
    let hoverStrength = 0.0;

    const onMouseMove = (e) => {
      mouseNDC.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNDC.y = -(e.clientY / window.innerHeight) * 2 + 1;
      isMousePresent = true;
    };
    const onMouseLeave = () => { isMousePresent = false; };
    const onScroll = () => {
      isScrolling = true;
      if (scrollStopTimer) clearTimeout(scrollStopTimer);
      scrollStopTimer = setTimeout(() => { isScrolling = false; }, 120);
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // ------------------------------------------------------------------------
    // 7. 60+ FPS RENDER LOOP: SLOW, HYPNOTIC SILK WAVES
    // ------------------------------------------------------------------------
    const clock = new THREE.Clock();
    let animId;

    function animate() {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.getElapsedTime();

      const parallaxSpeed = isScrolling ? 2.5 : 4.0;
      mouseSmooth.x += (mouseNDC.x - mouseSmooth.x) * (1.0 - Math.exp(-parallaxSpeed * dt));
      mouseSmooth.y += (mouseNDC.y - mouseSmooth.y) * (1.0 - Math.exp(-parallaxSpeed * dt));

      const targetCamX = es.camX + mouseSmooth.x * 1.6;
      const targetCamY = es.camY + mouseSmooth.y * 1.6;

      camera.position.x += (targetCamX - camera.position.x) * (1.0 - Math.exp(-4.0 * dt));
      camera.position.y += (targetCamY - camera.position.y) * (1.0 - Math.exp(-4.0 * dt));
      camera.position.z += (es.camZ - camera.position.z) * (1.0 - Math.exp(-4.0 * dt));
      camera.lookAt(es.lookX, es.lookY, es.lookZ);

      const targetHover = (isMousePresent && !isScrolling) ? 1.0 : 0.0;
      hoverStrength += (targetHover - hoverStrength) * (1.0 - Math.exp(-5.0 * dt));

      if (isMousePresent && hoverStrength > 0.01) {
        raycaster.setFromCamera(mouseSmooth, camera);
        if (raycaster.ray.intersectPlane(diskPlane, _planeHit)) {
          rawPlaneTarget.copy(_planeHit);
        }
      } else {
        rawPlaneTarget.set(9999, 0, 9999);
      }

      // Slow, majestic Keplerian drift
      const spd = es.baseSpeed;
      const p = particles.geometry.attributes.position.array;
      const REPEL_RADIUS = 0.65;
      const REPEL_RADIUS_SQ = REPEL_RADIUS * REPEL_RADIUS;
      const checkRepel = (hoverStrength > 0.02 && rawPlaneTarget.x < 9000);
      const targetR = checkRepel ? Math.hypot(rawPlaneTarget.x - anchorX, rawPlaneTarget.z) : -1;

      for (let i = 0; i < particleCount; i++) {
        const r = radii[i];
        angles[i] -= speeds[i] * dt * spd * 60;

        const bx = anchorX + Math.cos(angles[i]) * r;
        const bz = Math.sin(angles[i]) * r;

        let rx = 0, rz = 0, ry = 0;

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
            ry = (1.0 - norm) * 0.20 * Math.sin(t * 2.5) * hoverStrength;
          }
        }

        // Slow, hypnotic ocean wave harmonics
        const wave1 = Math.sin(t * 0.35 + angles[i] * 1.8 + r * 1.1) * 0.28;
        const wave2 = Math.cos(t * 0.18 - r * 0.7) * 0.14;
        const spiralWave = wave1 + wave2;

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

        ambientVel[i * 3]     += dx * 0.0001 * g;
        ambientVel[i * 3 + 1] += dy * 0.0001 * g;
        ambientVel[i * 3 + 2] += dz * 0.0001 * g;

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

      halo.scale.setScalar(1 + Math.sin(t * 0.8) * 0.012);
      outerRing.scale.setScalar(1 + Math.cos(t * 0.6) * 0.012);
      verticalHalo.scale.setScalar(1 + Math.sin(t * 0.5) * 0.010);

      renderer.render(scene, camera);
    }

    camera.position.set(es.camX, es.camY, es.camZ);
    animate();

    // ------------------------------------------------------------------------
    // 8. MASTER CAMERA TIMELINE (Slow, Continuous Tilt)
    // ------------------------------------------------------------------------
    const masterTl = gsap.timeline({
      scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1.2 }
    });

    masterTl.to(es, {
      camZ: 14.0,
      camY: 7.5,
      camX: 3.5,
      lookX: 3.5,
      baseSpeed: 0.75,
      duration: 0.5,
      ease: "power1.inOut"
    });

    masterTl.to(es, {
      camY: 17.5,
      camX: anchorX,
      lookX: anchorX,
      camZ: 0.2,
      baseSpeed: 0.90,
      duration: 0.5,
      ease: "power2.inOut"
    });

    window.__getBHScreenCoord = () => {
      const v = new THREE.Vector3(anchorX, 0, 0).project(camera);
      return {
        x: (v.x * 0.5 + 0.5) * window.innerWidth,
        y: (-v.y * 0.5 + 0.5) * window.innerHeight
      };
    };

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      masterTl.kill();
      renderer.dispose();
    };
  }, []);

  return <canvas id="blackhole-canvas" ref={canvasRef} />;
}
