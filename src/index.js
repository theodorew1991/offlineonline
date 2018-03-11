import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


if (navigator.storage && navigator.storage.persist) 
  navigator.storage.persisted().then(persistent=>{
    if (persistent)
      console.log("Storage will not be cleared except by explicit user action");
    else
      console.log("Storage may be cleared by the UA under storage pressure.");
  });
  
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
