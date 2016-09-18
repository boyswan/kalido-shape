import * as Objects from 'objects'
import { analyser, frequencyData } from 'audio'


const normalize = audio => {
  return audio / 300
}

export default props => {
  analyser.getByteFrequencyData(frequencyData)

  const freq = {
    low: normalize(frequencyData[0] + frequencyData[1] + frequencyData[2] + frequencyData[3] + frequencyData[4]),
    mid: normalize(frequencyData[5] + frequencyData[6] + frequencyData[7] + frequencyData[8] + frequencyData[9]),
    high: normalize(frequencyData[10] + frequencyData[11] + frequencyData[12] + frequencyData[13] + frequencyData[14])
  }


  return Object.values(Objects).forEach(obj => obj(Object.assign(props, freq)))
}
