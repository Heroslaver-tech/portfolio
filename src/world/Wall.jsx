import { RepeatWrapping, Vector2 } from "three";
import { useTexture } from "@react-three/drei";

const Wall = (props) => {
    const PATH = "/assets/textures/leather/";

    const propsTexture = useTexture({
        map: PATH + "leather_white_diff_2k.jpg",
        normalMap: PATH + "leather_white_nor_dx_2k.jpg",
        roughnessMap: PATH + "leather_white_rough_2k.jpg",
        aoMap: PATH + "leather_white_ao_2k.jpg",
    });

    const repeat = new Vector2(8, 8);

    for (const map of [
        propsTexture.map,
        propsTexture.normalMap,
        propsTexture.roughnessMap,
        propsTexture.aoMap,
    ]) {
        map.repeat = repeat;
    }

    const repeatWrapping = RepeatWrapping;
    for (const map of [
        propsTexture.map,
        propsTexture.normalMap,
        propsTexture.roughnessMap,
        propsTexture.aoMap,
    ]) {
        map.wrapS = map.wrapT = repeatWrapping;
    }

    propsTexture.map.offset =
        propsTexture.normalMap.offset =
        propsTexture.roughnessMap.offset =
        propsTexture.aoMap.offset =
            new Vector2(0.5, 0.5);

    return (
        <mesh {...props}>
            <planeGeometry attach="geometry" args={[25, 15, 1, 1]} />
            <meshStandardMaterial {...propsTexture} />
        </mesh>
    );
};

export default Wall;