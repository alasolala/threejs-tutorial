export default class Base {
  constructor(){}

  setPosition (x,y,z) {
    this.instance.position.set(x,y,z)
  }

  setRotation (x,y,z) {
    this.instance.rotation.x = x
    this.instance.rotation.y = y
    this.instance.rotation.z = z
  }

  addToScene (scene) {
    scene.add(this.instance)
  }

}