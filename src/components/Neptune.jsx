import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, useTexture, Bounds } from "@react-three/drei";
import { useRef } from "react";

const NeptuneModel = () => {
  const { scene } = useGLTF("/neptune/scene.gltf");
  const texture = useTexture({
    map: "/neptune/textures/Material.002_diffuse.jpeg",
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture.map;
      child.material.needsUpdate = true;
    }
  });

  const NeptuneRef = useRef();
  useFrame(() => {
    if (NeptuneRef.current) {
      NeptuneRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group position={[0, 0, 0]} ref={NeptuneRef}>
      <primitive object={scene} scale={[1, 1, 1]} />
    </group>
  );
};

const NeptuneScene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Bounds fit clip margin={1.2}>
        <NeptuneModel />
      </Bounds>

      <OrbitControls makeDefault enableZoom={false}/>
    </Canvas>
  );
};

export default NeptuneScene;
