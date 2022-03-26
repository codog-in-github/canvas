export class Pen {
    constructor (faceCanvas) {
        this.faceCanvas = faceCanvas
        this.ctx = faceCanvas.getCtx()
        this.defaultStyle = {
            fillStyle: '#000000'
        }
    }

    setDefaultStyle () {
        this.setStyle(this.defaultStyle)
    }

    setStyle(style = {}){
        const { fillStyle } = style
        if (fillStyle)
            this.ctx.fillStyle = fillStyle;
        // TODO SET STYLE
        
    }

    clear(){
        this.setStyle({
            fillStyle: this.faceCanvas.bgColor
        })
        this.ctx.fillRect(
            0, 0, 
            this.faceCanvas.width,
            this.faceCanvas.height
            )
        this.setDefaultStyle()
    }
}