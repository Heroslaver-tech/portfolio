import { Html, Float} from "@react-three/drei";

const CardText = (props) => {
    return (
        <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        >
            <Html position={[10, 8, 22]} className="text" center>
                <h1 className="info-name">{props.title}</h1>
                <span className="info-title">{props.description}</span>
            </Html>
            
        </Float>
    );
};
export default CardText;
