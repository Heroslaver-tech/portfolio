import { useEffect, useRef } from "react";

const { useGLTF, useAnimations } = require("@react-three/drei");

const Beast = (props) => {
  const beastRef = useRef();
  const beastModel = useGLTF("/assets/models/beast/beast.gltf");
  const { animations } = beastModel;

  const {actions} = useAnimations(animations, beastRef)

  useEffect(()=>{
    const action = actions["01_Run-Cycle"]
    action.play()
  },[])

  console.log(actions)
  return (
    <mesh ref={beastRef} {...props}>
      <primitive object={beastModel.scene} />
    </mesh>
  );
};

export default Beast;
useGLTF.preload("/assets/models/beast/beast.gltf");
