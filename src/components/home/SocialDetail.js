import React from 'react';

function SocialDetails({socialDetail}) {
    return (
        <div className="card text-white bg-dark mb-3">
            <div className="card-header">
                {socialDetail.provider}
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {socialDetail.username && socialDetail.username}

                </h5>
                <p className="card-text"><a href={socialDetail.link}>{socialDetail.link && socialDetail.link}</a></p>
            </div>
        </div>
    )
}

export default SocialDetails