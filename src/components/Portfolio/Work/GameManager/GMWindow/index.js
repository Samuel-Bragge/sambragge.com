import React from 'react';
import Breakout from './../Breakout';

export default class GMWindow extends React.Component {


    constructor(){
        super();
        this.router = {
            current:'game',
            change:()=>{
                if(this.router.current === 'game'){
                    this.router.current = 'info';
                    this.forceUpdate();
                }else{
                    this.router.current = 'game';
                    this.forceUpdate();
                }
            },
        }
    }

    render(){

        let r;
        if(this.props.game === 'breakout'){
            if(this.router.current === 'game'){
                r = (
                    <div className="GameWindow ten columns">
                        <Breakout/>
                    </div>
                );
            }else{
                r = <div className="GameWindow ten columns">
                        <p>A simple breakout clone made with ES6. Press 'p' to pause and unpause (game starts out paused). Like everything here it is a work in progress.</p>
                        <a>Click here to check out the code.</a>
                    </div>
            }
        }


        return r;
    }
}
