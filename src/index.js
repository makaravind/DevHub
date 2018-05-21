import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';


window.API = () => {
    const data = {
        firstName: 'Aravind',
        lastName: 'M',
        image: '',
        details: [
            {
                id: 1,
                provider: 'facebook',
                username: 'mak11195',
                engagement: ['personal'],
                link: ''
            },
            {
                id: 2,
                provider: 'github',
                username: 'makaravind',
                engagement: ['professional'],
                link: 'https://github.com/makaravind'
            },
            {
                id: 3,
                provider: 'gmail',
                username: 'aravindmetku@gmail.com',
                engagement: ['professional', 'personal'],
            },
            {
                id: 4,
                provider: 'linkedin',
                username: 'aravindm01',
                link: 'https://www.linkedin.com/in/aravindm01/',
                engagement: ['professional'],
            },
            {
                id: 5,
                provider: 'youtube',
                username: 'amyourmove',
                link: 'youtube.com/c/amyourmove',
                engagement: ['professional'],
            },
            {
                id: 6,
                provider: 'wordpress',
                username: 'wordpress',
                type: 'blog',
                link: 'https://maravindblog.wordpress.com',
                engagement: ['professional'],
            }
        ]
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
    })

};
ReactDOM.render(<App/>, document.getElementById('root'));
