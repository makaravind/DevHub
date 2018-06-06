import React, {Component} from 'react';

class Check extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                This is a redux checker:
                {this.props.check}
                <button onClick={this.props.checkFn}>check</button>
            </div>
        )
    }
}

export default Check