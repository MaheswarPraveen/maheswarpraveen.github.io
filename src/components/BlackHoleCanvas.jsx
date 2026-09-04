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
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, stencil: false, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // OPTIMIZATION: Cap Pixel Ratio to 1.0 (Retina 2.0+ displays cause 4x pixel overhead)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.0));

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
    
    // OPTIMIZATION: Downsample the Bloom pass by feeding it half the screen resolution.
    // It creates the same soft glow but processes 4x fewer pixels internally.
    // Tight bloom: hot core glow only. Wide radius was blowing a giant
    // brown dome around the hole — the "distortion sphere" look.
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2),
      0.7,   // strength
      0.35,  // radius
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
        uLensFade: { value: 1.0 }, // Finale: lens becomes a passthrough so the sun isn't eclipsed
        strength: { value: 0.00018 } // Gentle warp: dome present but smaller and airy
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
        uniform float uLensFade;
        varying vec2 vUv;

        void main() {
          vec2 dir = vUv - bhPos;
          // Compensate for aspect ratio roughly if needed, assuming 16:9 for distance
          dir.x *= 1.77; 
          float dist = length(dir);
          vec2 warpedUv = vUv;
          
          float eh = 0.085; // Small pure-black dot, a touch bigger than reference
          
          // Inverse square falloff for gravitational warping (outside only)
          float warp = strength / (dist * dist + 0.001);
          warp = clamp(warp, 0.0, 0.05); // strict clamp to prevent tearing

          // Tight warp bubble: distortion hugs the hole instead of bending
          // half the screen. (Black disc stays matched to the mesh — it must
          // cover the geometry face or bloom bleeds grey back in.)
          float edgeFade = smoothstep(0.15, 0.055, dist);
          warp *= edgeFade;

          // Warp towards the black hole
          vec2 trueDir = vUv - bhPos;
          warpedUv -= normalize(trueDir + vec2(1e-5)) * warp * uLensFade;

          vec4 warped = texture2D(tDiffuse, warpedUv);
          // Soft-edged void: covers bloom bleed; feathered wider so the very
          // edge is a touch more transparent/accurate, not a hard cutout.
          float disc = (1.0 - smoothstep(eh * 0.78, eh * 1.06, dist)) * uLensFade;
          gl_FragColor = mix(warped, vec4(0.0, 0.0, 0.0, 1.0), disc);
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
    singularity.scale.setScalar(1.1); // Small outer sphere; flat black disc gives the black
    scene.add(singularity);

    // NOTE: no geometric glow bands — the brief says bright PARTICLES only.
    // The disk's inner rim + bloom carry all the glow; no ring meshes.

    // NOTE: no vertical arch / photon ring meshes — the reference look is a
    // clean small black dot with the wide disk only, no orange outer ring.

    // ------------------------------------------------------------------------
    // PHASE 2: GPU ACCELERATED ACCRETION DISK
    // ------------------------------------------------------------------------
    const particleCount = 18000; // Dense disk; single draw call, GPU-side math
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
      // pow 2.0 packs significantly more particles near the inner edge
      const rN = Math.pow(Math.random(), 2.0);
      // 1.65 * 1.1 scale = 1.82. Disk starts exactly at singularity edge.
      const r = 1.85 + rN * 10.0;
      radii[i] = r;

      // True Keplerian: inner orbits faster. k=0.007 gives ~0.25 rad/s inner,
      // ~0.11 rad/s outer (majestic ~25-55s per turn), not a blender.
      speeds[i] = 0.007 / Math.sqrt(r);

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
      uIgnite: { value: 0.25 }, // Ring ignition: dim at load, full blaze at top view
      uFade: { value: 1.0 }, // Finale dive fades the whole disk to black
      uAnchor: { value: new THREE.Vector3(anchorX, 0, 0) },
      uMouseTarget: { value: new THREE.Vector3(9999, 0, 9999) },
      uHoverStrength: { value: 0.0 }
    };

    const gpuMaterial = new THREE.ShaderMaterial({
      uniforms: particleUniforms,
      vertexShader: `
        uniform float uTime;
        uniform float uSpeed;
        uniform float uIgnite;
        uniform vec3 uAnchor;
        uniform vec3 uMouseTarget;
        uniform float uHoverStrength;
        
        attribute float angle;
        attribute float radius;
        attribute float speed;
        attribute vec3 customColor;
        
        varying vec3 vColor;
        varying float vRadius;

        void main() {
          vColor = customColor;
          
          float currentAngle = angle - speed * uTime * 60.0 * uSpeed;
          
          float bx = uAnchor.x + cos(currentAngle) * radius;
          float bz = sin(currentAngle) * radius;
          
          // Cinematic ripple: concentric waves traveling OUTWARD from the hole,
          // like ripples on water — smooth phase in radius, gentle angular
          // breathing so it stays organic, never lumpy or sloshing.
          float ripplePhase = radius * 2.0 - uTime * 2.4;
          float spiralWave = sin(ripplePhase + currentAngle * 1.0) * 0.42;
          float radialWave = sin(ripplePhase * 0.9 + 1.2) * 0.12;
          float brightnessWave = sin(ripplePhase + currentAngle * 1.0 + 0.6) * 0.20;
          vRadius = radius;
          // Relativistic-beaming look (EHT-style): one side of the ring burns
          // brighter as particles orbit through a fixed bright sector, plus a
          // hot rim hugging the shadow so infalling light wraps the dot.
          // Both scale with uIgnite: calm ember at load, full ring at top.
          // The whole disk also breathes with ignition so the opening frame
          // is genuinely dim, not just less boosted.
          float beam = 1.0 + (0.55 * uIgnite) * cos(currentAngle - 2.2);
          float inner = exp(-max(radius - 2.0, 0.0) / 1.8);
          vColor = customColor * (1.0 + brightnessWave * 0.35) * beam * (1.0 + inner * (0.15 + 0.95 * uIgnite)) * mix(0.5, 1.1, uIgnite);
          
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
          
           vec3 pos = vec3(bx + rx + cos(currentAngle) * radialWave, spiralWave + ry, bz + rz + sin(currentAngle) * radialWave);
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          
           gl_PointSize = (64.0 * (1.0 + sin(angle * 5.0)*0.25)) / -mvPosition.z;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vRadius;
        uniform float uFade;
        void main() {
          // Soft radial falloff so points read as plasma waves, not grains.
          vec2 coord = gl_PointCoord - vec2(0.5);
          float d = length(coord);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.05, d);
          // Dome: present like the reference, but airy — far-field fades so
          // it reads translucent instead of a solid red wall.
          float far = 1.0 - smoothstep(8.0, 15.0, vRadius);
          gl_FragColor = vec4(vColor * a, a * 0.9 * (0.6 + 0.4 * far) * uFade);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, gpuMaterial);
    scene.add(particles);

    // ------------------------------------------------------------------------
    // 4b. INFALL STREAM: camera-side particles draining into the singularity.
    // Fills the empty field between the text column and the BH. Fully GPU
    // driven (O(1) CPU): each particle loops spawn -> horizon via uTime.
    // ------------------------------------------------------------------------
    const infallCount = 2000;
    const infallGeo = new THREE.BufferGeometry();
    const infallSpawn = new Float32Array(infallCount * 3);
    const infallSeed = new Float32Array(infallCount);
    for (let i = 0; i < infallCount; i++) {
      // Wide slab on the text side + front (camera side), draining right.
      infallSpawn[i * 3] = -14 + Math.random() * (anchorX - 3.0 + 14);
      infallSpawn[i * 3 + 1] = (Math.random() - 0.5) * 14;
      infallSpawn[i * 3 + 2] = Math.random() * 10;
      infallSeed[i] = Math.random();
    }
    infallGeo.setAttribute('position', new THREE.BufferAttribute(infallSpawn, 3));
    infallGeo.setAttribute('seed', new THREE.BufferAttribute(infallSeed, 1));
    const infallUniforms = {
      uTime: particleUniforms.uTime,
      uFade: particleUniforms.uFade, // Shared fade object: one write fades both systems
      uCenter: { value: new THREE.Vector3(anchorX, 0, 0) }
    };
    const infallMat = new THREE.ShaderMaterial({
      uniforms: infallUniforms,
      vertexShader: `
        uniform float uTime;
        uniform vec3 uCenter;
        attribute float seed;
        varying float vLife;
        varying float vSeed;
        void main() {
          vSeed = seed;
          float rate = 0.10 + fract(seed * 7.13) * 0.12;
          float life = fract(uTime * rate + seed);
          vLife = life;
          // Accelerating plunge: slow drift far away, rush into the horizon
          vec3 pos = mix(position, uCenter, pow(life, 1.6));
          // Slight curl so streams feel gravitational, not linear
          pos.y += sin(life * 6.0 + seed * 40.0) * 0.5 * (1.0 - life);
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (34.0 * (0.5 + fract(seed * 3.7) * 0.7) * (1.0 - life * 0.6)) / -mvPosition.z;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vLife;
        varying float vSeed;
        uniform float uFade;
        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float d = length(coord);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.05, d);
          // White-hot head fading to ember tail, alpha swells mid-flight
          vec3 head = vec3(1.0, 0.85, 0.6);
          vec3 tail = vec3(0.9, 0.25, 0.05);
          vec3 col = mix(head, tail, smoothstep(0.0, 1.0, vLife));
          float fade = smoothstep(0.0, 0.15, vLife) * (1.0 - smoothstep(0.75, 1.0, vLife));
          gl_FragColor = vec4(col * a, a * fade * 0.85 * uFade);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const infall = new THREE.Points(infallGeo, infallMat);
    scene.add(infall);

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
    // 5b. ASTRALIS EXOPLANETARY SYSTEM (CINEMATIC FINALE)
    // 6 exotic exoplanets orbiting a luminous blue-white star (Astralis-Prime).
    // Procedural surface maps, atmospheric limb glows, Cassini rings & moonlets.
    // ------------------------------------------------------------------------
    function createPlanetTexture(type) {
      const c = document.createElement('canvas');
      c.width = 512;
      c.height = 256;
      const ctx = c.getContext('2d');

      if (type === 'lava') {
        // PYROCLAST-9: Volcanic basalt crust with glowing magma rifts
        ctx.fillStyle = '#140e0b';
        ctx.fillRect(0, 0, 512, 256);
        for (let i = 0; i < 350; i++) {
          ctx.fillStyle = Math.random() > 0.5 ? '#1f1510' : '#0a0806';
          ctx.fillRect(Math.random() * 512, Math.random() * 256, 4 + Math.random() * 8, 4 + Math.random() * 8);
        }
        ctx.lineWidth = 2.4;
        for (let i = 0; i < 24; i++) {
          ctx.strokeStyle = i % 3 === 0 ? '#ff3800' : (i % 3 === 1 ? '#ff7300' : '#ffa200');
          ctx.shadowColor = '#ff2000';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          let x = Math.random() * 512;
          let y = 15 + Math.random() * 226;
          ctx.moveTo(x, y);
          for (let s = 0; s < 7; s++) {
            x += (Math.random() - 0.5) * 70;
            y += (Math.random() - 0.5) * 35;
            ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else if (type === 'habitable') {
        // AURELIA PRIME: Deep azure oceans, emerald archipelagos, white cloud fronts
        const oceanGrad = ctx.createLinearGradient(0, 0, 0, 256);
        oceanGrad.addColorStop(0, '#061730');
        oceanGrad.addColorStop(0.5, '#0b2f5c');
        oceanGrad.addColorStop(1, '#051429');
        ctx.fillStyle = oceanGrad;
        ctx.fillRect(0, 0, 512, 256);
        // Landmasses
        ctx.fillStyle = '#1b4d2e';
        for (let i = 0; i < 18; i++) {
          ctx.beginPath();
          const cx = Math.random() * 512;
          const cy = 40 + Math.random() * 176;
          ctx.arc(cx, cy, 20 + Math.random() * 38, 0, Math.PI * 2);
          ctx.fill();
        }
        // Coastal shelves
        ctx.fillStyle = 'rgba(28, 120, 130, 0.4)';
        for (let i = 0; i < 18; i++) {
          ctx.beginPath();
          const cx = Math.random() * 512;
          const cy = 40 + Math.random() * 176;
          ctx.arc(cx, cy, 28 + Math.random() * 45, 0, Math.PI * 2);
          ctx.fill();
        }
        // Swirling cloud belts
        ctx.fillStyle = 'rgba(255, 255, 255, 0.38)';
        for (let i = 0; i < 12; i++) {
          ctx.beginPath();
          const y = 35 + Math.random() * 186;
          ctx.ellipse(256, y, 256, 8 + Math.random() * 16, (Math.random() - 0.5) * 0.1, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (type === 'ocean') {
        // THALASSA-IV: Abyssal indigo-cyan world with bioluminescent deep ocean currents
        const grad = ctx.createLinearGradient(0, 0, 0, 256);
        grad.addColorStop(0, '#030914');
        grad.addColorStop(0.5, '#071b38');
        grad.addColorStop(1, '#030a17');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 512, 256);
        ctx.fillStyle = 'rgba(0, 220, 255, 0.35)';
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 10;
        for (let i = 0; i < 38; i++) {
          ctx.beginPath();
          ctx.arc(Math.random() * 512, 30 + Math.random() * 196, 3 + Math.random() * 13, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = 'rgba(0, 255, 180, 0.2)';
        ctx.fillRect(0, 0, 512, 35);
        ctx.fillRect(0, 221, 512, 35);
      } else if (type === 'gas_giant') {
        // ZEPHYRUS HYPERION: Stratified aerodynamic storm belts in amber, obsidian, copper
        const grad = ctx.createLinearGradient(0, 0, 0, 256);
        grad.addColorStop(0.00, '#2d180c');
        grad.addColorStop(0.12, '#5e3518');
        grad.addColorStop(0.24, '#24140a');
        grad.addColorStop(0.38, '#94582b');
        grad.addColorStop(0.50, '#4a2812');
        grad.addColorStop(0.64, '#7a4520');
        grad.addColorStop(0.78, '#331b0e');
        grad.addColorStop(0.90, '#593217');
        grad.addColorStop(1.00, '#1a0d06');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 512, 256);
        // Great Dark Vortex / Storm Eye
        ctx.fillStyle = '#1c0c05';
        ctx.shadowColor = '#000000';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.ellipse(330, 150, 48, 22, 0.04, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#b87038';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (type === 'ice_giant') {
        // VALKYRIE-7: Pale cryogenic methane & azure mist
        const grad = ctx.createLinearGradient(0, 0, 0, 256);
        grad.addColorStop(0.0, '#0c1a2e');
        grad.addColorStop(0.3, '#21476b');
        grad.addColorStop(0.5, '#153352');
        grad.addColorStop(0.7, '#2b5880');
        grad.addColorStop(1.0, '#0a1626');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 512, 256);
        ctx.fillStyle = 'rgba(160, 225, 255, 0.18)';
        ctx.fillRect(0, 0, 512, 45);
        ctx.fillRect(0, 211, 512, 45);
      } else if (type === 'shattered') {
        // OBLIVION CORE: Cratered metallic iron-silicate asteroid crust
        ctx.fillStyle = '#15171d';
        ctx.fillRect(0, 0, 512, 256);
        ctx.fillStyle = '#0e1014';
        for (let i = 0; i < 45; i++) {
          ctx.beginPath();
          ctx.arc(Math.random() * 512, Math.random() * 256, 3 + Math.random() * 16, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.strokeStyle = '#323745';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 15; i++) {
          ctx.beginPath();
          ctx.moveTo(Math.random() * 512, Math.random() * 256);
          ctx.lineTo(Math.random() * 512, Math.random() * 256);
          ctx.stroke();
        }
      }

      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    }

    function createRingTexture() {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 1;
      const ctx = c.getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, 256, 0);
      grad.addColorStop(0.00, 'rgba(140, 105, 75, 0.0)');
      grad.addColorStop(0.12, 'rgba(190, 150, 110, 0.85)');
      grad.addColorStop(0.44, 'rgba(160, 125, 90, 0.7)');
      grad.addColorStop(0.48, 'rgba(0, 0, 0, 0.05)'); // Cassini Division gap
      grad.addColorStop(0.54, 'rgba(0, 0, 0, 0.05)');
      grad.addColorStop(0.65, 'rgba(145, 115, 80, 0.65)');
      grad.addColorStop(0.88, 'rgba(120, 95, 65, 0.35)');
      grad.addColorStop(1.00, 'rgba(80, 60, 40, 0.0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 1);
      return new THREE.CanvasTexture(c);
    }

    function createIceRingTexture() {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 1;
      const ctx = c.getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, 256, 0);
      grad.addColorStop(0.0, 'rgba(100, 190, 230, 0.0)');
      grad.addColorStop(0.3, 'rgba(140, 215, 255, 0.6)');
      grad.addColorStop(0.7, 'rgba(120, 200, 240, 0.5)');
      grad.addColorStop(1.0, 'rgba(80, 160, 200, 0.0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 1);
      return new THREE.CanvasTexture(c);
    }

    const SOL = new THREE.Vector3(anchorX, 0, 0);
    const solarGroup = new THREE.Group();
    solarGroup.visible = false;
    scene.add(solarGroup);

    // Luminous Exoplanetary Star: "ASTRALIS-PRIME" (Blue-White O/B Type)
    const sunLight = new THREE.PointLight(0xdff0ff, 6.0, 110, 1.2);
    sunLight.position.copy(SOL);
    solarGroup.add(sunLight);

    // Deep space contrast: subtle dark celestial starlight for dramatic terminator shading
    const solarAmbient = new THREE.AmbientLight(0x0a1424, 0.40);
    solarGroup.add(solarAmbient);

    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(2.1, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xf2f8ff })
    );
    sun.position.copy(SOL);
    solarGroup.add(sun);

    // Outer radiant electric cyan coronal halo
    const sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: sphereTexture,
      color: 0x4da6ff,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }));
    sunGlow.position.copy(SOL);
    sunGlow.scale.setScalar(12);
    solarGroup.add(sunGlow);

    // Inner incandescent white-cyan glare
    const sunInnerGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: sphereTexture,
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }));
    sunInnerGlow.position.copy(SOL);
    sunInnerGlow.scale.setScalar(6.5);
    solarGroup.add(sunInnerGlow);

    // Exotic Exoplanets of the Astralis System
    const EXOPLANETS = [
      {
        name: 'PYROCLAST-9',
        type: 'CHTHONIAN LAVA WORLD',
        desc: 'Tidally locked • 1,420 K • Active magma rifts',
        texType: 'lava',
        size: 0.65,
        dist: 4.8,
        inc: 0.14,
        speed: 0.48,
        roughness: 0.75,
        metalness: 0.25,
        emissiveColor: 0xff3b00,
        emissiveIntensity: 0.20
      },
      {
        name: 'AURELIA PRIME',
        type: 'HABITABLE SUPER-EARTH',
        desc: '1.24 R⊕ • N2-O2 atmosphere • 288 K',
        texType: 'habitable',
        size: 0.98,
        dist: 7.2,
        inc: 0.02,
        speed: 0.36,
        roughness: 0.45,
        metalness: 0.1,
        atmoColor: 0x4da6ff,
        moon: { size: 0.22, dist: 1.65, speed: 2.4, color: 0xa8b8cc }
      },
      {
        name: 'THALASSA-IV',
        type: 'ABYSSAL OCEAN WORLD',
        desc: 'Deep marine mantle • Bioluminescent trenches',
        texType: 'ocean',
        size: 0.86,
        dist: 9.8,
        inc: 0.065,
        speed: 0.28,
        roughness: 0.3,
        metalness: 0.3,
        emissiveColor: 0x00d2ff,
        emissiveIntensity: 0.14,
        atmoColor: 0x00e1ff
      },
      {
        name: 'ZEPHYRUS HYPERION',
        type: 'STRATIFIED GAS GIANT',
        desc: '4.8 MJ • Great Dark Vortex • Dual ring system',
        texType: 'gas_giant',
        size: 2.25,
        dist: 13.8,
        inc: 0.038,
        speed: 0.18,
        roughness: 0.5,
        metalness: 0.1,
        ring: true,
        atmoColor: 0xdeb887,
        moon: { size: 0.26, dist: 3.4, speed: 1.6, color: 0xc4b299 }
      },
      {
        name: 'VALKYRIE-7',
        type: 'CRYOGENIC ICE GIANT',
        desc: 'Methane upper clouds • Perpendicular dust ring',
        texType: 'ice_giant',
        size: 1.35,
        dist: 18.2,
        inc: 0.075,
        speed: 0.12,
        roughness: 0.4,
        metalness: 0.1,
        polarRing: true,
        atmoColor: 0x7be4ff
      },
      {
        name: 'OBLIVION CORE',
        type: 'SHATTERED PROTO-PLANET',
        desc: 'Iron-silicate core remnant • Micro-debris swarm',
        texType: 'shattered',
        size: 0.76,
        dist: 22.0,
        inc: 0.045,
        speed: 0.08,
        roughness: 0.9,
        metalness: 0.45,
        hasDebris: true
      }
    ];

    const planets = [];
    const planetMeshes = [];
    let aureliaMoon = null;
    let aureliaMoonAngle = Math.random() * Math.PI * 2;
    let zephyrusMoon = null;
    let zephyrusMoonAngle = Math.random() * Math.PI * 2;

    for (const p of EXOPLANETS) {
      const tex = createPlanetTexture(p.texType);
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(p.size, 32, 32),
        new THREE.MeshStandardMaterial({
          map: tex,
          roughness: p.roughness,
          metalness: p.metalness,
          emissive: p.emissiveColor ? new THREE.Color(p.emissiveColor) : new THREE.Color(0x000000),
          emissiveIntensity: p.emissiveIntensity || 0.0
        })
      );
      mesh.userData.name = p.name;
      mesh.userData.type = p.type;
      mesh.userData.desc = p.desc;
      mesh.userData.size = p.size;

      // Atmospheric Fresnel limb glow for worlds with atmospheres
      if (p.atmoColor) {
        const atmo = new THREE.Mesh(
          new THREE.SphereGeometry(p.size * 1.035, 32, 32),
          new THREE.MeshBasicMaterial({
            color: p.atmoColor,
            transparent: true,
            opacity: 0.28,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false
          })
        );
        mesh.add(atmo);
      }

      // Zephyrus dual ring system with Cassini division
      if (p.ring) {
        const ringTex = createRingTexture();
        const ringMesh = new THREE.Mesh(
          new THREE.RingGeometry(p.size * 1.35, p.size * 2.55, 64),
          new THREE.MeshStandardMaterial({
            map: ringTex,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.92,
            roughness: 0.6,
            metalness: 0.1
          })
        );
        ringMesh.rotation.x = Math.PI / 2 + 0.38;
        ringMesh.rotation.z = 0.22;
        mesh.add(ringMesh);
      }

      // Valkyrie perpendicular polar ring
      if (p.polarRing) {
        const iceRingTex = createIceRingTexture();
        const polarRingMesh = new THREE.Mesh(
          new THREE.RingGeometry(p.size * 1.3, p.size * 2.1, 64),
          new THREE.MeshBasicMaterial({
            map: iceRingTex,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.65,
            blending: THREE.AdditiveBlending
          })
        );
        polarRingMesh.rotation.y = Math.PI / 2 + 0.2;
        polarRingMesh.rotation.z = 0.15;
        mesh.add(polarRingMesh);
      }

      // Oblivion micro-debris swarm
      if (p.hasDebris) {
        const debrisCount = 140;
        const debrisGeo = new THREE.BufferGeometry();
        const debrisPos = new Float32Array(debrisCount * 3);
        for (let i = 0; i < debrisCount; i++) {
          const r = p.size * 1.4 + Math.random() * (p.size * 1.1);
          const th = Math.random() * Math.PI * 2;
          debrisPos[i * 3] = Math.cos(th) * r;
          debrisPos[i * 3 + 1] = (Math.random() - 0.5) * 0.4;
          debrisPos[i * 3 + 2] = Math.sin(th) * r;
        }
        debrisGeo.setAttribute('position', new THREE.BufferAttribute(debrisPos, 3));
        const oblivionDebris = new THREE.Points(debrisGeo, new THREE.PointsMaterial({
          size: 0.10,
          color: 0x889bb8,
          transparent: true,
          opacity: 0.75
        }));
        mesh.add(oblivionDebris);
      }

      const angle = Math.random() * Math.PI * 2;
      mesh.position.set(
        SOL.x + Math.cos(angle) * p.dist,
        SOL.y + Math.sin(angle) * p.dist * Math.sin(p.inc),
        SOL.z + Math.sin(angle) * p.dist * Math.cos(p.inc)
      );
      solarGroup.add(mesh);
      planets.push({ ...p, mesh, angle });
      planetMeshes.push(mesh);

      // Dedicated moonlets
      if (p.name === 'AURELIA PRIME') {
        aureliaMoon = new THREE.Mesh(
          new THREE.SphereGeometry(p.moon.size, 16, 16),
          new THREE.MeshStandardMaterial({ color: p.moon.color, roughness: 0.7 })
        );
        solarGroup.add(aureliaMoon);
      } else if (p.name === 'ZEPHYRUS HYPERION') {
        zephyrusMoon = new THREE.Mesh(
          new THREE.SphereGeometry(p.moon.size, 16, 16),
          new THREE.MeshStandardMaterial({ color: p.moon.color, roughness: 0.7 })
        );
        solarGroup.add(zephyrusMoon);
      }

      // Orbital telemetry guide ring
      const orbit = new THREE.Mesh(
        new THREE.RingGeometry(p.dist - 0.02, p.dist + 0.02, 128),
        new THREE.MeshBasicMaterial({ color: 0x3d70a3, side: THREE.DoubleSide, transparent: true, opacity: 0.18 })
      );
      orbit.position.copy(SOL);
      orbit.rotation.x = Math.PI / 2;
      orbit.rotation.y = p.inc;
      solarGroup.add(orbit);
    }

    // Finale starfield: static shell, zero per-frame cost.
    const starCount = 1500;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starCol = new Float32Array(starCount * 3);
    const starTint = new THREE.Color();
    for (let i = 0; i < starCount; i++) {
      const r = 55 + Math.random() * 95;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      starPos[i * 3] = SOL.x + r * Math.sin(ph) * Math.cos(th);
      starPos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.6;
      starPos[i * 3 + 2] = r * Math.cos(ph);
      const pick = Math.random();
      starTint.set(pick < 0.6 ? 0xffffff : (pick < 0.8 ? 0xbdd4ff : 0xffe0b8)).multiplyScalar(0.5 + Math.random() * 0.5);
      starTint.toArray(starCol, i * 3);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3));
    const starfield = new THREE.Points(starGeo, new THREE.PointsMaterial({
      size: 0.6,
      map: sphereTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }));
    solarGroup.add(starfield);

    // Asteroid belt between Thalassa-IV and Zephyrus
    const beltCount = 1200;
    const beltGeo = new THREE.BufferGeometry();
    const beltPos = new Float32Array(beltCount * 3);
    const beltCol = new Float32Array(beltCount * 3);
    const beltTint = new THREE.Color();
    for (let i = 0; i < beltCount; i++) {
      const r = 11.4 + Math.random() * 1.5;
      const a = Math.random() * Math.PI * 2;
      beltPos[i * 3] = SOL.x + Math.cos(a) * r;
      beltPos[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      beltPos[i * 3 + 2] = Math.sin(a) * r;
      beltTint.set(0x7090b8).multiplyScalar(0.25 + Math.random() * 0.45);
      beltTint.toArray(beltCol, i * 3);
    }
    beltGeo.setAttribute('position', new THREE.BufferAttribute(beltPos, 3));
    beltGeo.setAttribute('color', new THREE.BufferAttribute(beltCol, 3));
    const belt = new THREE.Points(beltGeo, new THREE.PointsMaterial({
      size: 0.16,
      map: sphereTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }));
    solarGroup.add(belt);

    // Hover telemetry HUD tooltip
    const tip = document.createElement('div');
    tip.id = 'planet-tip';
    tip.style.cssText = 'position:fixed;z-index:60;pointer-events:none;display:none;transform:translate(-50%,-160%);font-family:SFMono-Regular,Consolas,monospace;background:rgba(8,14,24,0.90);backdrop-filter:blur(10px);border:1px solid rgba(80,180,255,0.4);box-shadow:0 0 20px rgba(0,140,255,0.25);padding:7px 14px;border-radius:6px;white-space:nowrap;line-height:1.35;text-align:left;';
    document.body.appendChild(tip);
    const _tipV = new THREE.Vector3();
    const _tipWhite = new THREE.Color(0xffffff);

    // ------------------------------------------------------------------------
    // 6. ENGINE STATE & INTERACTION ARCHITECTURE (INDEPENDENT ROTATION & HOVER)
    // ------------------------------------------------------------------------
    const es = { camZ: 20, camY: 3.2, camX: 0, lookX: 0, lookY: 0, lookZ: 0, baseSpeed: 1.0 };

    let mouseNDC = new THREE.Vector2(0, 0);
    let mousePx = { x: -9999, y: -9999 };
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
      mousePx.x = e.clientX;
      mousePx.y = e.clientY;
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

      // Interaction is parked while scrolling (up or down): parallax holds
      // its line instead of chasing, so motion systems never fight the
      // scroll and read as sticking. Everything resumes after scroll stops.
      if (!isScrolling) {
        mouseSmooth.x += (mouseNDC.x - mouseSmooth.x) * (1.0 - Math.exp(-5.0 * dt));
        mouseSmooth.y += (mouseNDC.y - mouseSmooth.y) * (1.0 - Math.exp(-5.0 * dt));
      }

      const targetCamX = es.camX + mouseSmooth.x * (solarGroup.visible ? 6.0 : 1.5);
      const targetCamY = es.camY + mouseSmooth.y * (solarGroup.visible ? 4.5 : 1.5);

      // Responsive camera tracking tuned for Lenis momentum scroll (eliminates rubber-band lag)
      camera.position.x += (targetCamX - camera.position.x) * (1.0 - Math.exp(-9.0 * dt));
      camera.position.y += (targetCamY - camera.position.y) * (1.0 - Math.exp(-9.0 * dt));
      camera.position.z += (es.camZ - camera.position.z) * (1.0 - Math.exp(-9.0 * dt));
      camera.lookAt(es.lookX, es.lookY, es.lookZ);

      // Hover is cancelled while scrolling and decays fast, so the disk
      // never tugs against the scroll direction. Recovers on pause.
      const targetHover = (!isScrolling && isMousePresent) ? 1.0 : 0.0;
      hoverStrength += (targetHover - hoverStrength) * (1.0 - Math.exp(-(isScrolling ? 14.0 : 8.0) * dt));

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
      // Ignition follows the climb: dim ember at load, full blazing ring
      // only when the top-down view completes.
      const topness = Math.min(1, Math.max(0, (es.camY - 4) / 16));
      particleUniforms.uIgnite.value = 0.25 + 0.75 * topness;

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

      // Top-view presence via crisp ring geometry, NOT blur: bloom actually
      // drops as the camera climbs so the plunge stays sharp, while the
      // photon ring burns to full for a defined glowing edge from above.
      // Top-view presence comes from the PARTICLE ring (beamed glow), not
      // geometry: the flat orange rings fade out as the camera climbs so no
      // orange circle ever draws over the top-down view.
      // topness computed above with the uniforms.
      // No geometry rings to fade — bloom + particle ignition carry the top view.
      bloomPass.strength = 0.55 + topness * 0.35;

      // Solar system life: independent orbits + hover highlight. Guarded by
      // visibility, so mid-page frames pay nothing for the finale.
      if (solarGroup.visible) {
        for (const pl of planets) {
          pl.angle += dt * pl.speed;
          pl.mesh.position.set(
            SOL.x + Math.cos(pl.angle) * pl.dist,
            SOL.y + Math.sin(pl.angle) * pl.dist * Math.sin(pl.inc),
            SOL.z + Math.sin(pl.angle) * pl.dist * Math.cos(pl.inc)
          );
          // Realistic axial rotation
          pl.mesh.rotation.y += dt * 1.2;
        }
        // Dedicated moonlet orbits
        if (aureliaMoon) {
          aureliaMoonAngle += dt * 2.4;
          const ap = planets.find(p => p.name === 'AURELIA PRIME');
          if (ap) {
            aureliaMoon.position.set(
              ap.mesh.position.x + Math.cos(aureliaMoonAngle) * 1.65,
              ap.mesh.position.y + Math.sin(aureliaMoonAngle) * 0.35,
              ap.mesh.position.z + Math.sin(aureliaMoonAngle) * 1.65
            );
          }
        }
        if (zephyrusMoon) {
          zephyrusMoonAngle += dt * 1.6;
          const zp = planets.find(p => p.name === 'ZEPHYRUS HYPERION');
          if (zp) {
            zephyrusMoon.position.set(
              zp.mesh.position.x + Math.cos(zephyrusMoonAngle) * 3.4,
              zp.mesh.position.y + Math.sin(zephyrusMoonAngle) * 0.6,
              zp.mesh.position.z + Math.sin(zephyrusMoonAngle) * 3.4
            );
          }
        }
        // Micro-pulsation of stellar corona
        sunGlow.scale.setScalar(12 + Math.sin(t * 1.8) * 0.5);
        sunInnerGlow.scale.setScalar(6.5 + Math.cos(t * 2.2) * 0.25);

        // Screen-space HUD hover
        if (isMousePresent && mousePx.x > -9998) {
          let best = null;
          let bestD = 1e9;
          for (const pl of planets) {
            _tipV.copy(pl.mesh.position).project(camera);
            if (_tipV.z > 1) {
              pl._sx = -9999; pl._sy = -9999;
              continue;
            }
            pl._sx = (_tipV.x * 0.5 + 0.5) * window.innerWidth;
            pl._sy = (-_tipV.y * 0.5 + 0.5) * window.innerHeight;
            const d = Math.hypot(pl._sx - mousePx.x, pl._sy - mousePx.y);
            const rr = 36 + pl.mesh.scale.x * pl.size * 32;
            if (d < rr && d < bestD) { bestD = d; best = pl; }
          }
          for (const pl of planets) {
            const target = (pl === best) ? 1.25 : 1.0;
            const s = pl.mesh.scale.x + (target - pl.mesh.scale.x) * (1.0 - Math.exp(-10 * dt));
            pl.mesh.scale.setScalar(s);
          }
          if (best) {
            tip.style.display = 'block';
            tip.innerHTML = `
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;">
                <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#00e1ff;box-shadow:0 0 8px #00e1ff;"></span>
                <span style="font-size:0.74rem;font-weight:700;letter-spacing:0.14em;color:#e6f5ff;">${best.mesh.userData.name}</span>
              </div>
              <div style="font-size:0.60rem;font-weight:600;letter-spacing:0.08em;color:#00d2ff;opacity:0.92;">${best.mesh.userData.type}</div>
              <div style="font-size:0.56rem;color:#7e9fb8;margin-top:2px;">${best.mesh.userData.desc}</div>
            `;
            tip.style.left = best._sx + 'px';
            tip.style.top = best._sy + 'px';
          } else {
            tip.style.display = 'none';
          }
        } else if (tip.style.display !== 'none') {
          tip.style.display = 'none';
        }
      } else if (tip.style.display !== 'none') {
        tip.style.display = 'none';
      }

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
    // masterTl completes exactly where the 260vh finale runway begins
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: () => (document.documentElement.scrollHeight - window.innerHeight - window.innerHeight * 2.6),
        scrub: 0.5,
        invalidateOnRefresh: true
      }
    });

    masterTl.to(es, {
      camZ: 17.0,
      camY: 3.8,
      camX: 3.0,
      lookX: 3.0,
      duration: 0.4,
      ease: "power1.inOut"
    });

    masterTl.to(es, {
      camY: 4.4,
      camX: anchorX * 0.5,
      lookX: anchorX * 0.5,
      camZ: 14.0,
      duration: 0.35,
      ease: "power2.inOut"
    });

    // Gradual top-down plunge spread across the finale, not a last-second snap
    masterTl.to(es, {
      camY: 26.0,
      camZ: 0.5, // 0.5 instead of 0 to prevent gimbal lock
      camX: anchorX,
      lookX: anchorX,
      duration: 0.9,
      ease: "power2.inOut"
    });

    // ------------------------------------------------------------------------
    // 8b. CINEMATIC FINALE SEQUENCE:
    // Event horizon plunge -> singularity compression -> celestial white flare ->
    // gradual dawn dissipation -> Astralis Exoplanetary reveal.
    // Extended over 260vh runway for organic, natural momentum.
    // ------------------------------------------------------------------------
    const seg = (a, b, x) => Math.min(1, Math.max(0, (x - a) / (b - a)));
    const finaleST = ScrollTrigger.create({
      trigger: '.scroll-end-trigger',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 0.8, // Silky smooth cinematic scrub
      onUpdate: (self) => {
        const q = self.progress;

        // PHASE 1: EVENT HORIZON PLUNGE (0.00 -> 0.46)
        if (q < 0.48) {
          const d = seg(0.0, 0.40, q);
          const e = d * d * (3 - 2 * d); // Hermite smoothstep
          es.camX = anchorX + 1.2 * (1 - e);
          es.camY = 26.0 - 24.5 * e; // Descent down to singularity equator
          es.camZ = 0.5 + 4.5 * (1 - e);
          es.lookX = anchorX;
          es.lookY = 0;
          es.lookZ = 0;

          // Accretion disk & lensing dissolve organically as camera penetrates the horizon
          particleUniforms.uFade.value = 1.0 - seg(0.18, 0.40, q);
          lensingPass.uniforms.uLensFade.value = 1.0 - seg(0.24, 0.44, q);
        } else {
          // PHASE 3: ASTRALIS 3D PERSPECTIVE (0.48 -> 1.00)
          const sr = seg(0.52, 1.0, q);
          const se = sr * sr * (3 - 2 * sr);
          es.camX = anchorX - 7.5 + 3.5 * se;
          es.camY = 11.0 - 3.0 * se;
          es.camZ = 25.0 - 5.0 * se;
          es.lookX = anchorX;
          es.lookY = 0;
          es.lookZ = 0;
        }

        // Clean scene swap under full whiteout hold
        const bhOn = q < 0.48;
        particles.visible = bhOn;
        infall.visible = bhOn;
        singularity.visible = bhOn;
        ambientParticles.visible = bhOn;
        solarGroup.visible = !bhOn;

        // Deck furniture bows out as the plunge begins
        const deckOp = q > 0.32 ? '0' : '1';
        const deckC = document.getElementById('deck-counter');
        const deckP = document.getElementById('deck-progress');
        if (deckC) deckC.style.opacity = deckOp;
        if (deckP) deckP.style.opacity = deckOp;

        // PROGRESSIVE, NATURAL LIGHTING FLOW:
        // 1. Infall shadow (0.10 -> 0.34): Darkness deepens as horizon wraps view
        // 2. Singularity quantum burst (0.34 -> 0.50): Incandescent celestial flare swells
        // 3. Peak whiteout hold (0.50 -> 0.58): Group swap completes seamlessly
        // 4. Gradual dawn dissipation (0.58 -> 0.85): White dissolves like morning fog into deep space!
        const overlay = document.getElementById('flash-overlay');
        if (overlay) {
          if (q < 0.34) {
            overlay.style.backgroundColor = '#000000';
            overlay.style.opacity = seg(0.10, 0.32, q).toFixed(3);
          } else if (q < 0.50) {
            overlay.style.backgroundColor = '#f2f8ff';
            overlay.style.opacity = seg(0.34, 0.50, q).toFixed(3);
          } else if (q < 0.58) {
            overlay.style.backgroundColor = '#f2f8ff';
            overlay.style.opacity = '1';
          } else {
            overlay.style.backgroundColor = '#f2f8ff';
            overlay.style.opacity = (1 - seg(0.58, 0.85, q)).toFixed(3);
          }
        }
      }
    });

    window.__getBHScreenCoord = () => {
      const v = new THREE.Vector3(anchorX, 0, 0).project(camera);
      return {
        x: (v.x * 0.5 + 0.5) * window.innerWidth,
        y: (-v.y * 0.5 + 0.5) * window.innerHeight
      };
    };

    // Debug hook (used by automated verification): solar visibility, mouse
    // state and live planet screen positions.
    window.__solarDebug = () => ({
      visible: solarGroup.visible,
      present: isMousePresent,
      mouse: { x: mousePx.x, y: mousePx.y },
      planets: planets.map((pl) => {
        _tipV.copy(pl.mesh.position).project(camera);
        return {
          name: pl.mesh.userData.name,
          sx: Math.round((_tipV.x * 0.5 + 0.5) * window.innerWidth),
          sy: Math.round((-_tipV.y * 0.5 + 0.5) * window.innerHeight)
        };
      })
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      masterTl.kill();
      if (finaleST) finaleST.kill();
      if (tip && tip.parentNode) tip.parentNode.removeChild(tip);
      composer.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="blackhole-canvas" ref={canvasRef} />;
}
