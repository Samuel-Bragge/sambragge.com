import {capitalize} from './../../../helperFunctions';

export default class Word {
    constructor(name, x){
        this.name = name;
        this.originalX = -x;
        this.x = -x;
        this.y = 30;
        this.c = 'white';
        this.font = '30px Courier';
        this.done = false;
    }

    draw(_){
        _.font = this.font;
        _.strokeStyle = this.c;
        _.strokeText(capitalize(this.name), this.x, this.y);
        this.x += 1;
        if(this.x > _.canvas.width){
            this.done = true;
        }
    }

    redo(){
        this.x = this.originalX;
    }
}
