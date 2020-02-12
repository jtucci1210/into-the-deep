
class Garbage {
    constructor(canvasCtx, gameCanvas) {
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.image = new Image();
        this.image.src = "./images/plastic-bag.png";
        this.imgHeight = 40;
        this.imgWidth = 40;
        this.speedY = 1;
        this.randomX = Math.floor(Math.random() * 600);
        this.dy = 450;
        this.generate = this.generate.bind(this);
        
    }
    generate(backgroundSpeed) {

        this.canvasCtx.drawImage(
            this.image,
            this.randomX,
            this.dy -= (this.speedY - backgroundSpeed),
            this.imgHeight,
            this.imgWidth
        );
    }


}
module.exports = Garbage;