export class Iframe {
    constructor (pen, items) {
        this.pen = pen
        this.items = items.sort((a, b) => a.zIndex - b.zIndex)
    }

    clear () {
        this.pen.clear()
    }

    draw () {
        for(const item of this.items){
            item.draw(this.pen)
        }
    }

    next (step) {
        this.clear()
        for(const item of this.items){
            item.next(step, this.pen.faceCanvas)
            this.pen.setDefaultStyle()
        }
        this.draw()
    }

    on (name, event) {}
}