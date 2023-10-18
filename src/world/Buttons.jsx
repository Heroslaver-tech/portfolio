
const Button = (props) => {

    const { miBooleano, cambiarBooleano } = props;
    const handleClick = () => {
        cambiarBooleano(true); // Invierte el valor del booleano
        
    };

    return(
        <mesh position={props.position} scale={props.scale} onClick={handleClick} >
            <boxGeometry args={props.args}/>
            <meshLambertMaterial color={props.color} emissive={props.color} />
            {props.children}
        </mesh>
    )
}

export default Button