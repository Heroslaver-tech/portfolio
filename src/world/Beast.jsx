import { useEffect, useRef, useMemo} from "react";
import { useControls } from "leva";

const { useGLTF, useAnimations } = require("@react-three/drei");

const Beast = (props) => {
  const beastRef = useRef();
  const spotLightRef = useRef();
  const beastModel = useGLTF("/assets/models/beast/beast.gltf");
  const { nodes, materials, animations } = beastModel;
  const { actions } = useAnimations(animations, beastRef);
  const options = useMemo(() => {
    return {
      intensitySL: { value: 17000, min: 0, max: 100000, step: 1 },
      colorSL: { value: "gray" },
    };
  }, []);
  const { intensitySL, colorSL } = useControls("Spot Light", options);


  useEffect(() => {
    const action = actions["01_Idle_Aggressive"];
    action.play();
    spotLightRef.current.target = beastRef.current
    console.log(spotLightRef)
  }, []);

  console.log(actions);
  return (
    <>
    <group ref={beastRef} {...props} dispose={null}>
      <group name="Scene">
        <group name="Alien-Animal_15">
          <group name="Alien-Animal_1_5_Baked">
            <skinnedMesh
              castShadow
              receiveShadow
              name="Alien-Animal_1_5_Baked_1"
              geometry={nodes["Alien-Animal_1_5_Baked_1"].geometry}
              material={materials["Material.001"]}
              skeleton={nodes["Alien-Animal_1_5_Baked_1"].skeleton}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Alien-Animal_1_5_Baked_2"
              geometry={nodes["Alien-Animal_1_5_Baked_2"].geometry}
              material={materials["Red-Eye-Alien-Animal"]}
              skeleton={nodes["Alien-Animal_1_5_Baked_2"].skeleton}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Alien-Animal_1_5_Baked_3"
              geometry={nodes["Alien-Animal_1_5_Baked_3"].geometry}
              material={materials["Saliva-Alien-Animal"]}
              skeleton={nodes["Alien-Animal_1_5_Baked_3"].skeleton}
            />
          </group>
          <primitive object={nodes.root} />
          <primitive object={nodes.Bone023} />
        </group>
      </group>
    </group>
    <spotLight
        ref={spotLightRef}
        position={[4, 0, 10]}
        angle={Math.PI / 8}
        intensity={intensitySL}
        color={colorSL}
        penumbra={1}
        distance={40}
        castShadow
        target={beastRef.current}
    />
    </>
  );
};

export default Beast;
useGLTF.preload("/assets/models/beast/beast.gltf");
