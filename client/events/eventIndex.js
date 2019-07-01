import React from 'react';
import ReactDOM from 'react-dom';
import '../core/Menu'
import './index.css';
import eventApp from './eventApp';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<eventApp/>, {cityEvent});
registerServiceWorker();