
class Submarine {
  constructor(canvasCtx, gameCanvas) {
    this.canvasCtx = canvasCtx;
    this.gameCanvas = gameCanvas;
    this.image = new Image();
    this.image.src = "./images/submarine.png";
    this.width = 100;
    this.height = 100;
    this.speedX = 0;
    this.speedY = 0;
    this.x = 200;
    this.y = 200;
    this.update = this.update.bind(this);
  }

  update() {
    if (this.atBoundaryX()) {
      this.speedX = 0
    }
    if (this.atBoundaryY()) {
      this.speedY = 0
    }
    this.canvasCtx.drawImage(
      this.image,
      (this.x += this.speedX),
      (this.y += this.speedY),
      this.width,
      this.height
    );
  }

  atBoundaryX() {
    const posX = this.x + this.speedX;
    const canvasBndryX = this.gameCanvas.width * 0.025;
    if (posX <= canvasBndryX || posX + this.width >= this.gameCanvas.width - canvasBndryX) {
      return true;
    } else {
      return false;
    }
  }
  atBoundaryY() {
    const posY = this.y + this.speedY;
    const canvasBndryY = this.gameCanvas.height * 0.1;
    if (posY + (this.height / 2) <= canvasBndryY || posY + (this.height / 2) >= this.gameCanvas.height - canvasBndryY){
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Submarine;
