import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./experience/Experience";
import './styles.css'
import './info/info.css'
import Info from "./info/Info";

const root = createRoot(document.getElementById("root"));
  const cameraSettings = {
    position: [25, 5 , 20],
    fov: 35 
  }
root.render(
  <>
  <Info name={"Sebastian Peñaranda Hurtado"} title={"Ingeniero de Sistemas"}/>
  <Canvas
    camera={cameraSettings}
    shadows
    >
    <Experience/>
  </Canvas>
  </>
);
