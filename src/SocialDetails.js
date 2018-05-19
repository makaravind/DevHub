import React from 'react';

function SocialDetails({socialDetails}) {
    return (
        <div>
            <p><strong>{socialDetails.provider}</strong>
                {socialDetails.username !== undefined && " - " + socialDetails.username}
                {socialDetails.channel !== undefined && " - " + socialDetails.channel}
                {socialDetails.link !== undefined && " - " + socialDetails.link}
                {socialDetails.url !== undefined && " - " + socialDetails.url}
                {socialDetails.type !== undefined && " - " + socialDetails.type}
                {" - " + socialDetails.engagement.join(", ")}
            </p>
        </div>
    )
}

export default SocialDetails;