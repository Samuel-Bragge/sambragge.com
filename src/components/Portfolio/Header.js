import Scroller from './Scroller';

import React from 'react';


export default class Header extends React.Component {
    render(){
        return(
            <div className="Header row">
                <Scroller/>
                <div className="github four columns"><a href="https://github.com/Samuel-Bragge"><img src={require('./images/github.png')} /></a></div>
                <div className="linkedin four columns"><a href="https://www.linkedin.com/in/samuel-bragge/"><img src={require('./images/linkedin.png')} /></a></div>
                <div className="googleplus four columns"><a href="https://plus.google.com/+SamuelBragge"><img src={require('./images/googleplus.png')} /></a></div>

                <p className="phoneNumber u-pull-left">650-773-7190</p>
                <p className="email u-pull-right">sambragge@gmail.com</p>
            </div>
        );
    }
}