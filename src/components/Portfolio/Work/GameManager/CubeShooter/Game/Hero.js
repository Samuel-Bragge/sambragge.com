import Gun from './Gun';

let randomColor = ()=>{
    const rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    var color = '#'  //this is what we'll return!
    for(var i = 0; i < 6; i++)
    {
 	  var x = Math.floor((Math.random()*16))
 	  color += rgb[x];
    }
    return color;
}



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
