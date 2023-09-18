import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";

const Lights = () => {
  const pointLightRef1 = useRef();
  const pointLightRef2 = useRef();
  const pointLightRef3 = useRef();
  const pointLightRef4 = useRef();
  const spotLightRef = useRef();

  // useHelper(hemisphereLightRef, HemisphereLightHelper);
  // useHelper(pointLightRef1, PointLightHelper, 1, "hotpink");
  // useHelper(pointLightRef2, PointLightHelper, 1, "hotpink");
  // useHelper(pointLightRef3, PointLightHelper, 1, "hotpink");
  // useHelper(pointLightRef4, PointLightHelper, 1, "hotpink");
  // useHelper(directionalLightRef, DirectionalLightHelper);
  // useHelper(spotLightRef, SpotLightHelper);

  return (
    <>
      <ambientLight intensity={0.2} />

      {/* <directionalLight
        ref={directionalLightRef}
        position={[10, 10, 5]}
        intensity={1}
      /> */}

      <pointLight
        ref={pointLightRef1}
        position={[-8, 10, -4]}
        intensity={20}
        color={"white"}
        castShadow
      />
      <pointLight
        ref={pointLightRef2}
        position={[-8, 6, -4]}
        intensity={20}
        color={"white"}
        castShadow
      />
      <pointLight
        ref={pointLightRef3}
        position={[-8, 6, 4]}
        intensity={20}
        color={"white"}
        castShadow
      />
      <pointLight
        ref={pointLightRef4}
        position={[-8, 10, 4]}
        intensity={20}
        color={"white"}
        castShadow
      />

      {/* 
      <hemisphereLight
        ref={hemisphereLightRef}
        position={[2, -40 , -2]}
        intensity={1}
        color={"blue"}
      /> */}
    </>
  );
};

export default Lights;
