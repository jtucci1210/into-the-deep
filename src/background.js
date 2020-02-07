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
        this.clipHeight = 0;
        this.update = this.update.bind(this);
    }
    update(){
          this.canvasCtx.drawImage(
            this.image,
            this.x += this.speedX,
            this.y += this.speedY,
            this.width,
            this.height
          );
          let clipStartX = 0;
          let clipStartY = 0;
          let clipWidth = this.image.width;
          if (this.clipHeight - this.speedY >= 500) {
            this.clipHeight = 0;
          } else {
          this.clipHeight -= this.speedY;
          }
          let imgPosX = 0;
          let imgPosY = this.height - this.clipHeight;
      console.log(`"this.x": ${this.x}`, `"this.y": ${this.y}`)
      console.log(`"imgPosX": ${imgPosX}`, `"imgPosY": ${imgPosY}`)
      console.log(`"clipStartX": ${clipStartX}`, `"clipStartY": ${clipStartY}`, `"clipWidth": ${clipWidth}`, `"clipHeight": ${this.clipHeight}`)

          this.canvasCtx.drawImage(
            this.image,
            clipStartX,
            clipStartY,
            clipWidth,
            this.clipHeight,
            imgPosX,
            imgPosY,
            clipWidth,
            this.clipHeight
          );
    }
}
module.exports = GameBackground;