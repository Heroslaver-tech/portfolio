import { RepeatWrapping, Vector2 } from "three";
import { useTexture } from "@react-three/drei";


const Floor = (props) => {
  const PATH = "/assets/textures/wood-floor/";

  const propsTexture = useTexture({
    map: PATH + "wood_floor_deck_diff_2k.jpg",
    normalMap: PATH + "wood_floor_deck_nor_gl_2k.jpg",
    roughnessMap: PATH + "wood_floor_deck_rough_2k.jpg",
    aoMap: PATH + "wood_floor_deck_ao_2k.jpg",
  });

  const repeat = new Vector2(6, 6);

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
      <planeGeometry attach="geometry" args={[25, 25, 1, 1]} />
      <meshStandardMaterial {...propsTexture} />
    </mesh>
  );
};

export default Floor;
