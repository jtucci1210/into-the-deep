const Submarine = require('./submarine');
const GameBackground = require('./background');

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
        this.keys = {37: false, 38: false, 39: false, 40: false};
        window.addEventListener("keydown", this.updateGameArea, false);
        window.addEventListener("keyup", this.keysReleased, false);
        // this.start();
    }
        
    start() {
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
    }
    newPos(e) {
        this.submarine.speedX = 0;
        this.submarine.speedY = 0;
        this.background.speedX = 0;
        this.background.speedY = 0;
        this.keys[e.keyCode] = true;
        if (this.keys[37]) {
            this.submarine.speedX = -4;
            this.background.speedX = 4;
        }
        if (this.keys[39]) {
            this.submarine.speedX = 4;
            this.background.speedX = -4;
        }
        if (this.keys[38]) {
            this.submarine.speedY = -4;
            this.background.speedY = 4;
        }
        if (this.keys[40]) {
            this.submarine.speedY = 4;
            this.background.speedY = -4;
        }
        this.subDepth += this.submarine.speedY;
        console.log(this.subDepth);

        e.preventDefault();
  }

    updateGameArea(e) {
        this.clearCanvas();
        if (e) {
            this.newPos(e)
        }
        this.background.update();
        this.submarine.update();
    }
    
}
export default Game;