import React from 'react';

let capital = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
}


export default class Navbar extends React.Component {

    constructor(){
        super();
        this.navs = ['home', 'work']
    }


    render(){

        let navs = this.navs.map((nav, i)=>{
            if(this.props.router.current === nav){
                return <div className="navItem currentPage" key={'nav'+i+1} id={nav} onClick={this.handleClick.bind(this)}>{capital(nav)}</div>
            }else{
                return <div className="navItem" key={'nav'+i+1} id={nav} onClick={this.handleClick.bind(this)}>{capital(nav)}</div>
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
