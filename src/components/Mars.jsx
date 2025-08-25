import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, useTexture, Bounds } from "@react-three/drei";
import { useRef } from "react";

const MarsModel = () => {
  const { scene } = useGLTF("/mars/scene.gltf");
  const texture = useTexture({
    map: "/mars/textures/Material.002_diffuse.jpeg",
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture.map;
      child.material.needsUpdate = true;
    }
  });

  const MarshRef = useRef();
  useFrame(() => {
    if (MarshRef.current) {
      MarshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group position={[0, 0, 0]} ref={MarshRef}>
      <primitive object={scene} scale={[1, 1, 1]} />
    </group>
  );
};

const MarsScene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Bounds fit clip margin={1.2}>
        <MarsModel />
      </Bounds>

      <OrbitControls makeDefault enableZoom={false}/>
    </Canvas>
  );
};

export default MarsScene;
