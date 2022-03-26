export class FaceItem {
    constructor () {
        this. zIndex = 0
        this.position = {
            x: 0,
            y: 0
        }
        this.size = {
            w: 100,
            h: 50,
        }
        this.move = {
            w: 9,
            h: 5
        }
    }
    
    draw (pen) {
        pen.ctx.fillRect(
            this.position.x,
            this.position.y,
            this.size.w,
            this.size.h
        );
    }

    next(step, canvas) {
        this.position.x += this.move.w *
            (step * this.move.w / (canvas.width - this.size.w) % 2 < 1 ? 1 : -1)
        this.position.y += this.move.h *
        (step * this.move.h / (canvas.height - this.size.h) % 2 < 1 ? 1 : -1)
    }
}