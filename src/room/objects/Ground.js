import {
  PlaneGeometry,
  TextureLoader,
  MeshLambertMaterial,
  Mesh,
  RepeatWrapping,
  sRGBEncoding
} from "three"
import Base from "./Base"
export default class Ground extends Base{
  constructor(){
    super()

    const groundGeometry = new PlaneGeometry( ...arguments )

    const groundTexture = new TextureLoader().load('/images/room/grass.jpg')
		groundTexture.wrapS = groundTexture.wrapT = RepeatWrapping
		groundTexture.repeat.set( 50, 50 )
		groundTexture.anisotropy = 16
    const groundMaterial = new MeshLambertMaterial({ 
      map: groundTexture 
    })

    const ground = new Mesh( groundGeometry, groundMaterial )
    this.instance = ground
  }

}