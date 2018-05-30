import React, {Component} from 'react';
import LinksList from './LinksList';
import LinkCreateForm from './LinkCreateForm';
import SearchBar from "./SearchBar";
const uuidv4 = require('uuid/v4');

class Links extends Component {

    constructor(props) {
        super(props);

        this.state = {
            links: [
                {
                    id: 'e8956e97-e4b6-4d8a-b130-dcf8dea4980f',
                    text: 'www.google.com',
                    tags: ['search', 'engine'],
                    createdAt: '1527599546716',
                    deferByTime: '2018-06-01T08:30',
                    status: 'DONE' // DONE, OK, EXPIRED
                },
                {
                    id: 'b9912bb1-b988-45cf-9726-088a71d22e4d',
                    text: 'www.twitter.com',
                    tags: ['social', 'media'],
                    createdAt: '1527599546716',
                    deferByTime: '2018-05-29T08:30',
                    status: 'OK'
                },
            ],
            filter: ''
        }
    }

     onSave = (data) => {
        this.setState({
            links: [...this.state.links, {...data, id: uuidv4(), createdAt: Date.now(), status: 'OK', tags: data.tags.map((tag) => tag.trim())}]
        })
    };

    onLinkExpired = (id) => {
        console.log('link expired called ', id);
        this.setState((currentState) => {
            const links = currentState.links.map((link) => {
                if(link.id === id) {
                    link.status = 'EXPIRED';
                }
                return link;
            });
            return {links};
        }, () => {
            console.log(this.state)
        });
    };



    onSearch = (text) => {
        this.setState({
            filter: text.trim()
        })
    };

    getFilteredLinks = () => {
        let filteredLinks =  this.state.links.filter((link) => link.tags.indexOf(this.state.filter) !== -1);
        if(filteredLinks.length === 0){
            return this.state.links
        }
        else return filteredLinks
    };



    render() {
        return (
            <div>
                <LinkCreateForm onSave={this.onSave}/>
                <SearchBar onSearch={this.onSearch}/>
                <LinksList links={this.getFilteredLinks()} onLinkExpired={this.onLinkExpired}/>
            </div>
        )
    }
}

export default Links;