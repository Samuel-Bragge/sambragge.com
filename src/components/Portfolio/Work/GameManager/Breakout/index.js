import React, {Component} from 'react';
import Game from './game/Game';

export default class Breakout extends Component {

    componentDidMount(){
        this.on = true;
        let canvas = document.getElementById('breakoutCanvas');
        let game = new Game(canvas, this.on);
        game.start();
    }
    componentWillUnmount(){
        this.on = false;
    }


    render(){
        return(
            <div className="Game eleven columns">
                <canvas id="breakoutCanvas"/>
            </div>
        );
    }

}
