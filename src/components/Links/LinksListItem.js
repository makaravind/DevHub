import React from 'react';
import Moment from 'react-moment';

function LinksListItem({link}) {
    return (
        <li className='list-group-item'>
            <div>
                {link.text} <small><Moment format="MM/DD HH:MM:SS">{link.deferByTime}</Moment></small>
                <br/>
                <button type="button" className="btn btn-success">Done</button>
            </div>
        </li>
    )
}

export default LinksListItem