import {
  Shape,
  Path,
  ExtrudeGeometry,
  MeshLambertMaterial,
  Mesh
} from "three"
import Base from "./Base"
export default class FrontWall extends Base{
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
    shape.moveTo(-500, 0)
    shape.lineTo(500, 0)
    shape.lineTo(500,400)
    shape.lineTo(-500,400)

    const window = new Path()
    window.moveTo(100,100)
    window.lineTo(100,250)
    window.lineTo(300,250)
    window.lineTo(300,100)
    shape.holes.push(window)

    const door = new Path()
    door.moveTo(-330,30)
    door.lineTo(-330, 250)
    door.lineTo(-210, 250)
    door.lineTo(-210, 30)
    shape.holes.push(door)

    const extrudeSettings = { 
      depth: 8, 
      bevelEnabled: true, 
      bevelSegments: 2, 
      steps: 2, 
      bevelSize: 1, 
      bevelThickness: 5 
    };

    const geometry = new ExtrudeGeometry( shape, extrudeSettings );
    return geometry
  }
}