import Interpol from 'interpol-js'

export let pulseValue = 0
export let lowPulse = 0
export let highPulse = 0
export let zoomIn = 0

Interpol.tween()
.from(100)
.to(200)
.duration(4000)
.ease(Interpol.easing.easeInOutCubic)
.step(val => pulseValue = val * 10)
.complete(function() { this.reverse() })
.start();

Interpol.tween()
.from(50)
.to(55)
.duration(3333)
.ease(Interpol.easing.easeInOutCubic)
.step(val => lowPulse = val * 10)
.complete(function() { this.reverse() })
.start();

// highPulse
Interpol.tween()
  .from(100)
	.to(0)
	.duration(3333)
	.ease(Interpol.easing.easeInOutCubic)
  .step(val => highPulse = val)
	.complete(function() { this.reverse() })
	.start();


// zoomIn
Interpol.tween()
  .from(60)
	.to(40)
	.duration(3333)
	.ease(Interpol.easing.easeInOutCubic)
  .step(val => zoomIn = val)
	.complete(function() { this.reverse() })
	.start();


//
// // test
// export let zoomIn = createInterpol({ from: 1000, to: 100, durationm: 500, loop: fale})
//
// const createInterpol = ({ from, to, duration, loop }) => {
//   let val
//   Interpol.tween()
//     .from(from)
//   	.to(to)
//   	.duration(duration)
//   	.ease(Interpol.easing.easeInOutCubic)
//     .step(val => zoomIn = val)
//     .complete(function() { loop ? this.reverse() : false })
//   	.start();
//   return val
// }
