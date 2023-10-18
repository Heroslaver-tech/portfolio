import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function PictureFrame(props) {
  const { nodes, materials } = useGLTF("/assets/models/PictureFrame/foto marco.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={[1, 1, 0.13]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Marco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.007"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/PictureFrame/foto marco.glb");