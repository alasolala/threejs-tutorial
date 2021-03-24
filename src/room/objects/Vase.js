import {
  Shape,
  MeshPhysicalMaterial,
  Mesh,
  Path,
  ExtrudeGeometry
} from "three"
import Base from "./Base"
export default class Vase extends Base{
  constructor(){
    super()

    const vaseGeometry = this.drawShape()

    const vaseMaterial = new MeshPhysicalMaterial( {
      color: 0xe5d1c4,
      metalness: 0.6,
      roughness: 0.2,
      reflectivity: 1,
      emissive: 0x517072

    } );
    const vase = new Mesh( vaseGeometry, vaseMaterial )

    this.instance = vase
  }

  drawShape () {
    const shape = new Shape()
    shape.arc(0,0,8,0,2*Math.PI)
    
    const hollow = new Path()
    hollow.arc(0,0,7,0,2*Math.PI)
    shape.holes.push(hollow)

    const extrudeSettings = { 
      depth: 20, 
      bevelEnabled: true, 
      bevelSegments: 8, 
      steps: 2, 
      bevelSize: 1, 
      bevelThickness: 20
    };
  
    const geometry = new ExtrudeGeometry( shape, extrudeSettings );
    return geometry
  }

}