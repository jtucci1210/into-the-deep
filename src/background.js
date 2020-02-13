
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
    this.sh = this.image.height;
    this.dh = this.height;
    this.update = this.update.bind(this);
  }
  update(){
    if (this.dy === 500) {
      this.dy = 0;
    } else if (this.dy <= -500) {
      this.dy = 0;
    }
    this.canvasCtx.drawImage(
      this.image,
      this.dx,
      this.dy += this.speedY,
      this.width,
      this.height
    );
    this.canvasCtx.drawImage(
      this.image,
      this.dx,
      this.height + this.dy,
      this.width,
      this.height
    );
    this.canvasCtx.drawImage(
      this.image,
      this.dx,
      this.dy -this.height,
      this.width,
      this.height
    );
  }
}
module.exports = GameBackground;