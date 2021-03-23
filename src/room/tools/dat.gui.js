import { GUI } from 'dat.gui'

export function Gui () {
  const controls = new function () {
    this.showAxes = false
    this.showRoof = true
  }

  const gui = new GUI()

  gui.add(controls, 'showAxes')
  gui.add(controls, 'showRoof')
  
  return controls
}
