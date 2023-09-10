//React
import { useRef } from "react";

//Drei
import { OrbitControls, useTexture } from "@react-three/drei";

//React Three fiber
import { useFrame } from "@react-three/fiber";

//images and model
import Beast from "../world/Beast";

const Experience = () => {
  const boxRef = useRef();
  const coneRef = useRef();
  const torusRef = useRef();
  const matCap = useTexture("/assets/matcaps/metallic.png");
  const PATH = '/assets/textures/stone-wall/';
  
  const propsTexture = useTexture({
    map: PATH + 'stone-wall-diffuse.jpg',
    normalMap: PATH + 'stone-wall-normal.jpg',
    roughnessMap: PATH + 'stone-wall-rough.jpg',
    aoMap: PATH + 'stone-wall-ao.jpg',
    //displacementMap: PATH + 'stone-wall-displacement.png'
  })

  useFrame((state, delta) => {
    boxRef.current.rotation.x += 2 * delta;
    coneRef.current.rotation.x = Math.sin(state.clock.getElapsedTime());
    coneRef.current.rotation.z += 1 * delta;
    coneRef.current.position.y = Math.sin(state.clock.getElapsedTime());
    torusRef.current.position.y = Math.cos(state.clock.getElapsedTime()) + 2;
  });

  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <Beast position={[5, -2, -2]} rotation-y={Math.PI} scale={0.1}/>
      <mesh position={[4.5, -12, -1.5]} >
        <boxGeometry  attach="geometry" args={[10, 20, 10]} />
        <meshStandardMaterial {...propsTexture}/>
      </mesh>
      <mesh ref={boxRef} position={[-2, 0, 0]} scale={2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshLambertMaterial color={"#0d21dc"} emissive={"#0d21dc"} />
      </mesh>
      <mesh ref={coneRef} position={[-2, -2, -4]} scale={2}>
        <coneGeometry position={[1, 2, 5]} />
        <meshToonMaterial color="#ed26df" />
      </mesh>
      <mesh ref={torusRef} position={[5, 1, -9]} scale={3}>
        <torusGeometry />
        <meshMatcapMaterial matcap={matCap}/>
      </mesh>
    </>
  );
};

export default Experience;
