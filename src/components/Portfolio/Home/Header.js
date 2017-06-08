import Scroller from './Scroller';

import React from 'react';


export default class Header extends React.Component {
    render(){
        return(
            <div className="Header row">
                <Scroller/>
                <div className="title">
                    <h1>Samuel Bragge</h1>
                    <h2>Full Stack Web Developer</h2>
                    <h3>sambragge@gmail.com</h3>
                </div>
            </div>
        );
    }
}
