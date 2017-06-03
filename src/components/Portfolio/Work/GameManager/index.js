import React from 'react';
import GMNav from './GMNavbar';
import Breakout from './Breakout';

export default class GameManager extends React.Component {

    constructor(){
        super();
        this.router = {
            current:'breakout',
            prev:null,
            go:(page)=>{
                this.router.prev = this.router.current;
                this.router.current = page;
                this.forceUpdate();
            }
        }
    }

    render(){
        return(
            <div className="GameManager row">
                <GMNav router={this.router}/>
                <div className="gameContainer ten columns">
                    <Breakout/>
                </div>
            </div>
        );
    }

}
