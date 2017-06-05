import Hero from './Hero';

let getMousePos = (canvas, evt)=>{
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

export default class Game {
    constructor(canvas, on){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.canvas.height = this.ctx.canvas.parentNode.clientHeight;
        this.canvas.width = this.ctx.canvas.parentNode.clientWidth;
        this.hero = new Hero(this.ctx);
        this.canvas.addEventListener('click', (e)=>{
            this.hero.attack();
        })
        this.canvas.addEventListener('mousemove', (e)=>{
            if(on){
                let pos = getMousePos(this.canvas, e);
                this.hero.setSight({x:pos.x, y:pos.y});
            }

        });
        document.addEventListener('keydown', (e)=>{

            if(on){
                if(e.key === 'a'){
                    this.hero.controlls.left = true;
                }else if(e.key == 'd'){
                    this.hero.controlls.right = true;
                }else if(e.key == 'w'){
                    this.hero.controlls.up = true;
                }else if(e.key == 's'){
                    this.hero.controlls.down = true
                }
            }


        });
        document.addEventListener('keyup', (e)=>{
            if(on){
                if(e.key === 'a'){
                    this.hero.controlls.left = false;
                }else if(e.key === 'd'){
                    this.hero.controlls.right = false;
                }else if(e.key == 'w'){
                    this.hero.controlls.up = false;
                }else if(e.key == 's'){
                    this.hero.controlls.down = false
                }
            }
        });
    }

    loop(_){
        _.ctx.clearRect(0, 0, _.canvas.width, _.canvas.height);
        _.hero.draw();
        _.hero.move();
        requestAnimationFrame(()=>{_.loop(_)});
    }

    start(){
        let self = this;
        this.loop(self);
    }

}
