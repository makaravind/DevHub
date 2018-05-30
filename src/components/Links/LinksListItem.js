import React, {Component} from 'react';
import CountDownTimer from './CountDownTimer';

class LinksListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {link} = this.props;
        return (
            <li className='list-group-item'>
                <div>
                    <p className={link.status === 'EXPIRED' && 'text-danger' || 'text-primary'}>{link.text}</p>
                    <p>tags: {link.tags.join(', ')}</p>
                    <CountDownTimer time={link.deferByTime} id={link.id} onLinkExpired={this.props.onLinkExpired}/>
                    <br/>
                    {
                        link.status !== 'DONE' && <button type="button" className="btn btn-success">Done</button>
                    }
                    <button type="button" className="btn btn-info">Edit</button>
                </div>
            </li>
        )
    }

}

export default LinksListItem