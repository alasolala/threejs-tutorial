import { Vector3, WebGLCubeRenderTarget, CubeCamera, RGBFormat, LinearMipmapLinearFilter } from 'three'
import Template from "../../common/Template"
import { addOrbitControls } from "../control/orbitControls"
import { initBox } from "../objects/Box"
import { initSphere } from "../objects/Sphere"
export default class Director extends Template{
  constructor () {
    super()

    //set params
    //camera
    this.PCamera.fov = 70
    this.cameraPostion = new Vector3(0, 400, 1000)

    //init camera/scene/render
    this.init()
    this.camera.rotation.x = 1.16
    this.camera.rotation.y = -0.12
    this.camera.rotation.z = 0.27

    //add controls
    addOrbitControls(this.camera, this.renderer.domElement)

    //init cubeCamera
    const cubeRenderTarget = new WebGLCubeRenderTarget( 128, { 
      format: RGBFormat, 
      generateMipmaps: true,
      minFilter: LinearMipmapLinearFilter
    } );
    this.cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget)
    this.cubeCamera.position.set(0, 100, 0)
    this.scene.add(this.cubeCamera)

    //add object
    initBox(this.scene)
    console.log(this.cubeCamera)
    initSphere(this.scene, this.cubeCamera)

    //animate
    this.animate()
  }


  animate () {
    this.renderer.render(this.scene, this.camera)
    this.cubeCamera.updateCubeMap(this.renderer, this.scene)
    requestAnimationFrame(this.animate.bind(this))
  }
}
