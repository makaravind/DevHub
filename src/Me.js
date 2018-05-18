import React from 'react';
import SocialDetails from "./SocialDetails";

function Me({userDetails}) {
    return (
        <div>
            <h1>Social Presence</h1>
            <ul>
                {userDetails.map(detail => <li key={detail.id}><SocialDetails socialDetails={detail}/></li>)}
            </ul>
        </div>
    )
}

export default Me