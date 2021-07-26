import {
  MeshBasicMaterial,
  SphereGeometry,
  Mesh
} from 'three'

export function initSphere (scene, cubeCamera) {
  const sphereMaterial = new MeshBasicMaterial({
    envMap: cubeCamera.renderTarget
  })

  const sphereGeometry = new SphereGeometry(20, 30, 30)

  const sphere = new Mesh(sphereGeometry, sphereMaterial)
  sphere.position.set(0, 0, 0)
  scene.add(sphere)
}


