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
		roofTexture.wrapS = roofTexture.wrapT = RepeatWrapping
		roofTexture.repeat.set( 2, 2 )
		// roofTexture.anisotropy = 16
    const materials = []
    const colorMaterial = new MeshLambertMaterial({ color: 'grey' })
    const textureMaterial = new MeshLambertMaterial({ map: roofTexture })
    for(let i=0; i<6; i++){
      materials.push(colorMaterial)
    }
    materials[5] = textureMaterial
    const roof = new Mesh( roofGeometry, materials )
    this.instance = roof
  }

}