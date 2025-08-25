import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, OrbitControls, Bounds } from "@react-three/drei";
import { useRef } from "react";

const SaturnModel = () => {
  const saturnRef = useRef();
  const ringref = useRef();
  const groupref = useRef();

  // Load textures
  const textures = useTexture({
    map: "/saturn/textures/saturn1_A_diffuse.png",
    specularMap: "/saturn/textures/saturn1_A_specularGlossiness.png",
    rings: "/saturn/textures/saturn2_B_diffuse.png",
  });

  // Rotate Saturn
  useFrame(() => {
    if (saturnRef.current) {
      saturnRef.current.rotation.y += 0.004;
      
    };
    if (ringref.current) {
        ringref.current.rotation.z += 0.003;
    }
  });

  return (
    <group rotation={[0.5, 0.2, 0]} ref={groupref}>
      {/* Saturn sphere */}
      <mesh ref={saturnRef} scale={[1, 1, 1]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={textures.map}
          specularMap={textures.specularMap}
        />
      </mesh>

      {/* Saturn rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]} ref={ringref} >
        <ringGeometry args={[1.2, 2.5, 128]} />
        <meshBasicMaterial
          map={textures.rings}
          transparent
          side={2} //
        />
      </mesh>
    </group>
  );
};

const SaturnScene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Bounds fit clip margin={1.2}>
        <SaturnModel />
      </Bounds>

      <OrbitControls makeDefault enableZoom={false} />
    </Canvas>
  );
};

export default SaturnScene;
