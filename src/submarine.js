
class Submarine {
  constructor(canvasCtx, gameCanvas) {
    this.canvasCtx = canvasCtx;
    this.gameCanvas = gameCanvas;
    this.drawSubmarine();
    this.drawSubmarine = this.drawSubmarine.bind(this);
    this.moveSubmarine = this.moveSubmarine.bind(this);
    window.addEventListener("keydown", this.moveSubmarine, false);
    window.addEventListener("keyup", this.keysReleased, false);
    this.deltaX = 0;
    this.deltaY = 0;
    this.x = 200;
    this.y = 200;
    this.keys = [];
  }
  drawSubmarine() {
    this.canvasCtx.clearRect(
      0,
      0,
      this.gameCanvas.width,
      this.gameCanvas.height
    );
    let img = new Image();
    img.src = "./images/submarine.png";
    this.x += this.deltaX;
    this.y += this.deltaY;
    // debugger;

    img.onload = () => this.canvasCtx.drawImage(img, this.x, this.y, 100, 100);
  }

  moveSubmarine(e) {
      let keys = this.keys;
    keys[e.keyCode] = true;
    // left
    if (keys[37]) {
      this.deltaX -= 2;
    }
    // right
    if (keys[39]) {
      this.deltaX += 2;
    }
    // down
    if (keys[38]) {
      this.deltaY -= 2;
    }
    // up
    if (keys[40]) {
      this.deltaY += 2;
    }

    e.preventDefault();
    this.drawSubmarine();
  }

  keysReleased(e) {
    // mark keys that were released
    this.keys[e.keyCode] = false;
  }
}
module.exports = Submarine;