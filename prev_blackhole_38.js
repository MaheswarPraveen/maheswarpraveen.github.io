// ==========================================================================
// MAHESWAR PRAVEEN - TRUE INTERACTIVE WEBGL & NARRATIVE SCROLL
// Powered by Three.js (25,000 Interactive Particles), GSAP, and SplitType.
// ==========================================================================

window.addEventListener('DOMContentLoaded', initHybridEngine);

function initHybridEngine() {
  const canvas = document.getElementById('blackhole-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // --------------------------------------------------------------------------
  // 1. TEXT SPLITTING: SPLIT-TYPE (CHARACTER LEVEL)
  // --------------------------------------------------------------------------
  const splitText = new SplitType('.card h1, .card h3, .card p', { types: 'words, chars' });

  // --------------------------------------------------------------------------
  // 2. TRUE INTERACTIVE WEBGL: PARTICLE ACCRETION DISK
  // --------------------------------------------------------------------------
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // The Singularity (Event Horizon) - Pure Black Sphere
  const singularityGeo = new THREE.SphereGeometry(1.5, 64, 64);
  const singularityMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const singularity = new THREE.Mesh(singularityGeo, singularityMat);
  
  // Anchor singularity
  const anchorX = 4.0;
  singularity.position.set(anchorX, 0, 0);
  scene.add(singularity);

  const haloGeo = new THREE.RingGeometry(1.5, 1.8, 64);
  const haloMat = new THREE.MeshBasicMaterial({ 
      color: 0xffa040, 
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
  });
  const halo = new THREE.Mesh(haloGeo, haloMat);
  halo.position.set(anchorX, 0, 0);
  halo.rotation.x = Math.PI / 2;
  scene.add(halo);

  // Accretion Disk - 25,000 Glowing Particles
  const particleCount = 25000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const angles = new Float32Array(particleCount);
  const radii = new Float32Array(particleCount);

  const colorInside = new THREE.Color(0xfff5e6); // Blinding white-gold
  const colorMid = new THREE.Color(0xff6600);    // Fiery orange
  const colorOutside = new THREE.Color(0x880000); // Deep crimson

  for (let i = 0; i < particleCount; i++) {
      const r = 1.8 + Math.pow(Math.random(), 1.5) * 6.2;
      const angle = Math.random() * Math.PI * 2;
      
      radii[i] = r;
      angles[i] = angle;

      positions[i * 3] = anchorX + Math.cos(angle) * r;
      positions[i * 3 + 1] = (Math.random() - 0.5) * (0.3 + r * 0.05);
      positions[i * 3 + 2] = Math.sin(angle) * r;

      const normalizedR = (r - 1.8) / 6.2;
      const mixedColor = colorInside.clone();
      if (normalizedR < 0.3) {
          mixedColor.lerp(colorMid, normalizedR / 0.3);
      } else {
          mixedColor.copy(colorMid).lerp(colorOutside, (normalizedR - 0.3) / 0.7);
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
  });

  const particles = new THREE.Points(geometry, particleMat);
  scene.add(particles);

  // Global Engine State (Driven by GSAP)
  const engineState = {
      camZ: 30, // Start far away
      camY: 3,
      camX: 0,
      lookX: anchorX,
      lookY: 0,
      lookZ: 0,
      speedMultiplier: 15.0 // EXTREMELY fast initially
  };

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX - window.innerWidth / 2);
      mouseY = (e.clientY - window.innerHeight / 2);
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const clock = new THREE.Clock();
  
  function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();
    
    // Parallax added on top of GSAP engine state
    targetX = mouseX * 0.005;
    targetY = mouseY * 0.005;
    camera.position.x += (targetX + engineState.camX - camera.position.x) * 0.05;
    camera.position.y += (-targetY + engineState.camY - camera.position.y) * 0.05;
    camera.position.z += (engineState.camZ - camera.position.z) * 0.05;
    
    camera.lookAt(new THREE.Vector3(engineState.lookX, engineState.lookY, engineState.lookZ));

    const pArray = particles.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
        const speed = 0.5 / Math.sqrt(radii[i]); 
        // Driven by global speed multiplier!
        angles[i] -= speed * 0.016 * engineState.speedMultiplier; 

        pArray[i * 3] = anchorX + Math.cos(angles[i]) * radii[i];
        pArray[i * 3 + 2] = Math.sin(angles[i]) * radii[i];
        pArray[i * 3 + 1] = Math.sin(time * 2.0 + radii[i] * 5.0) * 0.1 * (1.0 + Math.abs(targetX));
    }
    particles.geometry.attributes.position.needsUpdate = true;
    halo.scale.setScalar(1.0 + Math.sin(time * 4.0) * 0.02);

    renderer.render(scene, camera);
  }
  
  // Set initial position immediately
  camera.position.set(engineState.camX, engineState.camY, engineState.camZ);
  animate();

  // --------------------------------------------------------------------------
  // 3. GSAP SCROLL-TRIGGER NARRATIVE TIMELINES
  // --------------------------------------------------------------------------
  gsap.registerPlugin(ScrollTrigger);

  // --- MASTER TIMELINE: Camera Journey & Speed ---
  const masterTl = gsap.timeline({
    scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.0 // Smooth interpolation
    }
  });

  // Phase 1: Scroll through projects (0% to ~85%)
  // Camera slowly approaches to normal viewing distance, physics speed normalizes.
  masterTl.to(engineState, {
      camZ: 10,
      speedMultiplier: 1.0,
      duration: 0.85 
  });

  // Phase 2: Reach the bottom spacer (85% to 95%)
  // Fly OVER the black hole for a TOP VIEW!
  masterTl.to(engineState, {
      camY: 15,
      camX: anchorX,
      camZ: 0.1, // Directly overhead
      lookX: anchorX,
      lookY: 0,
      lookZ: 0,
      duration: 0.1
  });

  // Phase 3: The Swallow Flash (95% to 98%)
  masterTl.to('#flash-overlay', {
      backgroundColor: "rgba(255, 255, 255, 1)", // Blinding flash
      duration: 0.03
  });

  // Phase 4: Pitch Black (98% to 100%)
  masterTl.to('#flash-overlay', {
      backgroundColor: "rgba(0, 0, 0, 1)", // Absolute darkness
      duration: 0.02
  });


  // --- CARD SPAGHETTIFICATION (To Orange/Red Particles) ---
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    if (index === 0) return; 
    
    const chars = card.querySelectorAll('.char');
    
    gsap.to(chars, {
      scrollTrigger: {
        trigger: card,
        start: "top 15%", 
        end: "top -15%",
        scrub: 2.0,       
      },
      
      // Target the exact 2D position of the orange/red accretion disk on the right
      x: window.innerWidth * 0.85, 
      y: (i, el) => {
          const rect = el.getBoundingClientRect();
          // Force EXACTLY to center of screen Y (the horizon)
          return (window.innerHeight / 2) - rect.top; 
      }, 
      
      // TURN INTO PLASMA! (Match the orange/red particle colors)
      color: "#ff6600",
      textShadow: "0px 0px 20px #ff0000",
      
      rotationZ: () => Math.random() * 360, 
      rotationX: () => Math.random() * 360, 
      rotationY: () => Math.random() * 360,
      scale: 0.1, 
      opacity: 0,
      
      filter: "blur(8px)",
      
      stagger: {
        amount: 1.0, 
        from: "end",
        ease: "power2.in" 
      },
      ease: "power3.in" 
    });
    
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 20%", 
        end: "top 0%",
        scrub: true,
      },
      backgroundColor: "rgba(8, 10, 15, 0)",
      borderColor: "rgba(255, 255, 255, 0)",
      boxShadow: "0 0px 0px rgba(0,0,0,0)",
      backdropFilter: "blur(0px)",
      ease: "power2.out"
    });
  });
}