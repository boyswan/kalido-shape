const hmr = require('helpers/hmr')
const cache = hmr.cache(__filename)
const glslify = require('glslify')
const vertexShader = glslify('./shaders/kalido.vert')
const fragmentShader = glslify('./shaders/kalido.frag')

export default () => {
	const material = new THREE.ShaderPass({
		uniforms: {
	    "tDiffuse": { type: "t", value: null },
	    "sides":  { type: "f", value: 6.0 },
	    "angle":  { type: "f", value: 0.0 }
	  },
		vertexShader,
		fragmentShader
	})
	hmr.enable(cache, material)
  return material
}

//
// if (module.hot) {
//   module.hot.accept(err => {
//     if (err) throw errr
//   })
//   hmr.update(cache, {
//     vertexShader, fragmentShader
//   })
// }
