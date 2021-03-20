import {
  BoxGeometry,
  MeshLambertMaterial,
  Mesh
} from "three"
import Base from "./Base"
export default class BackWall extends Base{
  constructor(){
    super()

    const wallGeometry = new BoxGeometry( ...arguments )

    const wallMaterial = new MeshLambertMaterial({ 
      color: 0xe5d890 
    })

    const wall = new Mesh( wallGeometry, wallMaterial )
    this.instance = wall
  }

}