const Submarine = require("./submarine");


class GameBackground {
    constructor(canvasCtx, gameCanvas){
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.frameXLeft;
        this.frameYBtm;
        this.drawBackground();
        // this.establishView();
    }

    drawBackground() {
        this.canvasCtx.clearRect(
            0, 0, this.gameCanvas.width, this.gameCanvas.height
        );
        let img = new Image();
        img.src = "https://www.transparenttextures.com/patterns/asfalt-light.png";

        img.onload = () =>
          this.canvasCtx.drawImage(
            img, 0, 0, this.gameCanvas.width, this.gameCanvas.height
          );
    }

    establishView(){
       this.frameXLeft = this.gameCanvas.width * 0.1;
        let frameXRight = this.gameCanvas.width * 0.9;
        let frameYTop = this.gameCanvas.height * 0.1;
        this.frameYBtm = this.gameCanvas.height * 0.9;
    }

    moveBackground(){
        if (Submarine.x === this.frameYBtm) {

        }
    }
}

module.exports = GameBackground;