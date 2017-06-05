import React from 'react';
import GMNav from './GMNavbar';
import GMWindow from './GMWindow';

export default class GameManager extends React.Component {

    constructor(){
        super();
        this.router = {
            current:'breakout',
            go:(page)=>{
                this.router.current = page;
                this.forceUpdate();
            }
        }
    }

    render(){
        return (
            <div className="GameManager row">
                <GMNav router={this.router}/>
                <GMWindow game={this.router.current}/>
            </div>
        );
    }
}
