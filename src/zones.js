const layers = require('./util/layers');


class Zones {
    constructor(gameCanvas){
        this.gameCanvas = gameCanvas
        this.zoneChange = this.zoneChange.bind(this);
        this.zoneInfo = document.createElement("div");
        this.zoneInfo.setAttribute("class", "zone-box");
        this.timeout;
        this.hideZoneInfo = this.hideZoneInfo.bind(this);
        this.displayInfo = this.displayInfo.bind(this);
        this.zoneArr = Object.values(layers.layers);
        this.currentZone = this.zoneArr[0];
        this.initialInfo();
    }

    initialInfo() {
        let container = document.getElementsByClassName("canvas-controller-container")
        container[0].appendChild(this.zoneInfo);
        this.displayInfo();
    }

    zoneChange(subDepth) {
        for(let i = 0; i < this.zoneArr.length; i++) {
            if (this.zoneArr[i].name !== this.currentZone.name) {
                let changeDepth = this.zoneArr[i].minD
                let changeDepth2 = this.zoneArr[i].maxD
                if (subDepth >= changeDepth && subDepth <= changeDepth + 5 ||
                    subDepth <= changeDepth2 && subDepth >= changeDepth2 - 5) {
                    this.currentZone = this.zoneArr[i];
                    this.displayInfo();
                    this.changeColor(this.zoneArr[i].colorId)
                }
            }
        }
    }
    displayInfo() {
        // debugger;
        let zoneName = document.createElement("h2");
        let zoneInfo = document.createElement("p");
        let headerText = document.createTextNode(this.currentZone.name);
        let paraText = document.createTextNode(`${this.currentZone.info}
         Here you will find creatures such as ${this.currentZone.creatures}`);
        zoneName.appendChild(headerText);
        zoneInfo.appendChild(paraText);
        if (this.zoneInfo.childElementCount === 0) {
            this.zoneInfo.appendChild(zoneName);
            this.zoneInfo.appendChild(zoneInfo);
        } else {
            this.zoneInfo.replaceChild(zoneName, this.zoneInfo.childNodes[0]);
            this.zoneInfo.replaceChild(zoneInfo, this.zoneInfo.childNodes[1]);
        }
        this.zoneInfo.classList.remove("hidden");
        this.timeout = setTimeout(this.hideZoneInfo, 10000);

    }

    hideZoneInfo() {
        this.zoneInfo.classList.add("hidden");
    }

    changeColor(colorId) {
        this.gameCanvas.setAttribute("class", colorId)
    }
}
module.exports = Zones;