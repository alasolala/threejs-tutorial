import {
  PlaneGeometry,
  TextureLoader,
  MeshLambertMaterial,
  Mesh,
  RepeatWrapping
} from "three"
import Base from "./Base"
export default class Floor extends Base{
  constructor(){
    super()

    const floorGeometry = new PlaneGeometry( ...arguments )

    const floorTexture = new TextureLoader().load('/images/room/floor.png')
    floorTexture.wrapS = floorTexture.wrapT = RepeatWrapping
		floorTexture.repeat.set( 25, 25 )
		floorTexture.anisotropy = 16
    const floorMaterial = new MeshLambertMaterial({ 
      map: floorTexture 
    })

    const floor = new Mesh( floorGeometry, floorMaterial )
    this.instance = floor
  }

}