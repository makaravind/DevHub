import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

function DisplaySocialDetails({socialDetails}) {

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

function Me({userDetails}) {

    let allSocialDetails = [];

    for(let userDetail of userDetails){
        allSocialDetails.push(<DisplaySocialDetails socialDetails={userDetail}/>);
    }
    return <div><h1>Social Presence</h1> {allSocialDetails}</div>;
}


function App ({user}) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={user.image} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {user.firstName} {user.lastName}</h1>
        </header>

          {/*<DisplaySocialDetails socialDetails={user.details[0]} />*/}

          <Me userDetails={user.details}/>
      </div>
    );
}

export default App;
