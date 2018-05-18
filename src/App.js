import React, {Component} from 'react';
import './App.css';
import Me from "./Me";

class App extends Component {

    toggle = false;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={this.props.data.image} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome {this.props.data.firstName}
                        {this.props.data.lastName}</h1>
                </header>
                <Me userDetails={this.props.data.details}/>
            </div>
        );
    }
}

export default App;