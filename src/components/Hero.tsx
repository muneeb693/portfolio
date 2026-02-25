import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, Text, MeshDistortMaterial, Sphere, Line } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, DepthOfField, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';
import * as THREE from 'three';

// Holographic Neural Lattice
function NeuralLattice() {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 30;
  const connectionRadius = 2.5;

  // Generate random nodes on a sphere
  const [nodes, connections] = useMemo(() => {
    const tempNodes: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 3;
      tempNodes.push(new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      ));
    }

    const tempConnections: [number, number][] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (tempNodes[i].distanceTo(tempNodes[j]) < connectionRadius) {
          tempConnections.push([i, j]);
        }
      }
    }
    return [tempNodes, tempConnections];
  }, []);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    connections.forEach(([i, j]) => {
      positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
      positions.push(nodes[j].x, nodes[j].y, nodes[j].z);
    });
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geometry;
  }, [nodes, connections]);

  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
    if (pulseRef.current) {
      const t = state.clock.elapsedTime * 2;
      const scale = 1 + Math.sin(t) * 0.05;
      pulseRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#00F5FF" />
        </mesh>
      ))}

      {/* Connections (Lattice) */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#00F5FF" transparent opacity={0.3} linewidth={1} />
      </lineSegments>

      {/* Inner Glowing Core (Sharp) */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[1.5, 4, 4]} />
        <meshBasicMaterial color="#8A2BE2" wireframe transparent opacity={0.4} />
      </mesh>

      {/* Outer Shell (Rotating) */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <sphereGeometry args={[4.5, 12, 12]} />
        <meshBasicMaterial color="#00F5FF" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

// Enhanced Starfield Particles
function Particles({ count = 150 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      s[i] = Math.random() * 2;
    }
    return [pos, s];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        color="#00F5FF"
        size={0.1}
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, 10), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

// Low-density Starfield for depth
function Scene() {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 5, 20]} />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00F5FF" />

      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={0.5} />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <NeuralLattice />
      </Float>

      <Particles count={150} />
      <Rig />

      <EffectComposer multisampling={8}>
        {/* Sharper Bloom - lower intensity, lower radius */}
        <Bloom
          luminanceThreshold={0.5}
          intensity={0.6}
          radius={0.3}
          mipmapBlur={false}
        />
        <Noise opacity={0.04} />
      </EffectComposer>
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.2]} performance={{ min: 0.5 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto pointer-events-none mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-4"
        >
          <span className="px-4 py-1 border border-[var(--color-neon-blue)] rounded-full text-[var(--color-neon-blue)] text-xs font-exo tracking-widest uppercase bg-[var(--color-neon-blue-dark)] backdrop-blur-md">
            System Online
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-white mb-6 text-glow uppercase tracking-wider leading-tight"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        >
          Muneeb Ur Rehman
        </motion.h1>

        <div className="h-12 md:h-16 mb-8">
          <TypeAnimation
            sequence={[
              'Building Digital Experiences with Code',
              2000,
              'Crafting Interactive Web Applications',
              2000,
              'Designing Futuristic Interfaces',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-xl md:text-3xl font-exo text-gray-300 font-light tracking-widest"
            repeat={Infinity}
          />
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 pointer-events-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-orbitron uppercase tracking-widest rounded-sm hover:bg-[var(--color-neon-blue)] hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] transition-all duration-300 interactive font-bold"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/30 text-white font-orbitron uppercase tracking-widest rounded-sm hover:border-[var(--color-neon-blue)] hover:text-[var(--color-neon-blue)] hover:bg-[var(--color-neon-blue-dark)] transition-all duration-300 interactive backdrop-blur-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-space tracking-[0.2em] uppercase text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
