import React, {Component} from 'react';
import SocialDetail from "./SocialDetail";

class Me extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: 'text',
            filteredProfiles: this.props.userDetails
        }
    }

    handleFilterChange = (e) => {
        // console.log(e);
        let value = e.target.value;
        this.setState((currentState) => {
            return {filter: value}
        })
    };

    changeFilteredProfiles = () => {
        let filteredProfiles = this.props.userDetails.filter((profile) =>  {
            if (profile.engagement.includes(this.state.filter)) return this.props.userDetails;
        });

        this.setState((currentState) => {
            return {filteredProfiles: filteredProfiles}
        })

    };


    render() {

        return (
            <div>
                <h1>Social Presence</h1>
                <input name="filter" type="text" value={this.state.filter} onChange={(event) => this.handleFilterChange(event)}/>
                <button onClick={this.changeFilteredProfiles}>Search</button>
                <ul>
                    {this.state.filteredProfiles.map((detail) => <li key={detail.id}>

                        <SocialDetail socialDetail={detail}/></li>)}
                </ul>
            </div>
        )            
    }

}

export default Me;