import { scene } from 'objects/common/scene'
import material from 'materials/move'
import Update from 'update'

const tri = 1000 * 3 * 3
const vertices = new Float32Array(tri)

for ( let i = 0; i < tri; i += 1 ) {
  vertices[i] = Math.random() - 0.5;
}

const colors = new Uint8Array(tri)
for ( let i = 0; i < tri; i += 9) {
  colors[i] = 155;
}

const geometry = new THREE.BufferGeometry();
geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3, true));

const mesh = new THREE.Mesh( geometry, material() );
mesh.scale.x = 10
mesh.scale.y = 10
// scene.add(mesh)

export default ({
  mouse: { x, y },
  rotate,
  interval,
  pulseValue
}) => {
  mesh.material.uniforms.mouse.value.set(pulseValue, pulseValue)
  mesh.rotation.y = rotate;
  mesh.rotation.x = -rotate;
  mesh.material.uniforms.time.value = interval * 0.1;

}
