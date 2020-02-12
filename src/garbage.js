
class Garbage {
    constructor(canvasCtx, gameCanvas) {
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.image = new Image();
        this.image.src = "./images/plastic-bag.png";
        this.height = 40;
        this.width = 40;
        this.speedY = 1;
        this.x = Math.floor(Math.random() * 500) + 50;
        this.y = 450;
        this.generate = this.generate.bind(this);
    }

    generate(backgroundSpeed) {

        this.canvasCtx.drawImage(
            this.image,
            this.x,
            this.y -= (this.speedY - backgroundSpeed),
            this.height,
            this.width
        );
    }


}
module.exports = Garbage;