import {
  Color,
  Vector3,
  Fog,
  AxesHelper,
  Raycaster
} from 'three'
import Template from "../../common/Template"
import { addAmbientLight, addDirectionalLight } from "./light"
import Ball from "../objects/Ball"
import Ground from "../objects/Ground"
import Floor from "../objects/Floor"
import Box from "../objects/Box"
import SideWall from "../objects/SideWall"
import FrontWall from "../objects/FrontWall"
import Roof from "../objects/Roof"
import Door from "../objects/Door"
import Wind from "../objects/Window"
import Vase from "../objects/Vase"
import { addTable, addFlower } from "../objects/Model"
import { addOrbitControls } from "../control/orbitControls"
import { Gui } from "../tools/dat.gui"

export default class Director extends Template{
  constructor () {
    super()
    this.PCamera.far = 10000
    this.rendererColor = new Color(0xcce0ff)
    this.cameraPostion = new Vector3(1000, 600, 1500)
    
    this.init()
    this.scene.fog = new Fog( 0xcce0ff, 2500, 10000)

    //init light
    addAmbientLight(this.scene)
    addDirectionalLight(this.scene)

    //init objects
    this.addBall()
    this.addGround()
    this.addFloor()
    this.addWall()
    this.addRoof()
    this.addWindow()
    this.addWindowsill()
    this.addDoor()
    this.addVase()

    addTable(this.scene)
    addFlower(this.scene)
    //add controls
    addOrbitControls(this.camera, this.renderer.domElement)

    //add axesHelper
    this.addAxesHelper()

    //dat.gui
    this.Controls = Gui()

    // 
    this.animate()

    //door animation
    window.addEventListener('click', this.onMouseDown.bind(this))

  }

  onMouseDown (event) {
    let vector = new Vector3(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1,
      0.5
    )
    vector = vector.unproject(this.camera)
    const raycaster = new Raycaster(
      this.camera.position,
      vector.sub(this.camera.position).normalize()
    )
    const intersects = raycaster.intersectObjects([this.doorSet.door])
    if(intersects.length > 0){
      this.doorSet.animate()
    }
  }

  addBall () {
    const ball = new Ball(20, 32, 16)
    ball.setPosition(800, 20, -300)
    ball.addToScene(this.scene)
    this.ball = ball
  }

  addGround () {
    const ground = new Ground(20000, 20000)
    ground.setPosition(0, -2, 0)
    ground.setRotation(- Math.PI / 2, 0, 0)
    ground.addToScene(this.scene)
  }

  addFloor () {
    const floor = new Floor(800, 1000)
    floor.setPosition(0, -1, 0)
    floor.setRotation(- Math.PI / 2, 0, 0)
    floor.addToScene(this.scene)
  }

  addWall () {
    const frontWall = new FrontWall()
    frontWall.setPosition(400, 0, 0)
    frontWall.setRotation(0, Math.PI / 2, 0)
    frontWall.addToScene(this.scene)

    const backWall = new Box(1000, 400, 20)
    backWall.setPosition(-400, 199, 0)
    backWall.setRotation(0, - Math.PI / 2, 0)
    backWall.addToScene(this.scene)

    const sideWall_1 = new SideWall()
    sideWall_1.setPosition(0, 0, -500)
    sideWall_1.addToScene(this.scene)

    const sideWall_2 = new SideWall()
    sideWall_2.setPosition(0, 0, 492)
    sideWall_2.addToScene(this.scene)
  }

  addRoof () {
    const roof_1 = new Roof(500, 1300, 10)
    roof_1.setPosition(-241, 440, 0)
    roof_1.setRotation(Math.PI / 2, Math.PI / 13, 0)
    roof_1.addToScene(this.scene)

    const roof_2 = new Roof(500, 1300, 10)
    roof_2.setPosition(241, 440, 0)
    roof_2.setRotation(Math.PI / 2, -Math.PI / 13, 0)
    roof_2.addToScene(this.scene)

    this.roof_1 = roof_1.instance
    this.roof_2 = roof_2.instance
  }

  addWindow () {
    const window = new Wind()
    window.setPosition(408, 185, -202)
    window.setRotation(- Math.PI / 2, - Math.PI / 2, 0)
    window.addToScene(this.scene)
  }

  addWindowsill () {
    const windowsill = new Box(10, 250, 60)
    windowsill.setPosition(438, 100, -200)
    windowsill.setRotation(- Math.PI / 2, - Math.PI / 2, 0)
    windowsill.addToScene(this.scene)
  }

  addDoor () {
    const door = new Door()
    door.setPosition(408, 30, 210)
    door.setRotation(0, - Math.PI / 2, 0)
    door.addToScene(this.scene)
    this.doorSet = door
  }

  addVase () {
    const vase = new Vase()
    vase.setPosition(610,80,50)
    vase.setRotation(Math.PI/2,0,0)
    vase.addToScene(this.scene)
  }

  addAxesHelper () {
    const axesHelper = new AxesHelper( 700 )
    this.axesHelper = axesHelper
  }

  animate () {
    if(this.Controls.showAxes){
      this.scene.add( this.axesHelper )
    }else{
      this.scene.remove( this.axesHelper )
    }

    if(this.Controls.showRoof){
      this.scene.add( this.roof_1 )
      this.scene.add( this.roof_2 )
    }else{
      this.scene.remove( this.roof_1 )
      this.scene.remove( this.roof_2 )
    }

    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.animate.bind(this))
  }


}