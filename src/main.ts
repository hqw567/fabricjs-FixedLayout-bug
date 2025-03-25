import * as fabric from 'fabric'

const canvas = new fabric.Canvas('canvas', {
  backgroundColor: 'transparent',
  preserveObjectStacking: true,
})
canvas.setDimensions({ width: window.innerWidth, height: window.innerHeight })
const image = await fabric.FabricImage.fromURL(
  'https://www.w3schools.com/tags/img_girl.jpg',
  {},
  { scaleX: 0.5, scaleY: 0.5, top: 100, left: 100, selectable: true },
)
const fixedGroup = new fabric.Group([image], {
  width: image.width,
  height: image.height,
  layoutManager: new fabric.LayoutManager(new fabric.FixedLayout()),
  subTargetCheck: true,
  interactive: true,
  selectable: false,
  backgroundColor: 'red',
})
canvas.add(fixedGroup)
fixedGroup.setCoords()
image.left = -image.width / 1.5
canvas.renderAll()

// FixedLayout position is significantly inaccurate when canvas zoom is below 0.5
setTimeout(() => {
  canvas.zoomToPoint(canvas.getCenterPoint(), 0.4)
  canvas.renderAll()
}, 1000)
