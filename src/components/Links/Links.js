import React, {Component} from 'react';
import LinksList from './LinksList';
const uuidv4 = require('uuid/v4');

class Links extends Component {

    constructor(props) {
        super(props);

        this.state = {
            links: [
                {
                    id: 'e8956e97-e4b6-4d8a-b130-dcf8dea4980f',
                    text: 'This is sameple text',
                    tags: [],
                    createdAt: '1527599546716',
                    deferByTime: '2018-06-01T08:30',
                },
                {
                    id: 'b9912bb1-b988-45cf-9726-088a71d22e4d',
                    text: 'This is sameple text 2',
                    tags: [],
                    createdAt: '1527599546716',
                    deferByTime: '2018-06-01T08:30',
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <LinksList links={this.state.links}/>
            </div>
        )
    }
}

export default Links;