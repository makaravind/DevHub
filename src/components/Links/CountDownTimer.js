import React, {Component} from 'react';
import Moment from 'react-moment';

class CountDownTimer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            x: 0
        }
    }

    componentDidMount() {
        var propsTimeDate = new Date(this.props.time);
        this.intervalId = setInterval(() => {

            if (propsTimeDate.getTime() <= Date.now()) {
                this.props.onLinkExpired(this.props.id);
                clearInterval(this.intervalId);
            }
            else {
                this.setState((currentState) => {
                    return {x: currentState.x + 1}
                }, () => {
                    // console.log(this.state)
                })
            }
        }, 6000);
        // console.log('timer ', this.intervalId);
    }

    render() {
        return (
            <small>
                <Moment subtract={{hours: this.state.x}} format="MM/DD HH:MM:SS">
                    {this.props.time}
                </Moment>
            </small>
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

}

export default CountDownTimer