import React from 'react';
import propTypes from 'prop-types';

export default class AppPreview extends React.Component {
    render(){
        console.log(this.props);
        return(
            <div className="AppPreview">
                <div className="image">
                    <a href={this.props.href}>
                        <img src={this.props.src} alt={this.props.name+' picture'}/>
                    </a>
                </div>
                <div className="description">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

AppPreview.propTypes = {
    src:propTypes.string.isRequired,
    href:propTypes.string.isRequired,
    desc:propTypes.string.isRequired,
    name:propTypes.string.isRequired
}
