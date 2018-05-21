import React, {Component} from 'react';
import Me from "./Me"
import LifeHooker from '../learn/LifeHooker';
import Wrapper from './Wrapper';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    render() {
        return (
            <Wrapper>
                <Me userDetails={this.state.data}/>
            </Wrapper>
        );
    }
}

export default App;