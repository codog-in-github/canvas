import { Iframe } from './animate/Iframe'
import { Timmer } from './animate/Timmer'
import { FaceItem } from './face/FaceItem'
import { FaceCanvas } from './panle/FaceCanvas'
import './style/main.less'
import './utils'

const main = () => {
    const canvas = document.getElementById('canvas')
    canvas.height = window.innerHeight - 5
    canvas.width = window.innerWidth - 5
    const faceCanvas = new FaceCanvas(canvas)
    const iframe = new Iframe(faceCanvas.pen, [ new FaceItem() ])
    const timmer = new Timmer(iframe)
    timmer.start()
}

document.ready(main)