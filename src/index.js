import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    console.log("webpack is working")
    const canvas = document.getElementById("game-canvas");
    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;

    const ctx = canvas.getContext("2d");
    const game = new Game();
    new GameView(game, ctx).start();
})