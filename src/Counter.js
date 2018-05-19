import React, {Component} from 'react';


class Counter extends Component {

    constructor(props) {
        super(props);


        this.state = {
            count: 0
        };

        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement = () => {
        this.setState((currentState) => {
            return {count: currentState.count + 1};
        });
        console.log('handleIncrement', this.state.count);
    };

    handleAutoIncrement = (event) => {
        console.log('handleAutoIncrement',event);

        setInterval(() =>{
            this.setState((currentState) => {
                return {count: currentState.count + 1};
            });
        }, 1000);
    };
    handleAutoDestory = (event) => {
        console.log('handleAutoDestroy',event);

    }

    render() {
        return (
            <div>
                <strong>{this.state.count}</strong>
                <button onClick={this.handleIncrement}>Increment</button>
                <button>Decrement</button>
                <button onClick={(e) => this.handleAutoIncrement(e)}>Auto</button>
            </div>
        )
    };
}

export default Counter
