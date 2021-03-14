import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Vector3,
  Camera
} from 'three'
export default class Template {
  constructor () {
    this.el = document.body
    this.PCamera = {
      fov: 45,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 1000
    }
    this.cameraPostion = new Vector3(0, 0, 10)
    this.cameraLookAt = new Vector3(0,0,0)
  }

  initPerspectiveCamera () {
    const camera = new PerspectiveCamera(
      this.PCamera.fov,
      this.PCamera.aspect,
      this.PCamera.near,
      this.PCamera.far,
    )
    camera.position.set(this.cameraPostion)
    camera.lookAt(this.cameraLookAt)
    this.perspectiveCamera = camera
  }

  initScene () {
    this.scene = new Scene()
  }

  initRenderer () {
    const renderer = new WebGLRenderer()
    renderer.setClearColor(new THREE.Color(0x000000))
    renderer.setSize(window.innerWidth, window.innerHeight)
    this.el.appendChild(renderer.domElement)
    this.renderer = renderer
  }
}