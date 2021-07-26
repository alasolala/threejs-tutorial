import { 
  Vector3, 
  WebGLCubeRenderTarget, 
  CubeCamera, 
  RGBFormat, 
  LinearMipmapLinearFilter
} from 'three'
import Template from "../../common/Template"
import { addOrbitControls } from "../control/orbitControls"
import { initBox } from "../objects/Box"
import { initSphere } from "../objects/Sphere"
export default class Director extends Template{
  constructor () {
    super()

    //set params
    //camera
    this.PCamera.fov = 65

    this.cameraPostion = new Vector3(0, 40, 100)

    //init camera/scene/render
    this.init()

    //add controls
    addOrbitControls(this.camera, this.renderer.domElement)

    //init cubeCamera
    const cubeRenderTarget = new WebGLCubeRenderTarget( 128, { 
      format: RGBFormat, 
      generateMipmaps: true,
      minFilter: LinearMipmapLinearFilter
    } );
    this.cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget)
    this.cubeCamera.position.set(0, 0, 0)
    this.scene.add(this.cubeCamera)

    //add object
    initBox(this.scene)
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
