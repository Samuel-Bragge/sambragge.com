import React, {Component} from 'react';
import Game from './game/Game';

export default class Breakout extends Component {

    componentDidMount(){
        let canvas = document.getElementById('breakoutCanvas');
        this.game = new Game(canvas);

        this.game.start();
    }
    componentWillUnmount(){
        this.game = null;
    }


    render(){
        return(
            <div className="Game eleven columns">
                <canvas id="breakoutCanvas"/>
            </div>
        );
    }

}
