import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, useTexture } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MercuryModel = () => {
  const { scene } = useGLTF("/mercury/scene.gltf");
  const texture = useTexture({
    map: "/mercury/textures/Material.002_diffuse.jpeg",
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture.map;
      child.material.needsUpdate = true;
    }
  });

  const mercuryRef = useRef();

  useFrame(() => {
    if (mercuryRef.current) {
      mercuryRef.current.rotation.y += 0.003;
    }
  });

  useEffect(() => {
    if (mercuryRef.current) {
      gsap.to(mercuryRef.current.scale, {
        x: 2,
        y: 2,
        z: 2,
        scrollTrigger: {
          trigger: "#mercury-section", 
          start: "center center",
          end: "bottom center",
          scrub: true,
          markers: true,
        },
      });
    }
  }, []);

  return (
    <group ref={mercuryRef}>
      <primitive object={scene} scale={[1, 1, 1]} />
    </group>
  );
};

const MercuryScene = () => {
  return (
    <div id="mercury-section" style={{ height: "100vh" }}>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <MercuryModel />
        <OrbitControls makeDefault enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default MercuryScene;
