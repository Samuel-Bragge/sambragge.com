import Gun from './Gun';
import {randomColor} from './../../../../helperFunctions';




export default class Hero {
    constructor(_){
        this._ = _;
        this.x = 250;
        this.y = 250;
        this.w = 25;
        this.h = 25;
        this.c = randomColor();
        this.stats = {
            speed:5
        }
        this.gun = new Gun(_, this);
        this.controlls = {
            up:false,
            right:false,
            down:false,
            left:false,
        }
    }

    draw(){
        this._.beginPath();
        this._.rect(this.x, this.y, this.w, this.h);
        this._.strokeStyle = this.c;
        this._.stroke();
        this.gun.sight.set();
        this._.closePath();
    }

    setSight(xy){
        this.gun.setSight(xy);
    };


    attack(){
        this.gun.fire();
    }

    move(){
        let c = this.controlls;
        let s = this.stats.speed;

        if(c.up && this.y > 0){
            this.y -= s;
        }
        if(c.right && this.x+this.w<this._.canvas.width){
            this.x += s;
        }
        if(c.down && this.y+this.h<this._.canvas.height){
            this.y += s;
        }
        if(c.left && this.x > 0){
            this.x -= s;
        }
    }
}
