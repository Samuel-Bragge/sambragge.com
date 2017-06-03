import React from 'react';
import _Scroller from './_Scroller';

export default class Scroller extends React.Component {


    componentDidMount(){
        let scroller = new _Scroller(document.getElementById('canvas').getContext('2d'));
        scroller.start();
    }

    render(){
        return(
            <div className="Scroller">
                <canvas id="canvas"></canvas>
            </div>
        );
    }
}
