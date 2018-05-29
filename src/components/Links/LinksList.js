import React from 'react';
import LinksListItem from './LinksListItem';

function LinksList({ links }) {
    return (
        <ul className='list-group'>
            {links.map(link => <LinksListItem key={link.id} link={link}/>)}
        </ul>
    )
}

export default LinksList