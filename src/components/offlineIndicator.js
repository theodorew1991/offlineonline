import React, { Component } from 'react';
import { Offline, Online } from 'react-detect-offline';

class OfflineIndicator extends Component {
    
    render(){
        return(
            <div>
            <Online>Only shown when you're online</Online>
            <Offline>Only shown offline</Offline>
          </div>
        )
    }
}

export default OfflineIndicator