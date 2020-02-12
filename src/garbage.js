
class Garbage {
    constructor(canvasCtx, gameCanvas) {
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.image = new Image();
        this.image.src = "./images/plastic-bag.png";
        this.height = this.gameCanvas.height;
        this.speedY = 1;
        this.randomX = Math.floor(Math.random() * 600);
        this.dy = 450;
        this.generate = this.generate.bind(this);
        
    }
    generate(backgroundSpeed) {

        // debugger;
        this.canvasCtx.drawImage(
            this.image,
            this.randomX,
            this.dy -= (this.speedY - backgroundSpeed),
            50,
            50
        );
    }


}
module.exports = Garbage;