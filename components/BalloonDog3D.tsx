"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DogModel() {
  const { scene } = useGLTF("/models/ballon-dogf.glb");
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    scene.traverse((object) => {
      if ((object as THREE.Mesh).isMesh) {
        const mesh = object as THREE.Mesh;
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color("#ff6ec7"),
          metalness: 1,
          roughness: 0.2,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
          envMapIntensity: 1.3,
        });
      }
    });
  }, [scene]);

  useEffect(() => {
    const dog = ref.current;
    if (!dog) return;

    const tween = gsap.to(dog.rotation, {
      y: Math.PI * 2,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill(); 
      tween.kill();
    };
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <primitive ref={ref} object={scene} scale={1.2} position={[0, -0.5, 0]} />
  );
}

export default function BalloonDog3D() {
  return (
    <div
      id="hero-dog"
      className=" w-full h-[600px] md:h-[800px] bg-transparent"
    >
      <Canvas camera={{ position: [0, 1.2, 20], fov: 40 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} intensity={2} />
        <DogModel />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
