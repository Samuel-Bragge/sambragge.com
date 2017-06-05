import React from 'react';
import GameManager from './GameManager';

export default class Work extends React.Component {
    render(){
        return(
            <div className="Work">
                <h1>My Work</h1>
                <h2>Games</h2>
                <GameManager/>
            </div>
        );
    }
}
