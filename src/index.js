import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import './styles.css'

const root = createRoot(document.getElementById("root"));

root.render(
  <Experience
    title={"PortFolio - Sebastian Peñaranda"}
    info={"Web 3D developer"}
  />
);
