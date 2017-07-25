//  将SVG转换为数组
import convertShapeToPath from './convertShapeToPath'

export default function SVGtoArray(svgObj) {
  let SVGArray = []

  function walk (svgObj) {
    for (let node in svgObj) {
      if (node ==='rect' || node === 'circle'|| node ==='ellipse'|| node === 'polygon'|| node ==='line'|| node === 'path') {
        for (let subNode of svgObj[node]) {
          SVGArray.push(convertShapeToPath(subNode.$, node))
        }
      }
      else if (node === 'g') {
        for (let groupNode of svgObj[node]) {
          walk(groupNode)
        }
      }
    }
  }

  walk(svgObj)

  return SVGArray
}
