import React, {Component} from 'react';
import SocialDetail from "./SocialDetail";

class Me extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: 'test'
        }
    }

    handleFilterChange = (event) => {
        let value = event.target.value;
        this.setState(currentState => {
           return {filter: value}
        });
    };

    render() {
        return (
            <div>
                <h1>Social Presence</h1>
                <input type="text" value={this.state.filter} onChange={(e) => this.handleFilterChange(e)}/>
                <ul>
                    {this.props.userDetails.map(detail =>
                        <li key={detail.id}>
                            <SocialDetail socialDetail={detail}/>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Me