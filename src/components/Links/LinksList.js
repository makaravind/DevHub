import React from 'react';
import LinksListItem from './LinksListItem';

function LinksList({ links, onLinkExpired }) {
    return (
        <ul className='list-group'>
            {links.map(link => <LinksListItem key={link.id} link={link} onLinkExpired={onLinkExpired}/>)}
        </ul>
    )
}

export default LinksList