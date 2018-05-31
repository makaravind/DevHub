import React, {Component} from 'react';
import LinksListItem from './LinksListItem';

// presentaional, dumb, state-less, functional
function LinksList({ links, onLinkExpired }) {
    return (
        <ul className='list-group'>
            {links.map(link => <LinksListItem key={link.id} link={link} onLinkExpired={onLinkExpired}/>)}
        </ul>
    )
}

export default LinksList