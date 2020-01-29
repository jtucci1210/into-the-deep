import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const gameCanvas = document.getElementById("game-canvas");
    const canvasCtx = gameCanvas.getContext("2d");
    
    const game = new Game(canvasCtx, gameCanvas);
})