import {
  Shape,
  Path,
  ExtrudeGeometry,
  BoxGeometry,
  MeshLambertMaterial,
  Mesh,
  Group,
  TextureLoader
} from "three"
import Base from "./Base"
export default class Door extends Base{
  constructor () {
    super()
    
    this.initFrame()
    this.initDoor()
    const group = new Group()
    group.add( this.frame )
    group.add( this.door )
    this.instance = group
    
  }

  initFrame () {
    const frameGeometry = this.drawShape()
    const frameMaterial = new MeshLambertMaterial({ 
      color: 0x8d7159
    })
    const frame = new Mesh( frameGeometry, frameMaterial )
    this.frame = frame
  }

  initDoor () {
    const doorGeometry = new BoxGeometry(100,210,4)
    const doorTexture = new TextureLoader().load('/images/room/wood.jpg')
    const doorMaterial = new MeshLambertMaterial({ map: doorTexture })
    const door = new Mesh(doorGeometry, doorMaterial)

    this.param = {
      positionX : 60,
      positionZ: 0,
      rotationY: 0
    }
    door.position.set(this.param.positionX, 105, this.param.positionZ)
    door.rotation.y = this.param.rotationY

    this.door = door
    this.status = 'closed'
  }

  onUpdate (param) {
    this.door.position.x = param.positionX
    this.door.position.z = param.positionZ
    this.door.rotation.y = param.rotationY
  }

  drawShape () {
    const shape = new Shape()
    shape.moveTo(0,0)
    shape.lineTo(0, 220)
    shape.lineTo(120, 220)
    shape.lineTo(120, 0)

    const door = new Path()
    door.moveTo(10,0)
    door.lineTo(10, 210)
    door.lineTo(110, 210)
    door.lineTo(110, 0)
    shape.holes.push(door)

    const extrudeSettings = { 
      depth: 8, 
      bevelEnabled: true, 
      bevelSegments: 2, 
      steps: 2, 
      bevelSize: 1, 
      bevelThickness: 6 
    };

    const geometry = new ExtrudeGeometry( shape, extrudeSettings );
    return geometry
  }

  animate () {
    if(this.status === 'closed'){
      this.param.positionX = 10
      this.param.positionZ = 50
      this.param.rotationY = -Math.PI/2
      this.status= 'open'
    }else{
      this.param.positionX = 60
      this.param.positionZ = 0
      this.param.rotationY = 0
      this.status= 'closed'
    }
    this.onUpdate(this.param)
  }
}