export default class Ball {
    constructor(){
        this.x = 240;
        this.y = 160;
        this.r = 10;
        this.pi = Math.PI*2;
        this.color = 'green';
        this.dx = 2;
        this.dy = -2;
    }

    draw(_){
        _.beginPath();
        _.arc(this.x, this.y, this.r, 0, this.pi);
        _.fillStyle = this.color;
        _.fill();
        _.closePath();
    }

    move(){
        this.x += this.dx;
        this.y += this.dy;
    }

    touching(obj){
        if(this.x > obj.x && this.x < obj.x+obj.w){
            return true;
        }else{
            return false;
        }
    }


}
