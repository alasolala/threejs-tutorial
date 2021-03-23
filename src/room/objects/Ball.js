import Base from "./Base"
import {
  SphereGeometry,
  MeshLambertMaterial,
  Mesh,
  TextureLoader
} from "three"
export default class Ball extends Base {
  constructor () {
    super()
    const sphereGeometry = new SphereGeometry(...arguments)
    const sphereTexture = new TextureLoader().load('/images/room/soccer.jfif')
    const sphereMaterial = new MeshLambertMaterial({ map: sphereTexture })
    const sphere = new Mesh(sphereGeometry, sphereMaterial)
    this.instance = sphere
  }
}