import Word from './Word';

export default class _Scroller {
    constructor(_){
        this._ = _;
        this._.canvas.width = this._.canvas.parentNode.clientWidth;
        this._.canvas.height = this._.canvas.parentNode.clientHeight;
        this.words = [];
        this.init();
    }

    init(){
        const spacing = 300;
        const words = ['Javascript','Socket.io','React.js','HTML','CSS','Sass','Node.js','Express.js','Angular.js','Python','Django','Swift','MongoDB','MySQL','Canvas','ES6','Middleware','Deployment','Design']
        for(var i = 0; i < words.length; i++){
            this.words.push(new Word(words[i], spacing*i))
        }
    }

    tick(self){
        self._.clearRect(0, 0, self._.canvas.width, self._.canvas.height);
        self._.beginPath();
        for(var i = 0; i < self.words.length; i++){
            self.words[i].draw(self._)
        }
        self._.closePath();
        if(self.isDone()){
            self.redo();
        }
    }

    isDone(){
        for(var i = 0; i < this.words.length; i++){
            if(!this.words[i].done){
                return false;
            }
        }
        return true;
    }

    redo(){
        for(var i = 0; i < this.words.length; i++){
            this.words[i].redo();
            this.words[i].done = false;
        }
    }

    start(){
        let self = this;
        setInterval(()=>{self.tick(self)});
    }



}
