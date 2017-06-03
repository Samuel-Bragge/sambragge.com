import Scroller from './Scroller';

import React from 'react';


export default class Header extends React.Component {
    render(){
        return(
            <div className="Header row">
                <Scroller/>
                <h1>Samuel Bragge</h1>
                <h2>Full Stack Web Developer</h2>
            </div>
        );
    }
}
