const Submarine = require("./submarine");


class GameBackground {
    constructor(canvasCtx, gameCanvas){
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.image = new Image();
        this.image.src = "https://www.transparenttextures.com/patterns/asfalt-light.png";
        this.width = gameCanvas.width;
        this.height = gameCanvas.height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = 0;
        this.y = 0; 
        this.update = this.update.bind(this);
    }
    update(){
        // if (this.x == -(this.width)) {
        //     this.x = 0;
            // debugger;
        // }
        // this.image.onload = () =>
          this.canvasCtx.drawImage(
            this.image,
            this.x += this.speedX,
            this.y += this.speedY,
            this.width,
            this.height
          );
    }
}
module.exports = GameBackground;