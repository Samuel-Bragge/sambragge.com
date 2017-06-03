import React from 'react';
import Home from './Home';
import Work from './Work';
import Navbar from './Navbar';
import './style/normalize.css';
import './style/skeleton.css';
import './style/index.css';


export default class Portfolio extends React.Component {

    constructor(){
        super();
        this.router = {
            current:'home',
            prev:null,
            go:(page)=>{
                this.router.prev = this.router.current;
                this.router.current  = page;
                this.forceUpdate();
            }
        }
    }

    render(){

        let r;
        if(this.router.current === 'home'){
            r = (
                <div className="Portfolio">
                    <Navbar router={this.router}/>
                    <Home/>
                </div>
            );
        }else if(this.router.current === 'work'){
            r = (
                <div className="Portfolio">
                    <Navbar router={this.router}/>
                    <Work/>
                </div>
            );
        }

        return r;
    }
}
