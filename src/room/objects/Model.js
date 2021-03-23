import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { Mesh,Color } from "three"
export function addTable (scene) {
  const mtlLoader = new MTLLoader()
  const objLoader = new OBJLoader()

  mtlLoader.load( '../../images/room/table/table.mtl', ( material ) => {
    objLoader.setMaterials( material );
    objLoader.load( '../../images/room/table/table.obj', ( object ) => {
      object.position.set(600,0,0)
      scene.add( object ); 
    } );
  })
}

export function addFlower (scene) {
  const mtlLoader = new MTLLoader()
  const objLoader = new OBJLoader()
  mtlLoader.load( '../../images/room/rose/rose.mtl', ( material ) => {
    objLoader.setMaterials( material );
    objLoader.load( '../../images/room/rose/rose.obj', ( object ) => {
      ChangeMaterialEmissive(object)
      object.position.set(610,80,50)
      object.rotation.set(Math.PI/12, 0, 0)
      scene.add( object )
    } );
  })
}

function ChangeMaterialEmissive(parent) {
  parent.traverse(function (obj) {
      if(obj instanceof Mesh){
          obj.material.emissive = new Color(1,1,1)
          obj.material.emissiveIntensity = 1
          obj.material.emissiveMap = obj.material.map
      }
  });
}