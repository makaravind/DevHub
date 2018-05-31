import React, {Component} from 'react';
import LinksListItem from './LinksListItem';

// presentaional, dumb, state-less, functional
function LinksList({ links, onLinkExpired, onEdit }) {
    return (
        <ul className='list-group'>
            {links.map(link => <LinksListItem key={link.id}
                                              link={link}
                                              onEdit={onEdit}
                                              onLinkExpired={onLinkExpired}/>)}
        </ul>
    )
}

export default LinksList