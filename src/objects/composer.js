import { scene, camera, renderer } from 'objects/common/scene'
import KaleidoShader from 'materials/kalido'
import HorizontalBlur from 'materials/horizontalBlur'
import VerticalBlur from 'materials/verticalBlur'

const renderPass = new THREE.RenderPass( scene, camera );
// const kaleidoPass = new THREE.ShaderPass( THREE.KaleidoShader );
const kaleidoPass = KaleidoShader()
const hBlurPass = HorizontalBlur()
const vBlurPass = VerticalBlur()

const composer = new THREE.EffectComposer(renderer);
composer.addPass( renderPass );
composer.addPass( hBlurPass );
composer.addPass( vBlurPass )
composer.addPass( kaleidoPass );

kaleidoPass.renderToScreen = true;

export default ({
  mouse: { x, y },
  highPulse,
  pulseValue,
  zoomIn
}) => {


  camera.position.z = zoomIn
  camera.position.y += pulseValue * 0.0000001
  camera.position.x += pulseValue * 0.0000001

  kaleidoPass.uniforms.sides.value = 6;
  hBlurPass.uniforms.h.value = highPulse * 0.00001
  vBlurPass.uniforms.v.value = highPulse * 0.00001
  // kaleidoPass.uniforms.angle.value = 3.1416 * pulseValue;

  composer.render(0.1)
}
