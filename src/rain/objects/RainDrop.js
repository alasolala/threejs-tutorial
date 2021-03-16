import {
  PointsMaterial,
  BufferGeometry,
  Float32BufferAttribute,
  Points,
  TextureLoader,
  AdditiveBlending
} from 'three'

// const cloudMaterial = new MeshLambertMaterial({
//   map: texture,
//   transparent: true,
//   transparent: true
// })
export default class RainDrop {
  constructor () {
    const texture = new TextureLoader().load('/images/rain-drop.png')
    const material = new PointsMaterial({
      size: 0.8,
      // color: 0xaaaaaa,
      map: texture,
      transparent: true
    })
    const positions = []

    this.drops = 8000
    this.geom = new BufferGeometry()
    this.velocityY = []

    for(let i = 0; i < this.drops; i++){
      positions.push( Math.random() * 400 - 200 )
      positions.push( Math.random() * 500 - 250 )
      positions.push( Math.random() * 400 - 200 )
      this.velocityY.push(0.5 + Math.random() / 2)
    }
    this.geom.setAttribute( 'position', new Float32BufferAttribute( positions, 3 ) )
    this.instance = new Points(this.geom, material)
    // this.instance.rotation.x = 0.5
  }

  animate () {
    const positions = this.geom.attributes.position.array;
    
    for(let i=0; i<this.drops * 3; i+=3){ //change Y
      this.velocityY[i/3] += Math.random() * 0.05
      positions[ i + 1 ] -=  this.velocityY[i/3]
      if(positions[ i + 1 ] < -200){
        positions[ i + 1 ] =  200
        this.velocityY[i/3] = 0.5 + Math.random() / 2
      } 									
    }
    this.instance.rotation.y += 0.002
    this.geom.attributes.position.needsUpdate = true
  }
}