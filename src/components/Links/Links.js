import React, {Component} from 'react';
import LinksList from './LinksList';
import LinkCreateForm from './LinkCreateForm';

const uuidv4 = require('uuid/v4');

class Links extends Component {

    constructor(props) {
        super(props);

        this.state = {
            links: [
                {
                    id: 'e8956e97-e4b6-4d8a-b130-dcf8dea4980f',
                    text: 'www.google.com',
                    tags: [],
                    createdAt: '1527599546716',
                    deferByTime: '2018-06-01T08:30',
                    status: 'DONE' // DONE, OK, EXPIRED
                },
                {
                    id: 'b9912bb1-b988-45cf-9726-088a71d22e4d',
                    text: 'www.twitter.com',
                    tags: [],
                    createdAt: '1527599546716',
                    deferByTime: '2018-05-29T08:30',
                    status: 'OK'
                },
            ],
            form: {
                text: '',
                tags: '',
                deferByTime: '',
            }
        }
    }

    onSave = (data) => {
        this.setState({
            links: [...this.state.links, {...data, id: uuidv4(), createdAt: Date.now(), status: 'OK'}]
        })
    };

    onInputChange = (value, name) => {
        this.setState(() => {

            const form = {
                ...this.state.form,
                [name]: value
            };

            return {form};
        })
    };

    onLinkExpired = (id) => {
        this.setState((currentState) => {
            const links = currentState.links.map((link) => {
                if (link.id === id) {
                    link.status = 'EXPIRED';
                }
                return link;
            });
            return {links};
        }, () => {
            console.log(this.state)
        });
    };

    render() {
        return (
            <div>
                <LinkCreateForm onSave={this.onSave} {...this.state.form} onInputChange={this.onInputChange}/>
                <LinksList links={this.state.links} onLinkExpired={this.onLinkExpired}/>
            </div>
        )
    }
}

export default Links;