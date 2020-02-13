const Submarine = require('./submarine');
const GameBackground = require('./background');
const Garbage = require('./garbage');
const Collided = require('./collided');
const Zone = require('./zones');
const Depth = require('./depth');


class Game {
    constructor(canvasCtx, gameCanvas){
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.gameCanvas.setAttribute("class", "sunlight");
        this.background = new GameBackground(this.canvasCtx, this.gameCanvas);
        this.submarine = new Submarine(this.canvasCtx, this.gameCanvas);
        this.zone = new Zone(this.gameCanvas);
        this.depth = new Depth(this.canvasCtx, this.gameCanvas, this.submarine);
        this.updateGameArea = this.updateGameArea.bind(this);
        this.makeGarbage = this.makeGarbage.bind(this);
        this.garbageArr = [];
        this.clearCanvas = this.clearCanvas.bind(this);
        this.interval;
        this.garbageInterval;
        this.keysReleased = this.keysReleased.bind(this);
        this.garbageBox = document.createElement("div");
        this.garbageBox.setAttribute("class", "garbage-box");
        this.collectedTrash = 0;
        this.keys = {37: false, 38: false, 39: false, 40: false};
        window.addEventListener("keydown", this.updateGameArea, false);
        window.addEventListener("keyup", this.keysReleased, false);
        this.start();
    }
        
    start() {
        this.depth.updateDepth();
        this.displayGarbageCount();
        this.garbageInterval = setInterval(this.makeGarbage, Math.floor(Math.random() * 20000));
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
        }

        if (this.keys[39]) {
            this.submarine.speedX = 5;
        }

        if (this.keys[38]) {
            this.submarine.speedY = -5;
            this.atBarrier() ? this.background.speedY = 0 : this.background.speedY = 5;
        }

        if (this.keys[40]) {
            this.submarine.speedY = 5;
            this.atBarrier() ? this.background.speedY = 0 : this.background.speedY = -5;
        }

        e.preventDefault();
        this.depth.updateDepth();
  }

    updateGameArea(e) {
        let collisions = [];
        this.clearCanvas();
        if (e) {
            this.newPos(e)
        }
        this.background.update();
        this.submarine.update();
        for(let i = 0; i < this.garbageArr.length; i++) {
            this.garbageArr[i].generate(this.background.speedY);
            let possibleCollision = new Collided(this.garbageArr[i], this.submarine);
            if (possibleCollision.collision() === true) {
                collisions.push(i);
                this.collectedTrash += collisions.length;
            };
        }
        this.displayGarbageCount();
        this.zone.zoneChange(this.depth.subDepth);
        this.emptyGarbage(collisions);
    }
    makeGarbage() {
        if (this.garbageArr.length < 3) {
            this.garbageArr.push(new Garbage(this.canvasCtx, this.gameCanvas));
        }
    }

    emptyGarbage(collisions) {
        for (let i = 0; i < this.garbageArr.length; i++) {
            if (this.garbageArr[i].y < -60 || collisions.includes(i)) {
                this.garbageArr.splice(i, 1);
            }
        }
    }

    atBarrier() {
        if (this.depth.subDepth <= 20 || this.depth.subDepth >= 6050) {
            return true;
        } else {
            return false;
        }
    }
    
    displayGarbageCount() {
        let garbageHeader = document.createElement("h2");
        let garbageContent = document.createElement("p");
        let garbageHeaderText = document.createTextNode("Garbage Collected:");
        let garbageContentText = document.createTextNode(this.collectedTrash);

        garbageHeader.appendChild(garbageHeaderText);
        garbageContent.appendChild(garbageContentText);

        if (this.garbageBox.childElementCount === 0) {
            this.garbageBox.appendChild(garbageHeader);
            this.garbageBox.appendChild(garbageContent);
        } else {
            this.garbageBox.replaceChild(garbageHeader, this.garbageBox.childNodes[0]);
            this.garbageBox.replaceChild(garbageContent, this.garbageBox.childNodes[1]);
        }

        let container = document.getElementsByClassName("canvas-controller-container")
        container[0].appendChild(this.garbageBox);
    }
    
}
export default Game;