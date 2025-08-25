import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, useTexture, Bounds } from "@react-three/drei";
import { useRef } from "react";

const JupiterModel = () => {
  const { scene } = useGLTF("/realistic_jupiter/scene.gltf");
  const texture = useTexture({
    map: "/realistic_jupiter/textures/Material_baseColor.jpeg",
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture.map;
      child.material.needsUpdate = true;
    }
  });

  const JupiterRef = useRef();
  useFrame(() => {
    if (JupiterRef.current) {
      JupiterRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group position={[0, 0, 0]} ref={JupiterRef}>
      <primitive object={scene} scale={[1, 1, 1]} />
    </group>
  );
};

const JupiterScene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Bounds fit clip margin={1.2}>
        <JupiterModel />
      </Bounds>

      <OrbitControls makeDefault enableZoom={false}/>
    </Canvas>
  );
};

export default JupiterScene;
