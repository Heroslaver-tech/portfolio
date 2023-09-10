import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./experience/Experience";
import Info from "./info/Info";
import './styles.css'
import './info/info.css'

const root = createRoot(document.getElementById("root"));

root.render(
  <>
  <Info name={"Sebastian Peñaranda Hurtado"} title={"Ingeniero de Sistemas"}/>
  <Canvas
    camera={{position:[2, 0, 5]}}
    >
    <Experience/>
  </Canvas>
  </>
);
