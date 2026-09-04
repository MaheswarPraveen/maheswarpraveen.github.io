import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

gsap.registerPlugin(ScrollTrigger);

export default function BlackHoleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ------------------------------------------------------------------------
    // 1. PROCEDURAL GLOWING SPHERE TEXTURE (ZERO SQUARE PARTICLES)
    // ------------------------------------------------------------------------
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

    // ------------------------------------------------------------------------
    // 2. SCENE & CAMERA (camZ=20, anchorX=7.0)
    // ------------------------------------------------------------------------
    const anchorX = 7.0;
    const blackHolePos = new THREE.Vector3(anchorX, 0, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Phase 1: ACES Filmic Tone Mapping
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // ------------------------------------------------------------------------
    // BLOOM POST-PROCESSING
    // ------------------------------------------------------------------------
    renderer.setClearColor(0x000000, 0);
    // OPTIMIZATION: Removed samples: 4 to massively improve frame rate (fixed lag)
    const renderTarget = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight,
      { type: THREE.HalfFloatType, format: THREE.RGBAFormat }
    );
    const composer = new EffectComposer(renderer, renderTarget);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.85,  // strength
      0.55,  // radius
      0.15   // threshold
    );
    composer.addPass(bloomPass);

    // Phase 1: Depth of Field (BokehPass)
    // Disabled temporarily: BokehPass requires precise per-frame 'focus' uniform updates 
    // linked to camera depth, otherwise it blurs the entire scene into mush.
    // composer.addPass(bokehPass);

    // Phase 1: Custom Gravitational Lensing ShaderPass
    const LensingShader = {
      uniforms: {
        tDiffuse: { value: null },
        bhPos: { value: new THREE.Vector2(0.5, 0.5) },
        strength: { value: 0.0015 } // Reduced to keep it elegant
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec2 bhPos;
        uniform float strength;
        varying vec2 vUv;

        void main() {
          vec2 dir = vUv - bhPos;
          // Compensate for aspect ratio roughly if needed, assuming 16:9 for distance
          dir.x *= 1.77; 
          float dist = length(dir);
          vec2 warpedUv = vUv;
          
          float eh = 0.045; // Event horizon radius in screen space
          
          if (dist > eh) {
            // Inverse square falloff for gravitational warping
            float warp = strength / (dist * dist + 0.001); 
            warp = clamp(warp, 0.0, 0.05); // strict clamp to prevent tearing
            
            // Smoothly decay the warp to 0 at a distance of 0.35 to prevent hard edges
            float edgeFade = smoothstep(0.35, 0.1, dist);
            warp *= edgeFade;
            
            // Warp towards the black hole
            vec2 trueDir = vUv - bhPos;
            warpedUv -= normalize(trueDir) * warp;
            
            gl_FragColor = texture2D(tDiffuse, warpedUv);
          } else {
            // Ensure the inside of the event horizon is pitch black
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      `
    };
    const lensingPass = new ShaderPass(LensingShader);
    composer.addPass(lensingPass);

    // ------------------------------------------------------------------------
    // 3. SINGULARITY & DUAL LENSING PHOTON RINGS
    // ------------------------------------------------------------------------
    const singularity = new THREE.Mesh(
      new THREE.SphereGeometry(1.65, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    singularity.position.copy(blackHolePos);
    singularity.scale.setScalar(1.4); // Made black spot larger
    scene.add(singularity);

    const halo = new THREE.Mesh(
      new THREE.RingGeometry(1.65, 2.05, 80),
      new THREE.MeshBasicMaterial({ color: 0xffa040, side: THREE.DoubleSide, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending })
    );
    halo.position.copy(blackHolePos);
    halo.rotation.x = Math.PI / 2;
    halo.scale.setScalar(1.4);
    scene.add(halo);

    const outerRing = new THREE.Mesh(
      new THREE.RingGeometry(2.05, 2.35, 80),
      new THREE.MeshBasicMaterial({ color: 0xff5500, side: THREE.DoubleSide, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending })
    );
    outerRing.position.copy(blackHolePos);
    outerRing.rotation.x = Math.PI / 2;
    outerRing.scale.setScalar(1.4);
    scene.add(outerRing);

    const verticalHalo = new THREE.Mesh(
      new THREE.RingGeometry(1.65, 1.95, 80),
      new THREE.MeshBasicMaterial({ color: 0xffaa40, side: THREE.DoubleSide, transparent: true, opacity: 0.65, blending: THREE.AdditiveBlending })
    );
    verticalHalo.position.copy(blackHolePos);
    verticalHalo.rotation.y = 0.15;
    verticalHalo.scale.setScalar(1.4);
    scene.add(verticalHalo);

    // ------------------------------------------------------------------------
    // 4. ACCRETION DISK: 24,000 PARTICLES (FLUID ROTATION & ORIGINAL RIPPLE)
    // ------------------------------------------------------------------------
    // Reduced from 24000 — halves the per-frame CPU trig cost (every particle
    // does 2 trig calls per frame in JS, on the main thread, every frame).
    // Combined with bloom doing the visual "density" work, 14000 reads just
    // as full but stops competing with the scroll/DOM thread for CPU time.
    const particleCount = 14000;
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
      const r = 2.31 + rN * 12.5; // Scaled up to match 1.4x singularity
      radii[i] = r;

      // Even slower Keplerian drift to prevent the "blender" look
      speeds[i] = 0.035 / Math.sqrt(r);

      const a = Math.random() * Math.PI * 2;
      angles[i] = a;

      positions[i * 3] = anchorX + Math.cos(a) * r;
      positions[i * 3 + 1] = (Math.random() - 0.5) * (0.15 + rN * 0.3);
      positions[i * 3 + 2] = Math.sin(a) * r;

      tempColor.lerpColors(cIn, cMid, Math.min(1.0, r / 8.0));
      tempColor.lerp(cOut, Math.max(0, (r - 8.0) / 20.0));
      tempColor.toArray(colors, i * 3);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('angle', new THREE.BufferAttribute(angles, 1));
    geometry.setAttribute('radius', new THREE.BufferAttribute(radii, 1));
    geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));

    // PHASE 2: GPU Particle Rewrite (Zero CPU Overhead)
    const particleUniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 1.0 },
      uAnchor: { value: new THREE.Vector3(anchorX, 0, 0) },
      uMouseTarget: { value: new THREE.Vector3(9999, 0, 9999) },
      uHoverStrength: { value: 0.0 }
    };

    const gpuMaterial = new THREE.ShaderMaterial({
      uniforms: particleUniforms,
      vertexShader: `
        uniform float uTime;
        uniform float uSpeed;
        uniform vec3 uAnchor;
        uniform vec3 uMouseTarget;
        uniform float uHoverStrength;
        
        attribute float angle;
        attribute float radius;
        attribute float speed;
        attribute vec3 customColor;
        
        varying vec3 vColor;

        void main() {
          vColor = customColor;
          
          float currentAngle = angle - speed * uTime * 60.0 * uSpeed;
          
          float bx = uAnchor.x + cos(currentAngle) * radius;
          float bz = sin(currentAngle) * radius;
          
          float spiralWave = sin(uTime * 2.2 + currentAngle * 2.5 + radius * 1.6) * 0.22;
          
          float rx = 0.0;
          float rz = 0.0;
          float ry = 0.0;
          
          float REPEL_RADIUS = 0.65;
          float REPEL_RADIUS_SQ = REPEL_RADIUS * REPEL_RADIUS;
          
          if (uHoverStrength > 0.02 && uMouseTarget.x < 9000.0) {
             float targetR = length(vec2(uMouseTarget.x - uAnchor.x, uMouseTarget.z));
             if (abs(radius - targetR) < REPEL_RADIUS) {
                 float dx = bx - uMouseTarget.x;
                 float dz = bz - uMouseTarget.z;
                 float ds = dx * dx + dz * dz;
                 if (ds < REPEL_RADIUS_SQ && ds > 0.0001) {
                     float d = sqrt(ds);
                     float norm = d / REPEL_RADIUS;
                     float force = cos(norm * 1.570796) * 0.35 * uHoverStrength;
                     rx = (dx / d) * force;
                     rz = (dz / d) * force;
                     ry = (1.0 - norm) * 0.24 * sin(uTime * 5.0) * uHoverStrength;
                 }
             }
          }
          
          vec3 pos = vec3(bx + rx, spiralWave + ry, bz + rz);
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          
          gl_PointSize = (30.0 * (1.0 + sin(angle * 5.0)*0.2)) / -mvPosition.z;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          if (length(coord) > 0.5) discard;
          gl_FragColor = vec4(vColor, 0.9);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, gpuMaterial);
    scene.add(particles);

    // ------------------------------------------------------------------------
    // 5. AMBIENT DUST
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

    // ------------------------------------------------------------------------
    // 6. ENGINE STATE & INTERACTION ARCHITECTURE (INDEPENDENT ROTATION & HOVER)
    // ------------------------------------------------------------------------
    const es = { camZ: 20, camY: 3.2, camX: 0, lookX: 0, lookY: 0, lookZ: 0, baseSpeed: 1.0 };

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

    // Interactive interruption on scroll: gives pure independent rotation during scroll, recovers organically on pause
    const onScroll = () => {
      isScrolling = true;
      if (scrollStopTimer) clearTimeout(scrollStopTimer);
      scrollStopTimer = setTimeout(() => {
        isScrolling = false;
      }, 120);
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // ------------------------------------------------------------------------
    // 7. RENDER LOOP: ORIGINAL RIPPLE WAVE & FLUID ROTATION
    // ------------------------------------------------------------------------
    const clock = new THREE.Clock();
    let animId;

    function animate() {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.getElapsedTime();

      // Decoupled smooth mouse parallax
      const parallaxSpeed = isScrolling ? 3.0 : 5.0;
      mouseSmooth.x += (mouseNDC.x - mouseSmooth.x) * (1.0 - Math.exp(-parallaxSpeed * dt));
      mouseSmooth.y += (mouseNDC.y - mouseSmooth.y) * (1.0 - Math.exp(-parallaxSpeed * dt));

      const targetCamX = es.camX + mouseSmooth.x * 1.5;
      const targetCamY = es.camY + mouseSmooth.y * 1.5;

      // Slower catch-up constant (was 5.0) — the camera was snapping to target
      // almost instantly each frame, which reads as robotic. This gives it a
      // longer, softer settle without feeling laggy.
      camera.position.x += (targetCamX - camera.position.x) * (1.0 - Math.exp(-3.0 * dt));
      camera.position.y += (targetCamY - camera.position.y) * (1.0 - Math.exp(-3.0 * dt));
      camera.position.z += (es.camZ - camera.position.z) * (1.0 - Math.exp(-3.0 * dt));
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

      const spd = es.baseSpeed;
      
      // Update GPU Particle Uniforms (O(1) cost instead of O(N))
      particleUniforms.uTime.value = t;
      particleUniforms.uSpeed.value = spd;
      particleUniforms.uHoverStrength.value = hoverStrength;
      particleUniforms.uMouseTarget.value.copy(rawPlaneTarget);

      // Ambient dust
      const ap = ambientParticles.geometry.attributes.position.array;
      for (let i = 0; i < ambientCount; i++) {
        const dx = anchorX - ap[i * 3], dy = -ap[i * 3 + 1], dz = -ap[i * 3 + 2];
        const ds = dx * dx + dy * dy + dz * dz;
        const g = Math.min(20 / (ds + 1), 1.4);

        ambientVel[i * 3]     += dx * 0.0002 * g;
        ambientVel[i * 3 + 1] += dy * 0.0002 * g;
        ambientVel[i * 3 + 2] += dz * 0.0002 * g;

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

      halo.scale.setScalar(1 + Math.sin(t * 1.8) * 0.015);
      outerRing.scale.setScalar(1 + Math.cos(t * 1.5) * 0.015);
      verticalHalo.scale.setScalar(1 + Math.sin(t * 1.2) * 0.012);

        // Phase 1: Update Gravitational Lensing target dynamically
        const bhWorld = new THREE.Vector3(anchorX, 0, 0);
        bhWorld.project(camera);
        lensingPass.uniforms.bhPos.value.set(
          (bhWorld.x * 0.5) + 0.5,
          (bhWorld.y * 0.5) + 0.5
        );

        composer.render();
    }

    camera.position.set(es.camX, es.camY, es.camZ);
    animate();

    // ------------------------------------------------------------------------
    // 8. MASTER CAMERA TIMELINE: OBLIQUE 3D PERSPECTIVE (NO FLATTENING)
    // ------------------------------------------------------------------------
    const masterTl = gsap.timeline({
      scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1.2 }
    });

    masterTl.to(es, {
      camZ: 17.0,
      camY: 3.8,
      camX: 3.0,
      lookX: 3.0,
      duration: 0.5,
      ease: "power1.inOut"
    });

    masterTl.to(es, {
      camY: 4.4,
      camX: anchorX * 0.5,
      lookX: anchorX * 0.5,
      camZ: 14.0,
      duration: 0.4,
      ease: "power2.inOut"
    });

    // RESTORED: Final cinematic vertical top-down plunge into the singularity
    masterTl.to(es, {
      camY: 28.0,
      camZ: 0.5, // 0.5 instead of 0 to prevent gimbal lock
      camX: anchorX,
      lookX: anchorX,
      duration: 0.8,
      ease: "power3.in"
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
      composer.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="blackhole-canvas" ref={canvasRef} />;
}
