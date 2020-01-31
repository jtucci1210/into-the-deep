const Submarine = require('./submarine');
const GameBackground = require('./background');

class Game {
    constructor(canvasCtx, gameCanvas){
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.start();
    }
    start() {
        this.background = new GameBackground(this.canvasCtx, this.gameCanvas);
        
    }
    
}
export default Game;