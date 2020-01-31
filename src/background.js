const Submarine = require("./submarine");


class GameBackground {
    constructor(canvasCtx, gameCanvas){
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.frameXLeft;
        this.frameYBtm;
        this.x = 0;
        this.y = 0;
        this.deltaBackgroundX = 0;
        this.deltaBackgroundY = 0;
        this.submarine = new Submarine(this.canvasCtx, this.gameCanvas)
        this.drawBackground = this.drawBackground.bind(this);
        this.establishView = this.establishView.bind(this);
        this.moveBackground = this.moveBackground.bind(this);
        window.addEventListener("keydown", this.moveBackground, false);
    }

    drawBackground() {
        this.canvasCtx.clearRect(
            0, 0, this.gameCanvas.width, this.gameCanvas.height
        );
        let img = new Image();
        img.src = "https://www.transparenttextures.com/patterns/asfalt-light.png";
        if (this.x === -(this.gameCanvas.width)) {
            this.x = 0
        } else {
        this.x +=  this.deltaBackgroundX }
        if (this.y === -(this.gameCanvas.height)) {
            this.y = 0
        } else {
        this.y +=  this.deltaBackgroundY }
        // this.y +=  this.deltaBackgroundY
        img.onload = () =>
        this.canvasCtx.drawImage(
            img, this.x, this.y, this.gameCanvas.width, this.gameCanvas.height
            );
            // debugger;
    }

    establishView(){
       this.frameXLeft = this.gameCanvas.width * 0.1;
        let frameXRight = this.gameCanvas.width * 0.8;
        let frameYTop = this.gameCanvas.height * 0.1;
        this.frameYBtm = this.gameCanvas.height * 0.8;
    }

    moveBackground(){
        this.deltaBackgroundX = 0;
        this.deltaBackgroundY = 0;
        this.establishView();
        if (this.submarine.getPos().y >= this.frameYBtm) {
            // debugger;
            this.deltaBackgroundY = 4
        }
        this.drawBackground();
    }
}

module.exports = GameBackground;