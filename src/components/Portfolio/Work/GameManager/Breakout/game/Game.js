import Ball from './assets/Ball';
import Paddle from './assets/Paddle';
import Brick from './assets/Brick';
import ScoreBoard from './assets/ScoreBoard';

export default class Game {

    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.canvas.height = this.ctx.canvas.parentNode.clientHeight;
        this.canvas.width = this.ctx.canvas.parentNode.clientWidth;
        this.ball = new Ball();
        this.paddle = new Paddle(this.canvas.width, this.canvas.height);
        this.brick = new Brick();
        this.scoreboard = new ScoreBoard(this.canvas.width);
        this.paused = true;
        this.rightPressed = false;
        this.leftPressed = false;
        this.canvas.style.cursor = 'none';


        document.addEventListener('keydown', (e)=>{
            if(e.key === 'p'){
                this.pause();

            }else if(e.keyCode === 39){
                this.rightPressed = true;
            }else if(e.keyCode === 37){
                this.leftPressed = true;
            }
        });
        document.addEventListener('keyup', (e)=>{
            if(e.keyCode === 39){
                this.rightPressed = false;
            }else if(e.keyCode === 37){
                this.leftPressed = false;
            }
        });
        document.addEventListener('mousemove', (e)=>{
            var relativeX = e.clientX - this.canvas.offsetLeft;
            if(relativeX > 0 && relativeX < this.canvas.width){
                this.paddle.x = relativeX-this.paddle.w;
            }
        });
    }

    tick(self){

        self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
        self.ball.draw(self.ctx);
        self.ball.move();
        self.paddle.draw(self.ctx);
        self.brick.draw(self.ctx);
        self.scoreboard.draw(self.ctx);
        self.physics(self);
        if(!self.paused){
            requestAnimationFrame(()=>{self.tick(self)});
        }
    }

    pause(){
        if(this.paused){
            this.paused = false;
            this.start();
        }else{
            this.paused = true;
        }
    }

    start(){
        let self = this;
        this.tick(self);
    }

    redo(){
        this.ball.x = this.canvas.width/2;
        this.ball.y = this.canvas.height-30;
        this.ball.dx = 2;
        this.ball.dy = -2;
        this.paddle.x = (this.canvas.width-this.paddle.w)/2;
    }

    physics(self){

        if(self.ball.x+self.ball.dx < self.ball.r || self.ball.x+self.ball.dx > self.canvas.width-self.ball.r){
            self.ball.dx = -self.ball.dx;
        }
        if(self.ball.y+self.ball.dy < self.ball.r){
            self.ball.dy = -self.ball.dy
        } else if(self.ball.y+self.ball.dy > self.canvas.height-self.ball.r){
            if(self.ball.touching(self.paddle)){
                self.ball.dy = -self.ball.dy

            }else{
                self.scoreboard.remove('life', 1);
                if(!self.scoreboard.lives){
                    self.scoreboard.lose();
                }else{
                    self.redo();
                }
            }
        }
        if(self.rightPressed && self.paddle.x+self.paddle.w<self.canvas.width){
            self.paddle.x += 5;
        }
        if(self.leftPressed && self.paddle.x > 0){
            self.paddle.x -= 5;
        }

        for(var c = 0;c<self.brick.colCount;c++){
            for(var r = 0;r<self.brick.rowCount;r++){
                let b = self.brick.bricks[c][r];
                if(self.ball.x > b.x && self.ball.x < b.x+self.brick.w && self.ball.y > b.y && self.ball.y < b.y+self.brick.h && b.status === 1){
                    self.ball.dy = -self.ball.dy;
                    b.status = 0;
                    self.scoreboard.add('score', 1);
                    if(self.scoreboard.score === self.brick.colCount*self.brick.rowCount){
                        self.scoreboard.win();
                    }
                }
            }
        }
    }


}
