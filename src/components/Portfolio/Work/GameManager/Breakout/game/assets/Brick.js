export default class Brick {
    constructor(){
        this.rowCount = 4;
        this.colCount = 9;
        this.w = 75;
        this.h = 20;
        this.padding = 10;
        this.offsetTop = 30;
        this.offsetLeft = 30;
        this.bricks = [];
        for(var c = 0; c < this.colCount;c++){
            this.bricks[c] = [];
            for(var r = 0;r < this.rowCount; r++){
                this.bricks[c][r] = {x:0, y:0, status:1};
            }
        }
    }

    draw(_){
        for(var c = 0; c < this.colCount;c++){
            for(var r = 0;r < this.rowCount; r++){
                if(this.bricks[c][r].status === 1){
                    let x = (c*(this.w+this.padding))+this.offsetLeft;
                    let y = (r*(this.h+this.padding))+this.offsetTop;
                    this.bricks[c][r].x = x;
                    this.bricks[c][r].y = y;
                    _.beginPath();
                    _.rect(x, y, this.w, this.h);
                    _.fillStyle = 'rgba(lightblue, .3)';
                    _.fill();
                    _.closePath();
                }
            }
        }
    }
}
