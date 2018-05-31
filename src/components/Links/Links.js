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
            },
            isEditing: false
        }
    }

    onSave = () => {
        if (this.state.isEditing) {
            this.setState({
                links: this.modifyLinkItem(this.state.form),
                isEditing: false
            })
        } else {
            this.setState({
                links: this.appendNewLinkItem(this.state.form)
            })
        }
    };

    modifyLinkItem = (data) => {
        return this.state.links.map(link => {
            /*
            // no ES6
            if(link.id === data.id) {
                link.text = data.text;
                link.deferByTime = data.deferByTime;
                link.tags = data.tags
            }
            return link;
            */
            // with ES6
            if(link.id === data.id) return {...link, ...data};
            return link;
        })
    };

    appendNewLinkItem = (data) => {
        return [...this.state.links, {...data, id: uuidv4(), createdAt: Date.now(), status: 'OK'}];
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

    onEdit = (linkInfo) => {
        this.setState(() => {
            return {form: linkInfo, isEditing: true};
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
                <LinkCreateForm
                    onSave={this.onSave}
                    {...this.state.form}
                    onInputChange={this.onInputChange}
                    isEditing={this.state.isEditing}
                />

                <LinksList
                    links={this.state.links}
                    onLinkExpired={this.onLinkExpired}
                    onEdit={this.onEdit}
                />
            </div>
        )
    }
}

export default Links;