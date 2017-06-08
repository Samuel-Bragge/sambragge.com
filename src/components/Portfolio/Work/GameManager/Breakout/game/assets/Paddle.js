import {randomColor} from './../../../../../helperFunctions';

export default class Paddle {
    constructor(canW, canH){
        this.canW = canW;
        this.canH = canH;
        this.h = 10;
        this.w = 75;
        this.x = (canW-this.w)/2;
        this.y = canH-this.h;
        this.c = randomColor();
    }

    draw(_){
        _.beginPath();
        _.rect(this.x, this.y, this.w, this.h);
        _.fillStyle = this.c;
        _.fill();
        _.closePath();
    }
}
