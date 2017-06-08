import React from 'react';
import GameManager from './GameManager';
import AppPreview from './AppPreview';

export default class Work extends React.Component {
    render(){

        let src = require("../images/gitBattlePic.png");

        return(
            <div className="Work">
                <h1>My Work</h1>

                <h2>Apps</h2>
                <AppPreview
                    name="Github Battle"
                    src={src}
                    href="https://github-battles-6aa71.firebaseapp.com/"
                    desc="An app that uses Githubs api to view popular repos and battle your friends to see who has the stronger account."
                    github="https://github.com/Samuel-Bragge/Github-Battle"/>

                <h2>Games</h2>
                <GameManager/>
            </div>
        );
    }
}
