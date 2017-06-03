import React from 'react';
import {capitalize} from './helperFunctions';



export default class Navbar extends React.Component {

    constructor(){
        super();
        this.navs = ['home', 'work']
    }


    render(){

        let navs = this.navs.map((nav, i)=>{
            if(this.props.router.current === nav){
                return <div className="navItem currentPage" key={'nav'+i+1} id={nav} onClick={this.handleClick.bind(this)}>{capitalize(nav)}</div>
            }else{
                return <div className="navItem" key={'nav'+i+1} id={nav} onClick={this.handleClick.bind(this)}>{capitalize(nav)}</div>
            }
        });


        return(
            <div className="Navbar row">
                {navs}
            </div>
        );
    }

    handleClick(e){
        console.log("click working");
        let r = this.props.router;
        console.log("router is ", r);
        console.log("e.target.id is", e.target.id);
        if(e.target.id === 'home'){
            r.go('home');
        }else if(e.target.id === 'work'){
            r.go('work');
        }

    }
}
