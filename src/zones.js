const layers = require('./util/layers');


class Zones {
    constructor(){
        this.zoneChange = this.zoneChange.bind(this);
        this.zoneInfo = document.createElement("div");
        this.zoneInfo.setAttribute("id", "zone-box");
    }

    zoneChange(subDepth) {
        let zoneArr = Object.values(layers.layers);
        for(let i = 0; i < zoneArr.length; i++) {
            let changeDepth = zoneArr[i].minD
            if (subDepth >= changeDepth && subDepth <= changeDepth + 5) {
                this.displayInfo(i)
            }
        }
    }
    displayInfo(i) {
        let container = document.getElementsByClassName("canvas-controller-container")
        container[0].appendChild(this.zoneInfo);
        console.log(i)
    }
}
module.exports = Zones;