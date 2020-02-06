const Submarine = require('./submarine');
const GameBackground = require('./background');
const converter = require('./util/conversions')


class Game {
    constructor(canvasCtx, gameCanvas){
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.background = new GameBackground(this.canvasCtx, this.gameCanvas);
        this.submarine = new Submarine(this.canvasCtx, this.gameCanvas);
        this.updateGameArea = this.updateGameArea.bind(this);
        this.subDepth = 20;
        this.clearCanvas = this.clearCanvas.bind(this);
        this.interval;
        this.keysReleased = this.keysReleased.bind(this);
        this.depthBox = document.createElement("div");
        this.depthBox.setAttribute("id", "depth-box");
        this.keys = {37: false, 38: false, 39: false, 40: false};
        window.addEventListener("keydown", this.updateGameArea, false);
        window.addEventListener("keyup", this.keysReleased, false);
        // this.start();
        this.updateGameArea();
    }
        
    start() {
        this.updateDepth();
        this.interval = setInterval(this.updateGameArea, 20);
    }

    clearCanvas() {
        this.canvasCtx.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
    }

    stop() {
        clearInterval(this.interval);
    }

    keysReleased(e) {
        this.keys[e.keyCode] = false;
        this.updateGameArea(e);
    }
    newPos(e) {
        this.submarine.speedX = 0;
        this.submarine.speedY = 0;
        this.background.speedX = 0;
        this.background.speedY = 0;
        if (e.type === "keydown") {
        this.keys[e.keyCode] = true;
        }
        if (this.keys[37]) {
            this.submarine.speedX = -5;
            // this.background.speedX = 5;
        }
        if (this.keys[39]) {
            this.submarine.speedX = 5;
            // this.background.speedX = -5;
        }
        if (this.keys[38]) {
            this.submarine.speedY = -5;
            this.background.speedY = 5;
        }
        if (this.keys[40]) {
            this.submarine.speedY = 5;
            this.background.speedY = -5;
        }
        if (this.subDepth + this.submarine.speedY >= 0) {
        this.subDepth += this.submarine.speedY;
        }
        e.preventDefault();
        this.updateDepth();
  }

    updateGameArea(e) {
        this.clearCanvas();
        if (e) {
            this.newPos(e)
        }
        this.background.update();
        this.submarine.update();
    }

    updateDepth(){
        let feetTextForBox = '';
        let metersTextForBox = '';
        let feetDepthItem = document.createElement("li");
        let metersDepthItem = document.createElement("li");
        let meters = this.subDepth;
        let feet = converter.metersToFeet(meters).toFixed(2);
        feetTextForBox = document.createTextNode(`Depth: Feet ${feet}`);
        metersTextForBox = document.createTextNode(`Depth: Meters ${meters}`);
        feetDepthItem.appendChild(feetTextForBox);
        metersDepthItem.appendChild(metersTextForBox);
        if (this.depthBox.childElementCount === 0) {
            this.depthBox.appendChild(feetDepthItem);
            this.depthBox.appendChild(metersDepthItem);
        } else {
            this.depthBox.replaceChild(feetDepthItem, this.depthBox.childNodes[0]);
            this.depthBox.replaceChild(metersDepthItem, this.depthBox.childNodes[1]);
        }
        let container = document.getElementsByClassName("canvas-controller-container")
        container[0].appendChild(this.depthBox);
    }
    
}
export default Game;