// import Game from './game';
// import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    let img = new Image();
    img.src = "./images/submarine.png";
    img.onload = function() {
      init();
    };

    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");

    function init() {
      ctx.drawImage(img, 200, 200, 100, 100);
    }
   
})