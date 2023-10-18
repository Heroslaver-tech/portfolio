import { Html, Text, Float } from "@react-three/drei";

const ButtonText = (props) => {
    return (
        <Text
            font="/assets/fonts/Cabin.ttf"
            color="black"
            anchorX="center"
            anchorY="middle"
            position={props.position}
            rotation={props.rotation}
            fontSize={0.6}
        >
            {props.text}
        </Text>
    );
};
export default ButtonText;
