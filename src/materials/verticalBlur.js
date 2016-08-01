const hmr = require('helpers/hmr')
const cache = hmr.cache(__filename)
const glslify = require('glslify')
const vertexShader = glslify('./shaders/horizontalBlur.vert')
const fragmentShader = glslify('./shaders/horizontalBlur.frag')

export default () => {
	const material = new THREE.ShaderPass({
		uniforms: {
			"tDiffuse": { type: "t", value: null },
			"v": { type: "f", value: 1.0 / 512.0 }
	  },
		vertexShader,
		fragmentShader
	})
	// hmr.enable(cache, material)
  return material
}
