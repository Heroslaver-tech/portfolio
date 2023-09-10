import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./experience/Experience";
import './styles.css'
import './info/info.css'
import Info from "./info/Info";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
  <Info name={"Sebastian Peñaranda Hurtado"} title={"Ingeniero de Sistemas"}/>
  <Canvas
    camera={{position:[15, 1, 5]}}
    >
    <Experience/>
  </Canvas>
  </>
);
