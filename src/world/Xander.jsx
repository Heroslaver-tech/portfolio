import { useEffect, useRef, useMemo } from "react";
import { useControls } from "leva";

const { useGLTF, useAnimations } = require("@react-three/drei");

const Xander = (props) => {
  const xanderRef = useRef();
  const spotLightRef = useRef();
  const xanderModel = useGLTF("/assets/models/Xander/xander1.glb");
  const { nodes, materials, animations } = xanderModel;
  const { actions } = useAnimations(animations, xanderRef);

  const options = useMemo(() => {
    return {
      intensitySL: { value: 17000, min: 0, max: 100000, step: 1 },
      colorSL: { value: "gray" },
    };
  }, []);
  const { intensitySL, colorSL } = useControls("Spot Light", options);


  useEffect(() => {
    const action = actions["idle"];
    action.play();
    spotLightRef.current.target = xanderRef.current
  }, []);

  return (
    <>
    <group ref={xanderRef} {...props} dispose={null}>
      <group name="Scene">
        <group name="PersonajeArmado" >
          <group name="Artefacto">
            <skinnedMesh
              name="Sphere"
              geometry={nodes.Sphere.geometry}
              material={materials["artefacto afuera"]}
              skeleton={nodes.Sphere.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Sphere_1"
              geometry={nodes.Sphere_1.geometry}
              material={materials["artefacto adentro"]}
              skeleton={nodes.Sphere_1.skeleton}
              castShadow
            />
          </group>
          <skinnedMesh
            name="Camisa_Buena"
            geometry={nodes.Camisa_Buena.geometry}
            material={materials.Camisa}
            skeleton={nodes.Camisa_Buena.skeleton}
            castShadow
          />
          <skinnedMesh
            name="chips_Cabeza"
            geometry={nodes.chips_Cabeza.geometry}
            material={materials["chip Cabeza"]}
            skeleton={nodes.chips_Cabeza.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Cinturon"
            geometry={nodes.Cinturon.geometry}
            material={materials.Cinturon}
            skeleton={nodes.Cinturon.skeleton}
            castShadow
          />
          <group name="Cuerpo">
            <skinnedMesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.Piel}
              skeleton={nodes.Cube.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Cube_1"
              geometry={nodes.Cube_1.geometry}
              material={materials.Ojos}
              skeleton={nodes.Cube_1.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Cube_2"
              geometry={nodes.Cube_2.geometry}
              material={materials.Pelo}
              skeleton={nodes.Cube_2.skeleton}
              castShadow
            />
          </group>
          <skinnedMesh
            name="Hair"
            geometry={nodes.Hair.geometry}
            material={materials.Pelo}
            skeleton={nodes.Hair.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Pantalones"
            geometry={nodes.Pantalones.geometry}
            material={materials.Pantalones}
            skeleton={nodes.Pantalones.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Pelo"
            geometry={nodes.Pelo.geometry}
            material={materials.Pelo}
            skeleton={nodes.Pelo.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Saco_Bueno"
            geometry={nodes.Saco_Bueno.geometry}
            material={materials.Saco}
            skeleton={nodes.Saco_Bueno.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Zapatos"
            geometry={nodes.Zapatos.geometry}
            material={materials.Zapatos}
            skeleton={nodes.Zapatos.skeleton}
            castShadow
          />
          <primitive object={nodes.Centro} />
        </group>
      </group>
    </group>
    <spotLight
    ref={spotLightRef}
    position={[12, 20, 15]}
    angle={Math.PI / 8}
    intensity={intensitySL}
    color={colorSL}
    penumbra={1}
    distance={40}
    castShadow
    target={xanderRef.current}
    />
    </>
  );
};

export default Xander;
useGLTF.preload("/assets/models/Xander/xander1.glb");
