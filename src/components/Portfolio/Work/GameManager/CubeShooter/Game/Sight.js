export default class Sight {
    constructor(_, hero){
        this._ = _;
        this.hero = hero;
        this.x = 0;
        this.y = 0;
        this.r = 10;
    }

    set(xy){
        if(!xy){
            this._.moveTo(this.hero.x+this.hero.w/2, this.hero.y+this.hero.h/2);
            if(this.x < 0){
                this.x = 0;
            }else if(this.x > this._.canvas.width){
                this.x = this._.canvas.width;
            }else if(this.y < 0){
                this.y = 0;
            }else if(this.y > this._.canvas.height){
                this.y = this._.canvas.height;
            }
            this._.lineTo(this.x, this.y);
            this._.arc(this.x, this.y, this.r, 0, Math.PI*2);
            this._.strokeStyle = this.hero.c;
            this._.stroke();
        }else{
            this.x = xy.x;
            this.y = xy.y;
        }

    }




}
