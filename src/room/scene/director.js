import {
  Color,
  Vector3,
  Fog,
  AxesHelper
} from 'three'
import Template from "../../common/Template"
import { addAmbientLight, addDirectionalLight } from "./light"
import Ball from "../objects/Ball"
import Ground from "../objects/Ground"
import Floor from "../objects/Floor"
import BackWall from "../objects/BackWall"
import SideWall from "../objects/SideWall"
import FrontWall from "../objects/FrontWall"
import Roof from "../objects/Roof"
import { addOrbitControls } from "../control/orbitControls"

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

    //add controls
    addOrbitControls(this.camera, this.renderer.domElement)

    //add axesHelper
    this.addAxesHelper()

    console.log(this.scene)
    this.animate()

  }

  addBall () {
    const ball = new Ball(15, 32, 16)
    ball.setPosition(20, 14, 0)
    ball.addToScene(this.scene)
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

    const backWall = new BackWall(1000, 400, 20)
    backWall.setPosition(-400, 199, 0)
    backWall.setRotation(0, - Math.PI / 2, 0)
    backWall.addToScene(this.scene)

    const sideWall_1 = new SideWall()
    sideWall_1.setPosition(0, 0, -500)
    sideWall_1.addToScene(this.scene)

    const sideWall_2 = new SideWall()
    sideWall_2.setPosition(0, 0, 500)
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
    
  }

  addAxesHelper () {
    const axesHelper = new AxesHelper( 500 );
    this.scene.add( axesHelper );
  }

  animate () {
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.animate.bind(this))
  }


}