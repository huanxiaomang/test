class Drag {
    constructor() {

    }

    run() {
        console.log(1);
        window.addEventListener('DOMContentLoaded', () => {
            this.body = document.querySelector('body');

            this.body.addEventListener('mousedown', this.mouseDown);
        })
    }

    mouseDown(e) {

    }
}

module.exports = () => {
    const drag = new Drag();
    return { drag };
}

