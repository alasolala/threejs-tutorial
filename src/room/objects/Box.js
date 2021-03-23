import {
  BoxGeometry,
  MeshLambertMaterial,
  Mesh
} from "three"
import Base from "./Base"
export default class Box extends Base{
  constructor(){
    super()

    const boxGeometry = new BoxGeometry( ...arguments )

    const boxMaterial = new MeshLambertMaterial({ 
      color: 0xe5d890 
    })

    const box = new Mesh( boxGeometry, boxMaterial )
    this.instance = box
  }

}