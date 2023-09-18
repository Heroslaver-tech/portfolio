//React
import { useRef } from "react";

//Drei
import { EnvironmentMap, OrbitControls, Sparkles, useTexture } from "@react-three/drei";

//React Three fiber
import { useFrame } from "@react-three/fiber";

//images and model
import Beast from "../world/Beast";
import Lights from "../world/Lights";
import Environments from "../world/Environment";
import { Perf } from "r3f-perf";

const Experience = () => {
  const coneRef = useRef();
  const torusRef = useRef();
  const matCap = useTexture("/assets/matcaps/metallic.png");
  const PATH = '/assets/textures/wood-floor/';
  const PATH2 = '/assets/textures/leather/';
  
  const propsTextureFloor = useTexture({
    map: PATH + 'wood_floor_deck_diff_2k.jpg',
    normalMap: PATH + 'wood_floor_deck_nor_gl_2k.jpg',
    roughnessMap: PATH + 'wood_floor_deck_rough_2k.jpg',
    aoMap: PATH + 'wood_floor_deck_ao_2k.jpg',
    displacementMap: PATH + 'wood_floor_deck_disp_2k.jpg'
  })


  
  const propsTextureFloor2 = useTexture({
    map: PATH + 'wood_floor_deck_diff_2k.jpg',
    normalMap: PATH + 'wood_floor_deck_nor_gl_2k.jpg',
    roughnessMap: PATH + 'wood_floor_deck_rough_2k.jpg',
    aoMap: PATH + 'wood_floor_deck_ao_2k.jpg',
  })

  const propsTextureWall = useTexture({
    map: PATH2 + 'leather_white_diff_2k.jpg',
    normalMap: PATH2 + 'leather_white_nor_dx_2k.jpg',
    roughnessMap: PATH2 + 'leather_white_rough_2k.jpg',
    aoMap: PATH2 + 'leather_white_ao_2k.jpg',
  })

  useFrame((state, delta) => {
    // coneRef.current.rotation.x = Math.sin(state.clock.getElapsedTime());
    // coneRef.current.rotation.z += 1 * delta;
    // coneRef.current.position.y = Math.sin(state.clock.getElapsedTime()) + 3;
    // torusRef.current.position.y = Math.cos(state.clock.getElapsedTime()) + 4;
  });

  return (
    <>
      <OrbitControls makeDefault />
      <Lights/>
      <Environments/>
      <Perf/>
      <Sparkles
            position={[4 , 3, -3]}
            color="gray"
            count={100}
            size={5}
            fade={false}
            speed={0.5}
            scale={10}
        />
      <Beast position={[4 , 0, -3]} rotation-y={Math.PI/3} scale={0.2} castShadow/>
              
      <mesh position={[10,-0.5, 6]} rotation-x={-Math.PI / 2} receiveShadow >
       <planeGeometry attach="geometry" args={[40, 40, 1, 1]} />
       <meshStandardMaterial {...propsTextureFloor}/>
      </mesh>

      <mesh position={[10,15, 6]}rotation-x={Math.PI / 2} receiveShadow>
       <planeGeometry attach="geometry" args={[40, 40, 1, 1]} />
       <meshStandardMaterial {...propsTextureWall} />
      </mesh>

      <mesh position={[10, 5 ,-14]} receiveShadow>
       <planeGeometry attach="geometry" args={[40, 20, 1, 1]} />
       <meshStandardMaterial {...propsTextureWall} />
      </mesh>

      <mesh position={[-10, 5 , 6]} rotation-y={Math.PI/2}>
       <planeGeometry attach="geometry" args={[40, 20, 1, 1]} />
       <meshStandardMaterial {...propsTextureWall} />
      </mesh>

      <mesh position={[-10, 0, 7]} scale={1} receiveShadow>
        <boxGeometry args={[2, 2, 40]} />
        <meshStandardMaterial {...propsTextureFloor2}  receiveShadow/>
      </mesh>

      <mesh position={[9, 0, -14]} scale={1} >
        <boxGeometry args={[40, 2, 2]} />
        <meshStandardMaterial {...propsTextureFloor2}  receiveShadow/>
      </mesh>

      <mesh position={[-10, 8, 0]} scale={2} receiveShadow>
        <boxGeometry args={[1, 3, 6]} />
        <meshLambertMaterial color={"white"} emissive={"black"} />
      </mesh>
      
      {/* <mesh position={[5, 0, -2]} scale={2} castShadow >
        <boxGeometry args={[1, 1, 1]} />
        <meshLambertMaterial color={"#0d21dc"} emissive={"#0d21dc"} />
      </mesh> */}

      {/* <mesh ref={coneRef} position={[-2, 2, -6]} scale={2}>
        <coneGeometry position={[1, 2, 5]} />
        <meshToonMaterial color="#ed26df" />
      </mesh>
      <mesh ref={torusRef} position={[5, 1, -9]} scale={2}>
        <torusGeometry />
        <meshMatcapMaterial matcap={matCap}/>
      </mesh> */}
    </>
  );
};

export default Experience;
