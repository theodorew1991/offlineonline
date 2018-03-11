import React, { Component } from 'react';
import OfflineIndicator from './offlineIndicator';
import logo from '../logo.svg';

class myHeader extends Component {

    render(){
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Offline Indicator</h1>
                <OfflineIndicator />
            </header>
        )
    }
}

export default myHeader