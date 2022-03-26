export class Timmer {
    constructor (iframe, delay = 20) {
        this.iframe = iframe
        this.delay = delay
        this.timmerId = null
        this.step = 0
    }

    start () {
        this.loop()
    }

    loop () {
        this.next()
        this.timmerId = setTimeout(this.loop.bind(this), this.delay)
    }

    pause () {
        clearTimeout(this.timmerId)
    }

    next () {
        this.iframe.next(this.step++)
    }
}