import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import user from './myData';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App user={user}/>, document.getElementById('root'));
registerServiceWorker();
