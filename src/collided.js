
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
        console.log("top", this.topOfSub, this.topOfBag, "bottom", this.bottomOfSub, this.bottomOfBag)
        console.log("left", this.leftOfSub, this.leftOfBag, "right", this.rightOfSub, this.rightOfBag)
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