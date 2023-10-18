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
  // const directionalLightRef = useRef();
  
  // const hemisphereLightRef =useRef();

  // useHelper(hemisphereLightRef, HemisphereLightHelper);
  // useHelper(pointLightRef1, PointLightHelper, 1, "hotpink");
  // useHelper(pointLightRef2, PointLightHelper, 1, "hotpink");
  // useHelper(pointLightRef3, PointLightHelper, 1, "hotpink");
  // useHelper(pointLightRef4, PointLightHelper, 1, "hotpink");
  // useHelper(directionalLightRef, DirectionalLightHelper);
  // useHelper(spotLightRef, SpotLightHelper);

  return (
    <>
      <ambientLight intensity={0.3} />

      {/* <directionalLight
        ref={directionalLightRef}
        position={[10, 10, 5]}
        intensity={0.5}
      /> */}

      <pointLight
        ref={pointLightRef1}
        position={[7, 10, 0]}
        intensity={50}
        color={"#00ff28"}
        castShadow
      />
      <pointLight
        ref={pointLightRef2}
        position={[7, 10, -10]}
        intensity={50}
        color={"#ff0303"}
        castShadow
      />
      <pointLight
        ref={pointLightRef3}
        position={[10, 10, -13]}
        intensity={50}
        color={"#8400ff"}
        castShadow
      />
      <pointLight
        ref={pointLightRef4}
        position={[20, 10, -13]}
        intensity={50}
        color={"#00fff6"}
        castShadow
      />

      
      {/* <hemisphereLight
        ref={hemisphereLightRef}
        position={[16, 10 , -2]}
        intensity={1}
        color={"gray"}
        castShadow
      /> */}
    </>
  );
};

export default Lights;
