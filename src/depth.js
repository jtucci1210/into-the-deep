const converter = require('./util/conversions');


class Depth {
    constructor(canvasCtx, gameCanvas, submarine) {
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.submarine = submarine;
        this.subDepth = 20;
        this.depthBox = document.createElement("div");
        this.depthBox.setAttribute("class", "depth-box");


    }

    updateDepth() {
        let newDepth = this.subDepth + this.submarine.speedY
        if (newDepth >= 0 && newDepth <= 20) {
            this.subDepth += this.submarine.speedY * 0.1;
        } else if (newDepth > 20 && newDepth <= 200) {
            this.subDepth += this.submarine.speedY * 0.5;
        } else if (newDepth > 200) {
            this.subDepth += this.submarine.speedY;
        } else if (newDepth > 1000) {
            this.subDepth += this.submarine.speedY;
        }
        this.updateDepthBox();
    }

    moveDepthBox() {
        let rightAxis = this.gameCanvas.width;
        let depthRatio = 6050 / this.gameCanvas.height;
        let posY = this.subDepth / depthRatio;
        this.canvasCtx.fillStyle = "gold";
        this.canvasCtx.beginPath();
        this.canvasCtx.ellipse(
            rightAxis, posY, 15, 5, Math.PI, 0, 2 * Math.PI
        );
        this.canvasCtx.stroke();
        
        this.canvasCtx.fill();
    }

    updateDepthBox() {
        let feetTextForBox = '';
        let metersTextForBox = '';
        let depthHeaderText = document.createTextNode("Depth Gauge")
        let depthHeader = document.createElement("h2");
        depthHeader.setAttribute("class", "depth-header");
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
        feetTextForBox = document.createTextNode(`Feet: ${feet}`);
        metersTextForBox = document.createTextNode(`Meters: ${meters}`);

        feetDepthItem.appendChild(feetTextForBox);
        metersDepthItem.appendChild(metersTextForBox);
        depthHeader.appendChild(depthHeaderText);

        if (this.depthBox.childElementCount === 0) {
            this.depthBox.appendChild(depthHeader);
            this.depthBox.appendChild(feetDepthItem);
            this.depthBox.appendChild(metersDepthItem);
        } else {
            this.depthBox.replaceChild(depthHeader, this.depthBox.childNodes[0]);
            this.depthBox.replaceChild(feetDepthItem, this.depthBox.childNodes[1]);
            this.depthBox.replaceChild(metersDepthItem, this.depthBox.childNodes[2]);
        }
        let container = document.getElementsByClassName("canvas-controller-container")
        container[0].appendChild(this.depthBox);
    }
}
module.exports = Depth;