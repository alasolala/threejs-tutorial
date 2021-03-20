import Base from "./Base"
import {
  SphereGeometry,
  MeshLambertMaterial,
  Mesh
} from "three"
export default class Ball extends Base {
  constructor () {
    super()
    const sphereGeometry = new SphereGeometry(...arguments)
    const sphereMaterial = new MeshLambertMaterial({
      color: 0xffff00
    })
    const sphere = new Mesh(sphereGeometry, sphereMaterial)
    this.instance = sphere
  }
}
// const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
// const sphereMaterial = new THREE.MeshLambertMaterial({
//   color: 0xffff00
// })
// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
// sphere.position.set(20, 4, 2)
// sphere.castShadow = true
// scene.add(sphere)