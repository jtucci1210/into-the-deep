const Submarine = require("./submarine");


class GameBackground {
    constructor(canvasCtx, gameCanvas, subDepth){
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
        this.imgPosY = 0;
        this.imgPosX = 0;
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
          let scaleHeight = (this.gameCanvas.height / this.image.height)

          if (this.speedY < 0) {
            if (this.clipHeight - this.speedY >= 500) {
              this.y = 0;
              this.clipHeight = 0;
            } else {
              this.clipHeight -= this.speedY;
            }
            this.imgPosY -= this.clipHeight;
          } 
          else if (this.speedY > 0) {
            if (this.clipHeight - this.speedY <= 0) {
              this.y = 0;
              this.clipHeight = 500;
            } else {
              this.clipHeight += this.speedY;
            }
            this.imgPosY = 0;
          }


          // if (this.clipHeight - this.speedY >= 500) {
          //   this.y = 0;
          //   this.clipHeight = 0;} else if (this.clipHeight - this.speedY <= 0) {
          //   this.y = 0;
          //   this.clipHeight = 500;
          // } else {
          // this.clipHeight -= this.speedY;
          // }
          // let imgPosX = 0;
          // let imgPosY = this.height;

          // if (imgPosY - this.clipHeight >= 500) {
          //   imgPosY = 0;
          // } else {
          // imgPosY = this.height - this.clipHeight;
          // }
          // debugger;
      // console.log(`"this.x": ${this.x}`, `"this.y": ${this.y}`)
      console.log(`"imgPosX": ${this.imgPosX}`, `"imgPosY": ${this.imgPosY}`)
      console.log(`"speedY": ${this.speedY}`, `"clipHeight": ${this.clipHeight}`)

          this.canvasCtx.drawImage(
            this.image,
            0,
            0,
            this.image.width,
            this.clipHeight,
            this.imgPosX,
            this.imgPosY,
            this.gameCanvas.width,
            this.clipHeight * scaleHeight
          );
    }
}
module.exports = GameBackground;