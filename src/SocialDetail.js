import React from 'react';

function SocialDetails({socialDetail}) {
    return (
        <div>
            <p>
                <strong>
                    <a href={socialDetail.url}>
                        {socialDetail.provider}
                    </a>
                </strong>
                {socialDetail.username && " - " + socialDetail.username}
                {socialDetail.channel && " - " + socialDetail.channel}
                {socialDetail.link && " - " + socialDetail.link}
                {socialDetail.type && " - " + socialDetail.type}
                {" - " + socialDetail.engagement.join(", ")}
            </p>
        </div>
    )
}

export default SocialDetails