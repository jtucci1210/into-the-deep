const converter = require('./util/conversions');


class Depth {
    constructor(canvasCtx, gameCanvas, submarine) {
        this.canvasCtx = canvasCtx;
        this.gameCanvas = gameCanvas;
        this.submarine = submarine;
        this.subDepth = 20;
        this.depthBox = document.createElement("div");
        this.depthBox.setAttribute("id", "depth-box");

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

    updateDepthBox() {
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
module.exports = Depth;