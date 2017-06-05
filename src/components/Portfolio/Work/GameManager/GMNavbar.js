import React from 'react';
import {capitalize} from './../../helperFunctions';



export default class GMNavbar extends React.Component {


    constructor(){
        super();
        this.navs = ['breakout', 'cubeshooter'];
    }


    render(){


        let navs = this.navs.map((nav, i)=>{
            if(this.props.router.current === nav){
                return <div className="gmNavItem currentPage" key={'gmNav'+i+1} id={nav} onClick={this.handleClick.bind(this)}>{capitalize(nav)}</div>
            }else{
                return <div className="gmNavItem" key={'gmNav'+i+1} id={nav} onClick={this.handleClick.bind(this)}>{capitalize(nav)}</div>
            }

        });



        return(
            <div className="GMNavbar three columns">
                {navs}
            </div>
        );
    }


    handleClick(e){
        this.props.router.go(e.target.id);
    }
}
