import { scene } from 'objects/common/scene'
import material from 'materials/move'
import Update from 'update'


const geometry = new THREE.Geometry();

geometry.vertices.push(new THREE.Vector3( 0.0, 1.0, 0.0))
geometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0))
geometry.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0))

geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry.computeFaceNormals();


let mesh
let group = new THREE.Object3D()
group.name = `tri`

for ( var i = 1; i <= 200; i ++ ) {
  mesh = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial({ wireframe: true, side: THREE.DoubleSide }) );
  mesh.geometry.translate( i * 0.001, 0, 0 );
  mesh.rotation.y =  33 * i;
  mesh.rotation.z =  33 * i;
  mesh.rotation.x =  33 * i;
  group.add(mesh)
}

scene.add(group)

export default ({
  mouse: { x, y },
  rotate,
  interval,
  highPulse,
  lowPulse,
  pulseValue
}) => {

  group.scale.x = lowPulse * 0.001
  group.scale.y = lowPulse * 0.001

  scene.getObjectByName('tri').children.forEach((obj, i) => {
    obj.rotation.y = rotate * i * 0.01;
    obj.rotation.x = -rotate * i * 0.01;
  })
}
