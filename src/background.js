
class GameBackground {
    constructor(canvasCtx, gameCanvas){
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.image = new Image();
        this.image.src = "https://www.transparenttextures.com/patterns/asfalt-light.png";
        this.width = gameCanvas.width;
        this.height = gameCanvas.height;
        this.speedY = 0;
        this.dx = 0;
        this.dy = 0; 
        this.sx = 0;
        this.sy = 0; 
        this.sh = this.image.height;
        this.dh = this.height;
        this.scrollVal = 0;
        this.update = this.update.bind(this);
    }

    update(subDepth){

      let scaleHeight = (this.gameCanvas.height / this.image.height)
      this.scrollVal -= this.speedY;
      if (this.scrollVal === 500) {
        this.scrollVal = 0;
      }
      //   (image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      this.canvasCtx.drawImage(
        this.image,
        this.dx,
        this.dy += this.scrollVal,
        this.width,
        this.height
      );
          
      // this.canvasCtx.drawImage(
      //   this.image,
      //   0,
      // );

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

         
    }
}
module.exports = GameBackground;