import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, useTexture, Bounds } from "@react-three/drei";
import { useRef } from "react";

const VenusModel = () => {
  const { scene } = useGLTF("/venus/scene.gltf");
  const texture = useTexture({
    map: "/venus/textures/Material.002_diffuse.jpeg",
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture.map;
      child.material.needsUpdate = true;
    }
  });

  const VenusRef = useRef();
  useFrame(() => {
    if (VenusRef.current) {
      VenusRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group position={[0, 0, 0]} ref={VenusRef}>
      <primitive object={scene} scale={[1, 1, 1]} />
    </group>
  );
};

const VenusScene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Bounds fit clip margin={1.2}>
        <VenusModel />
      </Bounds>

      <OrbitControls makeDefault enableZoom={false} />
    </Canvas>
  );
};

export default VenusScene;
