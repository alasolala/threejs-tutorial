import {
  Shape,
  ExtrudeGeometry,
  MeshLambertMaterial,
  Mesh
} from "three"
import Base from "./Base"
export default class SideWall extends Base{
  constructor () {
    super()

    const wallGeometry = this.drawShape()
    const wallMaterial = new MeshLambertMaterial({ 
      color: 0xe5d890 
    })
    const wall = new Mesh( wallGeometry, wallMaterial )
    this.instance = wall
    
  }

  drawShape () {
    const shape = new Shape()
    shape.moveTo(-400, 0)
    shape.lineTo(400, 0)
    shape.lineTo(400,400)
    shape.lineTo(0,500)
    shape.lineTo(-400,400)

    const extrudeSettings = { 
      depth: 8, 
      bevelEnabled: true, 
      bevelSegments: 2, 
      steps: 2, 
      bevelSize: 1, 
      bevelThickness: 1 
    };

    const geometry = new ExtrudeGeometry( shape, extrudeSettings );
    return geometry
  }
}