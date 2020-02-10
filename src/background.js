const Submarine = require("./submarine");


class GameBackground {
    constructor(canvasCtx, gameCanvas, subDepth){
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.subDepth = subDepth
        this.image = new Image();
        this.image.src = "https://www.transparenttextures.com/patterns/asfalt-light.png";
        this.width = gameCanvas.width;
        this.height = gameCanvas.height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = 0;
        this.y = 0; 
        this.clipHeight = 0;
        this.update = this.update.bind(this);
        this.atSurface = this.atSurface.bind(this);
    }
    update(){
      debugger;
      this.atSurface();
          this.canvasCtx.drawImage(
            this.image,
            this.x += this.speedX,
            this.y += this.speedY,
            this.width,
            this.height
          );
          let scaleHeight = (this.gameCanvas.height / this.image.height)
          if (this.clipHeight - this.speedY >= 500) {
            this.y = 0;
            this.clipHeight = 0;
          } else {
          this.clipHeight -= this.speedY;
          }
          let imgPosX = 0;
          let imgPosY = this.height - this.clipHeight;
          // debugger;
      // console.log(`"this.x": ${this.x}`, `"this.y": ${this.y}`)
      // console.log(`"imgPosX": ${imgPosX}`, `"imgPosY": ${imgPosY}`)
      // console.log(`"clipStartX": ${clipStartX}`, `"clipStartY": ${clipStartY}`, `"clipWidth": ${clipWidth}`, `"clipHeight": ${this.clipHeight}`)

          this.canvasCtx.drawImage(
            this.image,
            0,
            0,
            this.image.width,
            this.clipHeight,
            imgPosX,
            imgPosY,
            this.gameCanvas.width,
            this.clipHeight * scaleHeight
          );
    }
    atSurface () {
      if (this.subDepth <= 0) console.log("no");
    }
}
module.exports = GameBackground;