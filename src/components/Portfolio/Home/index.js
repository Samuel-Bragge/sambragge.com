import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Home extends React.Component {
    
    render(){
        return(
            <div className="Home">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}
