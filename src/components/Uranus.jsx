import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, useTexture, Bounds } from "@react-three/drei";
import { useRef } from "react";

const UranusModel = () => {
  const { scene } = useGLTF("/uranus/scene.gltf");
  const texture = useTexture({
    map: "/uranus/textures/moon_baseColor.jpeg",
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture.map;
      child.material.needsUpdate = true;
    }
  });

  const UranusRef = useRef();
  useFrame(() => {
    if (UranusRef.current) {
      UranusRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group position={[0, 0, 0]} ref={UranusRef}>
      <primitive object={scene} scale={[1, 1, 1]} />
    </group>
  );
};

const UranusScene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Bounds fit clip margin={1.2}>
        <UranusModel />
      </Bounds>

      <OrbitControls makeDefault enableZoom={false}/>
    </Canvas>
  );
};

export default UranusScene;
