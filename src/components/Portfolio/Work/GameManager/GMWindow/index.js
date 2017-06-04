import React from 'react';
import Breakout from './../Breakout';
import Nav from './Nav';
export default class GMWindow extends React.Component {


    constructor(){
        super();
        this.router = {
            current:'game',
            go:(page)=>{
                this.router.current = page;
                this.forceUpdate();
            },
        }
    }

    render(){

        let r;
        if(this.props.game === 'breakout'){
            if(this.router.current === 'game'){
                r = (
                    <div className="GameWindow ten columns">
                        <Nav router={this.router}/>
                        <Breakout/>
                    </div>
                );
            }else{
                r = <div className="GameWindow ten columns">
                        <Nav router={this.router}/>
                        <div className="infoWrapper eleven columns">
                            <p>A simple breakout clone made with ES6. Press 'p' to pause and unpause (game starts out paused). Like everything here it is a work in progress.</p>
                            <a href="https://github.com/Samuel-Bragge/sambragge.com/tree/master/src/components/Portfolio/Work/GameManager/Breakout">Click here to check out the code.</a>
                        </div>
                    </div>
            }
        }


        return r;
    }
}
