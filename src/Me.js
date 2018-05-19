import React, {Component} from 'react';
import SocialDetail from "./SocialDetail";

class Me extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: 'test',
            filteredProfiles: this.props.userDetails
        }
    }

    handleFilterChange = (event) => {
        let value = event.target.value;
        this.setState(currentState => {
            return {filter: value}
        });
    };

    filterSocialDetailsByEngagement = ({userDetails}) => {
        let filteredProfiles = userDetails.filter((profile) => {
            return profile.engagement.includes(this.state.filter)
        });

        if (filteredProfiles.length === 0) filteredProfiles = [...userDetails];
        return filteredProfiles;
    };

    changeFilteredProfiles = () => {
        this.setState((currentState, currentProps) => {
            return {filteredProfiles: this.filterSocialDetailsByEngagement(currentProps)}
        })
    };

    render() {
        return (
            <div>
                <h1>Social Presence</h1>
                <input type="text" value={this.state.filter} onChange={(e) => this.handleFilterChange(e)}/>
                <button onClick={this.changeFilteredProfiles}>Search</button>
                <ul>
                    {this.state.filteredProfiles.map(detail =>
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