import { 
  CubeTextureLoader
} from "three";

export function initBox (scene) {
  const urls = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg'

  ]
  const loader = new CubeTextureLoader()
  const cubeMap = loader.setPath('../../images/reflection-sphere/').load(urls)
  
  scene.background = cubeMap
}