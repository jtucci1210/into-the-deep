
class Collided {
    constructor(garbage, submarine){
        this.garbage = garbage;
        this.submarine = submarine;
        this.collectedTrash = 0;
        this.topOfSub = this.submarine.y;
        this.bottomOfSub = this.submarine.y + this.submarine.height;
        this.leftOfSub = this.submarine.x;
        this.rightOfSub = this.submarine.x + this.submarine.width;
        this.topOfBag = this.garbage.dy;
        this.bottomOfBag = this.garbage.dy + this.garbage.imgHeight;
        this.leftOfBag = this.garbage.randomX;
        this.rightOfBag = this.garbage.randomX + this.garbage.imgWidth;
    }
    collision() {
        // debugger;
        if (
            (this.topOfSub === this.bottomOfBag && this.rightOfSub === this.leftOfBag) ||
            (this.topOfSub === this.bottomOfBag && this.rightOfBag === this.leftOfSub) ||
            (this.bottomOfSub === this.topOfBag && this.rightOfBag === this.leftOfSub) ||
            (this.bottomOfSub === this.topOfBag && this.leftOfBag === this.rightOfSub)
            ) {
            this.collectedTrash += 1;
            console.log(this.collectedTrash)
            return true;
        } else { return false;}
    }
}
module.exports = Collided;