import { CubeTextureLoader } from "three";

export function initBox (scene) {
  const urls = [
    '../../images/reflection-sphere/posx.jpg',
    '../../images/reflection-sphere/negx.jpg',
    '../../images/reflection-sphere/posy.jpg',
    '../../images/reflection-sphere/negy.jpg',
    '../../images/reflection-sphere/posz.jpg',
    '../../images/reflection-sphere/negz.jpg'

  ]
  const loader = new CubeTextureLoader()
  scene.background = loader.load(urls)
}