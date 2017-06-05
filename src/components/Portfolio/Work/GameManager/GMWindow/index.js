import React from 'react';
import Breakout from './../Breakout';
import CubeShooter from './../CubeShooter';
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
        // Breakout
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
        // Cubeshooter
        }else if(this.props.game === 'cubeshooter'){
            if(this.router.current === 'game'){
                r = (
                    <div className="GameWindow ten columns">
                        <Nav router={this.router}/>
                        <CubeShooter/>
                    </div>
                );
            }else{
                r = <div className="GameWindow ten columns">
                        <Nav router={this.router}/>
                        <div className="infoWrapper eleven columns">
                            <p>A stupid little game I'm working on. The eventual goal is to have shooting and multiplayer functionality. Move player with 'w, a, s, d' and move sight with mouse.</p>
                        </div>
                    </div>
            }
        }


        return r;
    }
}
