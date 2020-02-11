
class Garbage {
    constructor(canvasCtx, gameCanvas) {
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.image = new Image();
        this.image.src = "./images/plastic-bag.png";
        this.speedY = 0;
        this.randomX = Math.floor(Math.random() * 600);
        this.update = this.update.bind(this);
        
    }
    generate() {
        this.canvasCtx.drawImage(
            this.image,
            this.randomX,
            450,
            50,
            50
        );
    }

    update(){
        this.speedY += 1;

        this.canvasCtx.drawImage(
            this.image,
            this.randomX,
            this.height + this.speedY,
            50,
            50
        );
    }


}
module.exports = Garbage;