export default class ScoreBoard {
    constructor(canW){
        this.canW = canW;
        this.score = 0;
        this.lives = 3;
        this.font = '16px Arial';
        this.color = 'black';
        this.x = 8;
        this.y = 20;
    }

    draw(_){
        _.font = this.font;
        _.fillStyle = this.color;
        _.fillText('Score: '+this.score, this.x, this.y);

        _.font = "16px Arial";
        _.fillStyle = "black";
        _.fillText("Lives: "+this.lives, this.canW-65, 20);
    }



    add(type, n){
        if(type === 'score'){
            this.score += n;
        }else if(type === 'life'){
            this.lives += n;
        }
    }
    remove(type, n){
        if(type === 'score'){
            this.score -= n;
        }else if(type === 'life'){
            this.lives -= n;
        }
    }

    win(){
        alert("You won with a score of "+this.score+"!");
        document.location.reload();
    }
    lose(){
        alert('Game Over');
        document.location.reload();
    }
}
