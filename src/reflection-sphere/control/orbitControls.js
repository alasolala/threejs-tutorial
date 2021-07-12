import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export function addOrbitControls (camera, el) {
  const controls = new OrbitControls( camera, el );
  controls.enablePan = false  
}
