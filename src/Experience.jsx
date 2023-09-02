//React
import { useRef } from "react";

//Drei
import { OrbitControls } from "@react-three/drei";

//React Three fiber
import { useFrame } from "@react-three/fiber"; 
const Experience = () => {
  const boxRef = useRef();
  const delta = 0.05;
  useFrame(() => {
    boxRef.current.rotation.x +=1 * delta;
  });

  return(
  <>
    <OrbitControls makeDefault/>
    <ambientLight intensity={0.5}/>
    <directionalLight position={[10, 10, 5]} intensity={2}/>
    <mesh ref={boxRef}>
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial color="purple"/>
    </mesh>
  </>
  );
};

export default Experience;
