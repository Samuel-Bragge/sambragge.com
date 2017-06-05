import React from 'react';


export default class Body extends React.Component {
    render(){
        return(
            <div className="Body row">
                <div className="pic six columns"></div>
                <div className="bio eight columns">
                    <p>Hi, my name is Sam and I love making web apps. I am a Bay Area native and a graduate of Coding Dojo Silicon Valley. I specialize in what I call the 'MERN' stack... MongoDB, Express, React, Node. I'm continuing to grow as a developer every day and I am looking to join a great company interested in improving our world through technology. Until then I am taking freelance work. If you dream it I can build it so if you have a project in mind contact me.</p>
                </div>
            </div>
        );
    }
}
