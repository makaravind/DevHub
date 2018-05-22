import React, {Component} from 'react';
import SocialDetail from "./SocialDetail";
import SocialDetailCreateForm from './SocialDetailCreateForm';

class Me extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: ''
        }
    }

    handleFilterChange = (event) => {
        let value = event.target.value;
        this.setState(currentState => {
            return {filter: value}
        });
    };

    getFilterProfiles = () => {
        const userDetails = this.props.userDetails.details || [];
        let filteredProfiles = userDetails.filter((profile) => {
            return profile.engagement.includes(this.state.filter)
        });

        if (filteredProfiles.length === 0) filteredProfiles = [...userDetails];
        return filteredProfiles;
    };

    render() {
        return (
            <div>
                <header className="jumbotron">
                    <img src={this.props.userDetails.image} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome {this.props.userDetails.firstName}
                        {this.props.userDetails.lastName}</h1>
                </header>
                <div className="container-fluid">
                    <h1>My Social Presence</h1>
                    {/*// TODO: create provider filter */}
                    {/*<SocialDetailCreateForm/>*/}
                    <input className="form-control" type="text" value={this.state.filter}
                           placeholder="personal/professional" onChange={(e) => this.handleFilterChange(e)}/>
                    <ul className="list-group">
                        {this.getFilterProfiles().map(detail =>
                            <li key={detail.id} className="list-group-item">
                                <SocialDetail socialDetail={detail}/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Me