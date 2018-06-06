import React, {Component} from 'react';
import {connect} from 'react-redux';
import SocialDetail from "./SocialDetail";
import SocialDetailCreateForm from './SocialDetailCreateForm';
import {loadMeDetails} from '../../actions/meActions';

class Me extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: ''
        }
    }

    componentDidMount() {
        // ask for my state
        // by dispatching action LOAD_ME_DETAILS
        this.props.loadMeDetails();
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
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userDetails: state.userDetails
    }
}

function mapDispatchToProps(dispatch) {
    // todo
    return {
        loadMeDetails: () => dispatch(loadMeDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Me)