import React, { Component } from 'react';

function Me({user}){
    let alldetails = user.details.map( (detail) => <p>{detail.provider} : <a href={detail.link}>{detail.username}</a></p>);
    let allSocialDetails = [];
    for(let userDetail of user.details){
        allSocialDetails.push(<SocialDetails userDetails = {userDetail}/>);
    }
    return(
        <div>
            <p className="App-intro">Main</p>
            <img src="http://tny.im/dWn" className="App-logo" alt="logo" />
            <p>First Name : {user.firstName}</p>
            <p>Last Name : {user.lastName}</p>
            <h2>Details</h2>
            <p>{allSocialDetails}</p>
        </div>
    )
}

function SocialDetails({userDetails}){
    return(
        <p>{userDetails.provider !== undefined &&  userDetails.provider}
            {userDetails.channel !== undefined && " - "+ userDetails.channel}
            {userDetails.link !== undefined && " - "+ userDetails.link}
            {userDetails.url !== undefined && " - "+ userDetails.url}
            { " - " + userDetails.engagement.join(", ")}
        </p>
    )
}

export default Me;