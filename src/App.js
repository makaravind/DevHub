import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Me from "./Me";
import ClassComponentBasics from "./ClassComponentBasics";
import Counter from "./Counter";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
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
        }
        };
    }

    handleShowCounter = () => {
        console.log('handleShowCounter');
        this.setState(currentState => {
            return {showCounter: false}
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={this.state.data.image} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome {this.state.data.firstName}
                        {this.state.data.lastName}</h1>
                </header>
                <Me userDetails={this.state.data.details}/>
            </div>
        );
    }
}

export default App;