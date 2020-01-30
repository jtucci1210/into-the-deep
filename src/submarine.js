const converter = require('./util/conversions')

class Submarine {
  constructor(canvasCtx, gameCanvas) {
    this.canvasCtx = canvasCtx;
    this.gameCanvas = gameCanvas;
    this.drawSubmarine();
    this.drawSubmarine = this.drawSubmarine.bind(this);
    this.moveSubmarine = this.moveSubmarine.bind(this);
    this.keysReleased = this.keysReleased.bind(this);
    window.addEventListener("keydown", this.moveSubmarine, false);
    window.addEventListener("keyup", this.keysReleased, false);
    this.deltaX = 0;
    this.deltaY = 0;
    this.x = 200;
    this.y = 200;
    this.keys = [];
    this.depthBox = document.createElement("div");
    this.depthBox.setAttribute("id", "depth-box")
    this.depth();
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

    img.onload = () => this.canvasCtx.drawImage(img, this.x, this.y, 100, 100);
  }

  moveSubmarine(e) {
      this.deltaX = 0;
      this.deltaY = 0;
      let keys = this.keys;
    keys[e.keyCode] = true;
    // left
    if (keys[37]) {
      this.deltaX -= 4;
    }
    // right
    if (keys[39]) {
      this.deltaX += 4;
    }
    // down
    if (keys[38]) {
      this.deltaY -= 4;
    }
    // up
    if (keys[40]) {
      this.deltaY += 4;
    }
    
    e.preventDefault();
    this.drawSubmarine();
    this.depth();
  }

  keysReleased(e) {
    // mark keys that were released
    this.keys[e.keyCode] = false;
  }

  depth() {
    //   debugger;
      let feetTextForBox = '';
      let metersTextForBox = '';
      let feetDepthItem = document.createElement("li");
      let metersDepthItem = document.createElement("li");
      let meters = this.y / 10;
      let feet = converter.metersToFeet(meters);
      feetTextForBox = document.createTextNode(feet);
      metersTextForBox = document.createTextNode(meters);
      feetDepthItem.appendChild(feetTextForBox);
      metersDepthItem.appendChild(metersTextForBox);
      if (this.depthBox.childElementCount === 0 ) {
        this.depthBox.appendChild(feetDepthItem);
        this.depthBox.appendChild(metersDepthItem);
      } else {
          this.depthBox.replaceChild(feetDepthItem, this.depthBox.childNodes[0]);
          this.depthBox.replaceChild(metersDepthItem, this.depthBox.childNodes[1]);
      }
      this.gameCanvas.appendChild(this.depthBox);
  }
}
module.exports = Submarine;