"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function EarthModel() {
  const meshRef = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF("/earth.glb");

  const clonedScene = scene.clone();

  useEffect(() => {
    if (!groupRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(groupRef.current!.rotation, {
        y: Math.PI * 2,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  useEffect(() => {
    if (clonedScene) {
      clonedScene.position.set(0, -0.45, 0);
      clonedScene.rotation.set(0, 0, 0);
      clonedScene.scale.setScalar(0.1);

      clonedScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => {
                if (
                  mat instanceof THREE.MeshStandardMaterial ||
                  mat instanceof THREE.MeshPhongMaterial
                ) {
                  mat.needsUpdate = true;
                }
              });
            } else if (
              child.material instanceof THREE.MeshStandardMaterial ||
              child.material instanceof THREE.MeshPhongMaterial
            ) {
              child.material.needsUpdate = true;
            }
          }
        }
      });
    }
  }, [clonedScene]);

  return (
    <group ref={groupRef}>
      <group ref={meshRef}>
        <primitive object={clonedScene} />
      </group>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <directionalLight
        position={[-3, -3, -3]}
        intensity={0.3}
        color="#ffffff"
      />
    </>
  );
}

useGLTF.preload("/earth.glb");

export default function Earth3D() {
  return (
    <div className="w-full h-full flex items-center justify-center" id="earth">
      <Canvas
        camera={{
          position: [0, 0, 2],
          fov: 50,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Lights />
        <EarthModel />
      </Canvas>
    </div>
  );
}
