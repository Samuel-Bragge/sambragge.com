import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './style/normalize.css';
import './style/skeleton.css';
import './style/index.css';

export default class Portfolio extends React.Component {
    render(){
        return(
            <div className="Portfolio container">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}
