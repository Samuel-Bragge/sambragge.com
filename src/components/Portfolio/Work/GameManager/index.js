import React from 'react';
import GMNav from './GMNavbar';
import GMWindow from './GMWindow';

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

        let r;
        if(this.router.current === 'breakout'){
            r = (
                <div className="GameManager row">
                    <GMNav router={this.router}/>
                    <GMWindow game="breakout"/>
                </div>
            );
        }


        return r;
    }

}
