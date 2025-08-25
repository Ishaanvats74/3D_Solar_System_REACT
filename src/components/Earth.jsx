import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, useTexture, Bounds } from "@react-three/drei";
import { useRef } from "react";

const EarthModel = () => {
  const { scene } = useGLTF("/planet_earth/scene.gltf");
  const texture = useTexture({
    map: "/planet_earth/textures/Material.001_baseColor.jpeg",
    roughnessMap: "/planet_earth/textures/Material.001_metallicRoughness.png",
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture.map;
      child.material.roughnessMap = texture.roughnessMap;
      child.material.metalnessMap = texture.roughnessMap;
      child.material.needsUpdate = true;
    }
  });

  const earthRef = useRef();
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group position={[0, 0, 0]} ref={earthRef}>
      <primitive object={scene} scale={[1, 1, 1]} />
    </group>
  );
};

const EarthScene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Bounds fit clip margin={1.2}>
        <EarthModel />
      </Bounds>

      <OrbitControls makeDefault enableZoom={false}/>
    </Canvas>
  );
};

export default EarthScene;
