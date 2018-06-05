import React, {Component} from 'react';
import {connect} from 'react-redux';
import Me from "./home/Me"
import Check from './home/check';
import Links from './Links/Links';
import Wrapper from './global/Wrapper';
import PageNotFound from './global/404';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                firstName: 'loading...'
            }
        };
    }

    componentDidMount() {
        window.API().then((data) => {
            // console.log('got data', data);
            this.setState(() => ({
                data: data
            }))
        });
    }

    render() {
        return (
            <BrowserRouter>
             <Wrapper>
                 {/*<Switch>
                     <Route exact path='/' render={() => {
                         return <Me userDetails={this.state.data}/>
                     }}/>
                     <Route path='/links' render={() => {
                         return <Links/>
                     }}/>
                     <Route component={PageNotFound}/>
                 </Switch>*/}
                 <Check check={this.props.check}/>
            </Wrapper>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        check: state.check
    }
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps) (App);