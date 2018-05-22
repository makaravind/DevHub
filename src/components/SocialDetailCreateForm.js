import React, {Component} from 'react';

class SocialDetailCreateForm  extends  Component {

    constructor(props) {
        super(props);

        this.state = {
            provider: '',
            username: '',
            link: '',
            engagement: '',
            error: ''
        }
    }

    validate = (currentState) => {
        if(currentState.engagement.trim().toLocaleLowerCase() !== 'personal'
            && currentState.engagement.trim().toLocaleLowerCase() !== 'professional') {
            this.setState(() => {
                console.log('errror ', currentState.engagement);
                return {error:'personal/professional'}
            });
        } else {
            this.setState(() => {
                console.log('error gone');
                return {error:''}
            });
        }
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        }, (currentState) => {
            // on succcessful updation
            this.validate(this.state);
        });
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('click working...', this.state)
    };

    render() {
        return (
            <div>
                <form>
                    <input className="form-control" value={this.state.provider} onChange={event => this.handleInputChange(event)} type="text" name="provider" placeholder="provider"/>
                    <input className="form-control" value={this.state.username} onChange={event => this.handleInputChange(event)} type="text" name="username" placeholder="username"/>
                    <input className="form-control" value={this.state.link} onChange={event => this.handleInputChange(event)} type="text" name="link" placeholder="link"/>
                    <input className="form-control" value={this.state.engagement} onChange={event => this.handleInputChange(event)} type="text" name="engagement" placeholder="personal/professional"/>
                    <button className="btn btn-outline-primary" type="submit" onClick={event => this.handleOnSubmit(event)}>create</button>
                </form>
                {this.state.error}
            </div>
        )
    }
}

export default SocialDetailCreateForm