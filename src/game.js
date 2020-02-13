const Submarine = require('./submarine');
const GameBackground = require('./background');
const converter = require('./util/conversions');
const Garbage = require('./garbage');
const Collided = require('./collided');
const Zone = require('./zones');


class Game {
    constructor(canvasCtx, gameCanvas){
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.gameCanvas.setAttribute("class", "sunlight");
        this.subDepth = 20;
        this.background = new GameBackground(this.canvasCtx, this.gameCanvas);
        this.submarine = new Submarine(this.canvasCtx, this.gameCanvas);
        this.zone = new Zone(this.gameCanvas);
        this.updateGameArea = this.updateGameArea.bind(this);
        this.makeGarbage = this.makeGarbage.bind(this);
        this.garbageArr = [];
        this.clearCanvas = this.clearCanvas.bind(this);
        this.interval;
        this.garbageInterval;
        this.keysReleased = this.keysReleased.bind(this);
        this.depthBox = document.createElement("div");
        this.depthBox.setAttribute("id", "depth-box");
        this.garbageBox = document.createElement("div");
        this.garbageBox.setAttribute("class", "garbage-box");
        this.collectedTrash = 0;
        this.keys = {37: false, 38: false, 39: false, 40: false};
        window.addEventListener("keydown", this.updateGameArea, false);
        window.addEventListener("keyup", this.keysReleased, false);
        this.start();
    }
        
    start() {
        this.updateDepth();
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
        this.updateDepth();
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
        this.zone.zoneChange(this.subDepth);
        this.emptyGarbage(collisions);
    }
    makeGarbage() {
        if (this.garbageArr.length < 3) {
            this.garbageArr.push(new Garbage(this.canvasCtx, this.gameCanvas));
        }
    }

    emptyGarbage(collisions) {
        for (let i = 0; i < this.garbageArr.length; i++) {
            if (this.garbageArr[i].dy < -60 || collisions.includes(i)) {
                this.garbageArr.splice(i, 1);
            }
        }
    }

    atBarrier() {
        if (this.subDepth <= 20 || this.subDepth >= 6050) {
            return true;
        } else {
            return false;
        }
    }
    updateDepth() {
        let newDepth = this.subDepth + this.submarine.speedY
        if (newDepth >= 0 && newDepth <= 20) {
            this.subDepth += this.submarine.speedY * 0.1;
        } else if (newDepth > 20 && newDepth <= 200) {
            this.subDepth += this.submarine.speedY * 0.5;
        } else if (newDepth > 200) {
            this.subDepth += this.submarine.speedY;
        }
        this.updateDepthBox();
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

    updateDepthBox(){
        let feetTextForBox = '';
        let metersTextForBox = '';
        let feetDepthItem = document.createElement("li");
        let metersDepthItem = document.createElement("li");
        let meters;
        let feet;

        switch (true) {
            case (this.subDepth <= 20):
                meters = "Too Shallow"
                break;
            case (this.subDepth >= 6050):
                meters = "Too Deep"
                break;
            default:
                meters = this.subDepth.toFixed(0)
                break;
        }
        switch (true) {
            case (this.subDepth <= 20):
                feet = "Too Shallow"
                break;
            case (this.subDepth >= 6050):
                feet = "Too Deep"
                break;
            default:
                feet = converter.metersToFeet(meters).toFixed(2);
                break;
        }
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