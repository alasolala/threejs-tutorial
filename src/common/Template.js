import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Vector3,
  Color
} from 'three'

export default class Template {
  constructor () {
    this.el = document.body
    this.PCamera = {
      fov: 45,
      aspect: window.innerWidth / window.innerHeight,
      near: 1,
      far: 1000
    }
    this.cameraPostion = new Vector3(0, 0, 1)
    this.cameraLookAt = new Vector3(0,0,0)
    this.rendererColor = new Color(0x000000)
    this.rendererWidth = window.innerWidth
    this.rendererHeight = window.innerHeight
  }

  initPerspectiveCamera () {
    const camera = new PerspectiveCamera(
      this.PCamera.fov,
      this.PCamera.aspect,
      this.PCamera.near,
      this.PCamera.far
    )
    camera.position.copy(this.cameraPostion)
    camera.lookAt(this.cameraLookAt)
    this.camera = camera
    this.scene.add(camera)
  }

  initScene () {
    this.scene = new Scene()
  }

  initRenderer () {
    const renderer = new WebGLRenderer({
      antialias: true
    })
    renderer.setClearColor(this.rendererColor)
    renderer.setSize(this.rendererWidth, this.rendererHeight)
    this.el.appendChild(renderer.domElement)
    this.renderer = renderer
  }

  init () {
    this.initScene()
    this.initPerspectiveCamera()
    this.initRenderer()
  }
}