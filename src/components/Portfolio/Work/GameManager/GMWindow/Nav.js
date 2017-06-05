import React from 'react';

export default class Nav extends React.Component {

    render(){

        let game = (
            this.props.router.current === 'game' ? <div className="gameBtn currentPage" id="game" onClick={this.handleClick.bind(this)}>G<br/>a<br/>m<br/>e</div>:<div className="gameBtn" id="game" onClick={this.handleClick.bind(this)}>G<br/>a<br/>m<br/>e</div>
        );
        let info = (
            this.props.router.current === 'info' ? <div className="infoBtn currentPage" id="info" onClick={this.handleClick.bind(this)}>I<br/>n<br/>f<br/>o</div>:<div className="infoBtn" id="info" onClick={this.handleClick.bind(this)}>I<br/>n<br/>f<br/>o</div>
        );



        return(
            <div className="Nav one column">
                {game}
                {info}
            </div>
        );
    }


    handleClick(e){
        this.props.router.go(e.target.id);
    }
}
