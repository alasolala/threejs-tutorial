import {
  BoxGeometry,
  TextureLoader,
  MeshLambertMaterial,
  Mesh,
  RepeatWrapping,
} from "three"
import Base from "./Base"
export default class Roof extends Base{
  constructor(){
    super()

    const roofGeometry = new BoxGeometry( ...arguments )

    const roofTexture = new TextureLoader().load('/images/room/roof.png')
		// roofTexture.wrapS = roofTexture.wrapT = RepeatWrapping
		// roofTexture.repeat.set( 50, 50 )
		// roofTexture.anisotropy = 16
    const materials = []

    for(let i=0; i<6; i++){
      materials.push(new MeshLambertMaterial({ color: 'grey' }))
    }
    materials[5] = new MeshLambertMaterial({ map: roofTexture })
    const roof = new Mesh( roofGeometry, materials )
    this.instance = roof
  }

}