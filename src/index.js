import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import user from './user.json';
ReactDOM.render(<App user={user}/>, document.getElementById('root'));
registerServiceWorker();