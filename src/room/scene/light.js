import {
  AmbientLight,
  DirectionalLight,
} from 'three'

export function addAmbientLight (scene) {
  scene.add( new AmbientLight( 0x666666 ) )
}

export function addDirectionalLight (scene) {
  const light = new DirectionalLight( 0xdfebff, 1 )
  light.position.set( 50, 200, 100 )
  light.castShadow = true
  scene.add( light )
}