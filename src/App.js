import React, {Component} from 'react';
import './App.css';
import Me from './Me';
import Counter from './Counter';

class App extends Component {

    toggle = false;

    constructor(props) {
        super(props);

        this.state = {
            showCounter: true,
            count:0
        };


    }

   /* handleShowCounter = () => {
        this.setState((currentState) => {
            return {showCounter:false}
        });

        console.log(this.showCounter);
    };*/



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="logo.svg" className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome {this.props.data.firstName} {this.props.data.lastName}</h1>
                </header>
                <Me userDetails={this.props.data.details}/>

            </div>
        );
    }
}

export default App;