
class Collided {
    constructor(garbage, submarine){
        this.garbage = garbage;
        this.submarine = submarine;
        this.collectedTrash = 0;

    }
    centerPoint(object, distArr) {
        let xCenter = distArr[0] + object.x;
        let yCenter = distArr[1] + object.y;
        return [xCenter, yCenter];
    }

    distanceFrom(object) {
        let xDistanceFromCenter = Math.round(object.width / 2);
        let yDistanceFromCenter = Math.round(object.height / 2);
        return [xDistanceFromCenter, yDistanceFromCenter];
    }

    distanceBetween(centerPointObj1, centerPointObj2) {
       let distance = Math.abs(centerPointObj1 - centerPointObj2);
       return distance;
    }

    collision() {
        let subVectors = this.distanceFrom(this.submarine);
        let bagVectors = this.distanceFrom(this.garbage);
        let subCenter = this.centerPoint(this.submarine, subVectors);
        let bagCenter = this.centerPoint(this.garbage, bagVectors);
        
        if (this.distanceBetween(subCenter[0], bagCenter[0]) < (subVectors[0] + bagVectors[0])*0.8 && 
            this.distanceBetween(subCenter[1], bagCenter[1]) < (subVectors[1] + bagVectors[1])*.8) {
            this.collectedTrash += 1;
            return true;
        } else { return false}
    }
}
module.exports = Collided;