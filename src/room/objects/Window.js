import {
  BoxGeometry,
  MeshPhysicalMaterial,
  Shape,
  MeshLambertMaterial,
  Mesh,
  Group,
  Path,
  ExtrudeGeometry,
} from "three"
import Base from "./Base"
export default class Window extends Base{
  constructor(){
    super()

    const frameGeometry = this.drawShape()
    const frameMaterial = new MeshLambertMaterial({ 
      color: 0x5c5d5e
    })
    const frame = new Mesh( frameGeometry, frameMaterial )

    frame.position.set(165,-200,0)
    frame.rotation.z = Math.PI/2

    const windowGeometry = new BoxGeometry( 150, 200, 4 )
    const windowMaterial = new MeshPhysicalMaterial( {
      map: null,
      color: 0xcfcfcf,
      metalness: 0,
      roughness: 0,
      opacity: 0.45,
      transparent: true,
      envMapIntensity: 10,
      premultipliedAlpha: true
    } )
    const window = new Mesh( windowGeometry, windowMaterial )

    const group = new Group()
    group.add( frame )
    group.add( window )
    this.instance = group
  }

  drawShape () {
    const shape = new Shape()
    shape.moveTo(100,100)
    shape.lineTo(100,250)
    shape.lineTo(310,250)
    shape.lineTo(310,100)
  
    const hole_1 = new Path()
    hole_1.moveTo(105,105)
    hole_1.lineTo(105,235)
    hole_1.lineTo(195,235)
    hole_1.lineTo(195,105)

    const hole_2 = new Path()
    hole_2.moveTo(205,105)
    hole_2.lineTo(205,235)
    hole_2.lineTo(293,235)
    hole_2.lineTo(293,105)

    shape.holes.push(hole_1)
    shape.holes.push(hole_2)
  
    const extrudeSettings = { 
      depth: 8, 
      bevelEnabled: true, 
      bevelSegments: 2, 
      steps: 2, 
      bevelSize: 1, 
      bevelThickness: 4 
    };
  
    const geometry = new ExtrudeGeometry( shape, extrudeSettings );
    return geometry
  }

}