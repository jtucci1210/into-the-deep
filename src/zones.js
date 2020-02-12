const layers = require('./util/layers');


class Zones {
    constructor(gameCanvas){
        this.gameCanvas = gameCanvas
        this.zoneChange = this.zoneChange.bind(this);
        this.zoneInfo = document.createElement("div");
        this.zoneInfo.setAttribute("id", "zone-box");
    }

    zoneChange(subDepth) {
        let zoneArr = Object.values(layers.layers);
        for(let i = 0; i < zoneArr.length; i++) {
            let changeDepth = zoneArr[i].minD
            let changeDepth2 = zoneArr[i].maxD
            if (subDepth >= changeDepth && subDepth <= changeDepth + 5 ||
                subDepth <= changeDepth2 && subDepth >= changeDepth2 - 5) {
                this.displayInfo(i);
                this.changeColor(zoneArr[i].colorId)
            }
        }
    }
    displayInfo(i) {
        let container = document.getElementsByClassName("canvas-controller-container")
        container[0].appendChild(this.zoneInfo);
    }

    changeColor(colorId) {
        this.gameCanvas.setAttribute("class", colorId)
    }
}
module.exports = Zones;