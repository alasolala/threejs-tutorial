import { 
  TextureLoader,
  PlaneBufferGeometry,
  MeshLambertMaterial,
  Mesh
} from "three"

const texture = new TextureLoader().load('/images/smoke.png')
const cloudGeo = new PlaneBufferGeometry(564, 300)
const cloudMaterial = new MeshLambertMaterial({
  map: texture,
  transparent: true
})
export default class Cloud {
  constructor () {
    const cloud = new Mesh(cloudGeo, cloudMaterial)
    cloud.material.opacity = 0.6
    this.instance = cloud
  }

  setPosition (x,y,z) {
    this.instance.position.set(x,y,z)
  }

  setRotation (x,y,z) {
    this.instance.rotation.x = x
    this.instance.rotation.y = y
    this.instance.rotation.z = z
  }

  animate () {
    this.instance.rotation.z -= 0.003
  }
}