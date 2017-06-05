export default class Bullet {
    constructor(gun){
        this.stats = {
            speed:20,
            damage:20,
        }
        this.gun = gun;
        this.h = 10;
        this.w = 10;
    }

    shoot(){
        alert("pew!");
    }
}
