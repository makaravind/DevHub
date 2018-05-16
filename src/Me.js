import React from 'react';

function Me({ data, toggle }) {
    return (
        <div>
            <h1>{data.firstName}</h1>
            { toggle &&  <small>{data.lastName}</small>}
        </div>
    )
}

export default Me