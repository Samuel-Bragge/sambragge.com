import React from 'react';
import Game from './Game';


export default class CubeShooter extends React.Component {



    componentDidMount(){
        this.on = true;
        let canvas = document.getElementById('canvas');
        let game = new Game(canvas, this.on);
        game.start();
    }
    componentWillUnmount(){
        this.on = false;
    }


    render() {
        return (
          <div className="Game eleven columns">
            <canvas id="canvas"></canvas>
          </div>);
        }
}
