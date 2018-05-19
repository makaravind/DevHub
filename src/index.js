import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.data = {
    firstName: 'Aravind',
    lastName: 'M',
    image: '',
    details: [
        {
            id:1,
            provider: 'facebook',
            username: 'mak11195',
            engagement: ['personal'],
            link: ''
        },
        {
            id:2,
            provider: 'github',
            username: 'makaravind',
            engagement: ['professional'],
            link: 'https://github.com/makaravind'
        },
        {
            id:3,
            provider: 'gmail',
            username: 'aravindmetku@gmail.com',
            engagement: ['professional', 'personal'],
        },
        {
            id:4,
            provider: 'youtube',
            channel: 'amyourmove',
            url: 'youtube.com/c/amyourmove',
            engagement: ['professional'],
        },
        {
            id:5,
            provider: 'wordpress',
            type: 'blog',
            url: 'https://maravindblog.wordpress.com',
            engagement: ['professional'],
        }
    ]
};
ReactDOM.render(<App data={window.data}/>, document.getElementById('root'));
