const Submarine = require('./submarine');
const GameBackground = require('./background');

class Game {
    constructor(canvasCtx, gameCanvas){
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.start();
    }
    start() {
        this.submarine = new Submarine(this.canvasCtx, this.gameCanvas)
        this.background = new GameBackground(this.canvasCtx, this.gameCanvas);
    }
    
}
export default Game;