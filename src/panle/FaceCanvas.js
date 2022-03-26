import { Pen } from "./Pen"

export class FaceCanvas {
    constructor (canvas) {
        this.canvas = canvas
        this.pen = new Pen(this)
        const client = canvas.getBoundingClientRect()
        this.height = client.height
        this.width = client.width
        this.bgColor = '#fff'
    }

    getCtx () {
        return this.canvas.getContext('2d')
    }

    setBgColor (color) {
        this.bgColor = color
    }
}