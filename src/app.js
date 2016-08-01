import 'index.html';
import * as Input from 'helpers/inputs'
import { pulseValue, lowPulse, highPulse, zoomIn } from 'helpers/intervals'
import { multiplyMouse, addMultiple } from 'helpers/utils'
import { translateHand } from 'helpers/leap'
import Update from 'update'

const FPS = 1000/60
const mouseMove$ = Rx.Observable.combineLatest(Input.mouseMoveX$, Input.mouseMoveY$).startWith([])
const interval$ = Rx.Observable.interval(FPS)

const streams$ = Rx.Observable.combineLatest(
  mouseMove$,
  interval$,
  (mouse, interval) => ({
    mouse: multiplyMouse(mouse, 2),
    interval: interval,
    rotate: (interval + 5000) / 360,
    pulseValue: pulseValue,
    lowPulse: lowPulse,
    highPulse: highPulse,
    zoomIn: zoomIn,
    leap: {
      translateHand
    }
  })
)

streams$
  .delay(150)
  .do(Update)
  .sample(FPS, Rx.Scheduler.requestAnimationFrame)
  .subscribe()
