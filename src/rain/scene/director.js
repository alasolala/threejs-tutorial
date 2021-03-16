import {
  AmbientLight,
  DirectionalLight,
  FogExp2,
  PointLight
} from 'three'
import Template from "../../common/Template"
import Cloud from "../objects/Cloud"
import RainDrop from "../objects/RainDrop"

export default class Director extends Template{
  constructor () {
    super()

    //set params
    //camera
    this.PCamera.fov = 60

    //init camera/scene/render
    this.init()
    this.camera.rotation.x = 1.16
    this.camera.rotation.y = -0.12
    this.camera.rotation.z = 0.27

    //add object
    this.addCloud()
    this.addRainDrop()

    this.addFog()

    //add light
    this.initLight()
    this.addLightning()

    //animate
    this.animate()
  }

  addCloud () {
    this.clouds = []
    for(let i = 0; i < 30; i++){
      const cloud = new Cloud()
      this.clouds.push(cloud)
      cloud.setPosition(Math.random() * 1000 - 460, 600, Math.random() * 500 - 400)
      cloud.setRotation(1.16, -0.12, Math.random() * 360)
      this.scene.add(cloud.instance)
    }
  }

  addRainDrop () {
    this.rainDrop = new RainDrop()
    this.scene.add(this.rainDrop.instance)
  }

  addFog () {
    const fog = new FogExp2(0x1c1c2a, 0.002)
    this.renderer.setClearColor(fog.color)
  }

  addLightning () {
    const lightning = new PointLight(0x062d89, 30, 500, 1.7)
    lightning.position.set(200, 300, 100)
    this.lightning = lightning
    this.scene.add(lightning)
  }

  initLight () {
    const ambientLight = new AmbientLight(0x555555)
    this.scene.add(ambientLight)

    const directionLight = new DirectionalLight(0xffeedd)
    directionLight.position.set(0,0,1)
    this.scene.add(directionLight)
  }

  animate () {
    //cloud move
    this.clouds.forEach((cloud) => {
      cloud.animate()
    })
    
    //rain drop
    this.rainDrop.animate()

    //lightning
    if(Math.random() > 0.93 || this.lightning.power > 100){
      if(this.lightning.power < 100){
        this.lightning.position.set(
          Math.random() * 400,
          300 + Math.random() * 200,
          100
        )
      }
      this.lightning.power = 50 + Math.random() * 500
    }

    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.animate.bind(this))
  }
}
