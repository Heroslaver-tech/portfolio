//React
import { useRef } from "react";

//Drei
import { OrbitControls, useTexture } from "@react-three/drei";

//React Three fiber
import { useFrame } from "@react-three/fiber";
//images
import GreenmapCap from'./metallic.png'

const Experience = () => {
  const boxRef = useRef();
  const coneRef = useRef();
  const torusRef = useRef();
  const matCap = useTexture(GreenmapCap);

  useFrame((state, delta) => {
    boxRef.current.rotation.x += 2 * delta;
    coneRef.current.rotation.x = Math.sin(state.clock.getElapsedTime());
    coneRef.current.rotation.z += 1 * delta;
    coneRef.current.position.y = Math.sin(state.clock.getElapsedTime());

    torusRef.current.position.y = Math.cos(state.clock.getElapsedTime());
  });

  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />

      <mesh ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshLambertMaterial color={"#0d21dc"} emissive={"#0d21dc"} />
      </mesh>
      <mesh ref={coneRef} position={[2, -2, -1]}>
        <coneGeometry position={[1, 2, 5]} />
        <meshToonMaterial color="#ed26df" />
      </mesh>
      <mesh ref={torusRef} position={[4, 1, 1]}>
        <torusGeometry />
        <meshMatcapMaterial matcap={matCap} color={"white"}/>
      </mesh>
    </>
  );
};

export default Experience;
