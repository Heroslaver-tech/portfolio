import { useEffect, useRef, useMemo, useState } from "react";
import { useControls } from "leva";

const { useGLTF, useAnimations } = require("@react-three/drei");

const Xander = (props) => {
    const xanderRef = useRef();
    const spotLightRef = useRef();
    const xanderModel = useGLTF("/assets/models/Xander/Xander.glb");
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
        playAnimation('Idle');
        console.log(xanderRef);
        console.log(animations);
        spotLightRef.current.target = xanderRef.current;
    }, []);

    const [currentAnimation, setCurrentAnimation] = useState(null);

    const playAnimationWithDuration = (animationName, duration) => {
        if (currentAnimation !== null) {
            // Detener la animación actual si hay una en curso
            currentAnimation.fadeOut(0.2);
        }

        const action = actions[animationName];
        action.reset().fadeIn(0.2).play();
        setCurrentAnimation(action);

        // Detener la animación después de 'duration' segundos
        // Detener la animación después de 'duration' segundos
        setTimeout(() => {
            action.fadeOut(0.2); // Transición suave de 0.5 segundos antes de detener
            playAnimation('Idle');
        }, (duration - 0.2)* 1000); // Convertir segundos a milisegundos
    };

    const playAnimation = (animationName) => {
        if (currentAnimation !== null) {
            // Detener la animación actual si hay una en curso
            currentAnimation.stop();
        }

        // Reproducir la animación seleccionada
        const action = actions[animationName];
        action.reset().fadeIn(0.2).play();

        // Actualizar el estado para rastrear la animación actual
        setCurrentAnimation(action);
    };

    const stopAnimation = () => {
        if (currentAnimation !== null) {
            currentAnimation.stop();
            setCurrentAnimation(null);
        }
    };

    return (
        <>
            <group
                ref={xanderRef}
                {...props}
                dispose={null}
                onClick={() =>
                    playAnimationWithDuration(
                        "Crounch to stand",
                        2.5833332538604735
                    )
                }
            >
                <group name="Scene">
                    <group name="Armature">
                        <skinnedMesh
                            name="EyeLeft"
                            geometry={nodes.EyeLeft.geometry}
                            material={materials.Wolf3D_Eye}
                            skeleton={nodes.EyeLeft.skeleton}
                            morphTargetDictionary={
                                nodes.EyeLeft.morphTargetDictionary
                            }
                            morphTargetInfluences={
                                nodes.EyeLeft.morphTargetInfluences
                            }
                            castShadow
                        />
                        <skinnedMesh
                            name="EyeRight"
                            geometry={nodes.EyeRight.geometry}
                            material={materials.Wolf3D_Eye}
                            skeleton={nodes.EyeRight.skeleton}
                            morphTargetDictionary={
                                nodes.EyeRight.morphTargetDictionary
                            }
                            morphTargetInfluences={
                                nodes.EyeRight.morphTargetInfluences
                            }
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Body"
                            geometry={nodes.Wolf3D_Body.geometry}
                            material={materials.Wolf3D_Body}
                            skeleton={nodes.Wolf3D_Body.skeleton}
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Hair"
                            geometry={nodes.Wolf3D_Hair.geometry}
                            material={materials.Wolf3D_Hair}
                            skeleton={nodes.Wolf3D_Hair.skeleton}
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Head"
                            geometry={nodes.Wolf3D_Head.geometry}
                            material={materials.Wolf3D_Skin}
                            skeleton={nodes.Wolf3D_Head.skeleton}
                            morphTargetDictionary={
                                nodes.Wolf3D_Head.morphTargetDictionary
                            }
                            morphTargetInfluences={
                                nodes.Wolf3D_Head.morphTargetInfluences
                            }
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Outfit_Bottom"
                            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                            material={materials.Wolf3D_Outfit_Bottom}
                            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Outfit_Footwear"
                            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                            material={materials.Wolf3D_Outfit_Footwear}
                            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Outfit_Top"
                            geometry={nodes.Wolf3D_Outfit_Top.geometry}
                            material={materials.Wolf3D_Outfit_Top}
                            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                            castShadow
                        />
                        <skinnedMesh
                            name="Wolf3D_Teeth"
                            geometry={nodes.Wolf3D_Teeth.geometry}
                            material={materials.Wolf3D_Teeth}
                            skeleton={nodes.Wolf3D_Teeth.skeleton}
                            morphTargetDictionary={
                                nodes.Wolf3D_Teeth.morphTargetDictionary
                            }
                            morphTargetInfluences={
                                nodes.Wolf3D_Teeth.morphTargetInfluences
                            }
                            castShadow
                        />
                        <primitive object={nodes.Hips} />
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
useGLTF.preload("/assets/models/Xander/Xander.glb");
