import Bullet from './Bullet';
import Sight from './Sight';

export default class Gun {

    constructor(_, hero){
        this.sight = new Sight(_, hero);
        this.chamber = [];
        this.load();
    }

    load(n){
        if(n > 12 || !n){n = 12};
        for(var i = 0; i < n; i++){
            this.chamber.push(new Bullet(this))
        }
    }

    setSight(xy){
        this.sight.set(xy);
    }

    fire(){
        if(this.chamber.length > 0){
            this.chamber.pop().shoot();
            console.log("fired a round at "+this.sight.x+","+this.sight.y, this.chamber.length+" rounds remaining.");
        }else{
            alert('chamber empty!')
        }
    }
}
