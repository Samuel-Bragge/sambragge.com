import React from 'react';


export default class Footer extends React.Component {
    render(){
        return(
            <div className="Footer row">
                <div className="github four columns"><a href="https://github.com/Samuel-Bragge"><img src={require('./../images/github.png')} alt="github"/></a></div>
                <div className="linkedin four columns"><a href="https://www.linkedin.com/in/samuel-bragge/"><img src={require('./../images/linkedin.png')} alt="linkedin"/></a></div>
                <div className="googleplus four columns"><a href="https://plus.google.com/+SamuelBragge"><img src={require('./../images/googleplus.png')} alt="googleplus"/></a></div>
            </div>
        );
    }
}
