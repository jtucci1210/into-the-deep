
class Submarine {
    constructor(canvasCtx){
        this.canvasCtx = canvasCtx;
        this.drawSubmarine();

    }
    drawSubmarine () {
        let img = new Image();
        img.src = "./images/submarine.png";
        img.onload = () => (
        this.canvasCtx.drawImage(img, 200, 200, 100, 100));
    
    }
        
}
module.exports = Submarine;