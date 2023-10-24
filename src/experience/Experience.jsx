//Drei
import {
    OrbitControls,
    Sparkles,
    Stars
} from "@react-three/drei";

//React Three fiber
import { useFrame } from "@react-three/fiber";

//React
import { useRef, useState, useEffect, Suspense } from "react";

//images and model
import ButtonText from "../world/ButtonText";
import Button from "../world/Buttons";
import Wall from "../world/Wall";
import Floor from "../world/Floor";
import Xander from "../world/Xander";
import Lights from "../world/Lights";
import PictureFrame from "../world/PictureFrame";
import { Perf } from "r3f-perf";
import CardText from "../world/CardText";
import { Physics, RigidBody } from "@react-three/rapier";

const Experience = () => {
    const frameRef = useRef();
    const ballRef1 = useRef();
    const ballRef2 = useRef();
    const ballRef3 = useRef();
    const ballRef4 = useRef();
    const ballRef5 = useRef();
    const ballRef6 = useRef();
    const [miBooleano, setMiBooleano] = useState(false);
    const [miTitulo, setTitulo] = useState("Sebastián Peñaranda Hurtado");
    const [miDescription, setDescription] = useState("Systems engineer and 3D modeler");

    const [play, setPlay] = useState(false);
    const [hitSound] = useState(() => new Audio('/assets/sounds/hit.wav'))

    const onHandleFrame = () => {
        frameRef.current.wakeUp()
        ballRef1.current.wakeUp()
        ballRef2.current.wakeUp()
        ballRef3.current.wakeUp()
        ballRef4.current.wakeUp()
        ballRef5.current.wakeUp()
        ballRef6.current.wakeUp()

        frameRef.current.applyImpulse({ x: 0, y: 10, z: 10 }, true);
    }

    const bouncingBall = (ref) => {
        setPlay(true)
        ref.current.applyTorqueImpulse({ x: 1 - (2 * Math.random()), y: 2 * Math.random(), z: 1 - (2 * Math.random()) }, true);
    }

    const manejarCambioBooleano = (nuevoValor) => {
        setMiBooleano(nuevoValor);
      };

    useEffect(() => {
        frameRef.current.sleep()
        ballRef1.current.sleep()
        ballRef2.current.sleep()
        ballRef4.current.sleep()
        ballRef5.current.sleep()
        ballRef3.current.sleep()
        ballRef6.current.sleep()
    }, [])

    useEffect(() => {
        if (play) {
            hitSound.currentTime = 0
            hitSound.volume = Math.random()
            hitSound.play();
        }
    }, [play])

    useEffect(() => {
        if (miBooleano) {
            setTitulo("Sebastián Peñaranda Hurtado")
            setDescription("Systems engineering student with experience as a Web Page Monitor at Universidad del Valle. Currently in my seventh semester.")
        }
    }, [miBooleano])

          
    return (
        <>
            <CardText title={miTitulo} description={miDescription}></CardText>
            <Stars factor={2} />
            <OrbitControls 
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                // rotateSpeed={0.5}
                // maxPolarAngle={Math.PI / 2}
                // minPolarAngle={Math.PI / 3}
                // maxAzimuthAngle={Math.PI / 4}
                // minAzimuthAngle={-Math.PI / 4}
                target={[5, 1, 0]} 
            />
            <Lights />
            {/* <Perf /> */}
            <Sparkles
                position={[14, 5, -8]}
                color="gray"
                count={100}
                size={4}
                fade={false}
                speed={0.5}
                scale={20}
                castShadow
            />
            <Physics  gravity={[0, -9.8, 0]}>
                <RigidBody colliders={"hull"} type="fixed">
                    <Suspense fallback={null}>
                        <Xander position={[14, -0.6, -5]} scale={6} castShadow />
                    </Suspense>
                </RigidBody>

                <RigidBody ref={frameRef} colliders={"cuboid"} position={[20, 5, -18]}  >
                    <PictureFrame scale={2} onClick={onHandleFrame}></PictureFrame>
                </RigidBody>
                <group position={[0, 4, 0]}>
                    <RigidBody ref={ballRef1} colliders={"ball"} position={[6, 20, -2]} gravityScale={1} restitution={1} onCollisionEnter={() => bouncingBall(ballRef1)} onCollisionExit={() => setPlay(false)}>
                        <mesh scale={0.5} castShadow>
                            <sphereGeometry />
                            <meshStandardMaterial color="red" />
                        </mesh>
                    </RigidBody>
                    <RigidBody ref={ballRef2} colliders={"ball"} position={[10, 18, -5]} gravityScale={1} restitution={1.2} onCollisionEnter={() => bouncingBall(ballRef2)} onCollisionExit={() => setPlay(false)}>
                        <mesh scale={0.5} castShadow>
                            <sphereGeometry />
                            <meshStandardMaterial color="blue" />
                        </mesh>
                    </RigidBody>
                    <RigidBody ref={ballRef3} colliders={"ball"} position={[15, 22, -2]} gravityScale={1} restitution={1.3} onCollisionEnter={() => bouncingBall(ballRef3)} onCollisionExit={() => setPlay(false)}>
                        <mesh scale={0.5} castShadow>
                            <sphereGeometry />
                            <meshStandardMaterial color="yellow" />
                        </mesh>
                    </RigidBody>
                    <RigidBody ref={ballRef4} colliders={"ball"} position={[19, 18, -7]} gravityScale={1} restitution={1.5} onCollisionEnter={() => bouncingBall(ballRef4)} onCollisionExit={() => setPlay(false)}>
                        <mesh scale={0.5} castShadow>
                            <sphereGeometry />
                            <meshStandardMaterial color="purple" />
                        </mesh>
                    </RigidBody>
                    <RigidBody ref={ballRef5} colliders={"ball"} position={[4, 17, -15]} gravityScale={1} restitution={0.8} onCollisionEnter={() => bouncingBall(ballRef5)} onCollisionExit={() => setPlay(false)}>
                        <mesh scale={0.5} castShadow>
                            <sphereGeometry />
                            <meshStandardMaterial color="green" />
                        </mesh>
                    </RigidBody>
                    <RigidBody ref={ballRef6} colliders={"ball"} position={[20, 21, -10]} gravityScale={1} restitution={1} onCollisionEnter={() => bouncingBall(ballRef6)} onCollisionExit={() => setPlay(false)}>
                        <mesh scale={0.5} castShadow>
                            <sphereGeometry />
                            <meshStandardMaterial color="brown" />
                        </mesh>
                    </RigidBody>
                </group>
                <group>
                    <RigidBody colliders={"hull"}>
                        <Floor
                            position={[14, -0.5, -6]}
                            rotation-x={-Math.PI / 2}
                            receiveShadow
                        />
                    </RigidBody>
                    <RigidBody colliders={"hull"}>
                        <Wall position={[14, 7, -18.5]} receiveShadow />
                    </RigidBody>
                    <RigidBody colliders={"hull"}>
                        <Wall
                            position={[1.5, 7, -6]}
                            rotation-y={Math.PI / 2}
                            receiveShadow
                        />
                    </RigidBody>
                </group>
            </Physics>


            <mesh position={[1.5, -0.5, -6]} scale={1} receiveShadow>
                <boxGeometry args={[0.5, 0.5, 25]} />
                <meshStandardMaterial receiveShadow color={'#38100f'} />
            </mesh>

            <mesh position={[14, -0.5, -18.5]} scale={1}>
                <boxGeometry args={[25, 0.5, 0.5]} />
                <meshStandardMaterial receiveShadow color={'#38100f'} />
            </mesh>

            <Button position={[2, 10, 0]} scale={2} args={[0.5, 1, 3]} color={"#00ff28"} cambiarBooleano={manejarCambioBooleano}>
                <ButtonText text="About Me" position={[0.3, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
            </Button>
            <Button position={[2, 10, -10]} scale={2} args={[0.5, 1, 3]} color={"#ff0303"} cambiarBooleano={manejarCambioBooleano}>
                <ButtonText text="Skills" position={[0.3, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
            </Button>
            <Button position={[10, 10, -18]} scale={2} args={[3, 1, 0.5]} color={"#8400ff"} cambiarBooleano={manejarCambioBooleano}>
                <ButtonText text="Projects" position={[0, 0, 0.3]} rotation={[0, 0, 0]} />
            </Button>
            <Button position={[20, 10, -18]} scale={2} args={[3, 1, 0.5]} color={"#00fff6"} cambiarBooleano={manejarCambioBooleano}>
                <ButtonText text="Contact Me" position={[0, 0, 0.3]} rotation={[0, 0, 0]} />
            </Button>
        </>
    );
};

export default Experience;
