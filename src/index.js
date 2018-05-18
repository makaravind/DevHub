import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import data from './data.json';

let profileData = {
	firstName: 'Aravind',
	lastName: 'M',
	image: '',
	details: [
		{
			provider: 'facebook',
			username: 'mak11195',
			engagement: ['personal'],
			link: ''
		},
		{
			provider: 'github',
			username: 'makaravind',
			engagement: ['professional'],
			link: 'https://github.com/makaravind'
		},
		{
			provider: 'gmail',
			username: 'aravindmetku@gmail.com',
			engagement: ['professional', 'personal'],
		},
		{
			provider: 'youtube',
			channel: 'amyourmove',
			url: 'youtube.com/c/amyourmove',
			engagement: ['professional'],
		},
		{
			provider: 'wordpress',
			type: 'blog',
			url: 'https://maravindblog.wordpress.com',
			engagement: ['professional'],
		}
	]
}

let keys = Object.keys(profileData);

ReactDOM.render(<App data={profileData}/>, document.getElementById('root'));

registerServiceWorker();

/* Paul Note - In the above, I am passing data the from this main component (or just thid index.js file) to the App component  by the part
<App data={window.profileData}/>

So in App component, I will access this data with the variable 'data' which is also called state

 */
