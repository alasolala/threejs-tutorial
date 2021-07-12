import {
  MeshBasicMaterial,
  SphereGeometry,
  Mesh
} from 'three'

export function initSphere (scene, cubeCamera) {
  console.log(cubeCamera)
  const sphereMaterial = new MeshBasicMaterial({
    envMap: cubeCamera.renderTarget
  })
  const sphereGeometry = new SphereGeometry(350, 50, 50)
  const sphere = new Mesh(sphereGeometry, sphereMaterial)
  sphere.position.set(0, 100, 0)
  scene.add(sphere)
}