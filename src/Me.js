import React, {Component} from 'react';
import SocialDetails from "./SocialDetails";

class Me extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: '',
            filteredProfiles: []
        }
    }

    changeFilteredProfiles = (data) => {
        console.log(data);
        let filteredProfiles = this.props.userDetails.filter((profile) => {
            if (profile.engagement.indexOf(data) !== -1) {
                return this.props.userDetails;
            }
        });

        this.setState((currentState) => {
            return {filteredProfiles: filteredProfiles}
        })

    };


    render() {
        let Personal = "personal";
        let Professional = "professional";

        return (
            <div>
                <h1>Social Presence</h1>
                <div>
                    <p>Filter By : </p>
                    <button type="button" onClick={() => this.changeFilteredProfiles(Personal)}>Personal</button>
                    <button type="button" onClick={() => this.changeFilteredProfiles(Professional)}>Professional</button>
                    <ul>
                        {this.state.filteredProfiles.map((detail) => <li key={detail.id}>

                            <SocialDetails socialDetails={detail}/></li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Me;