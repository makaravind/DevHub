import React, { Component } from 'react';
// import data from './data.json';
import './App.css';
import Me from './Me';

function App ({ data }) {
  return (
    <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome {data.firstName}</h1>
        </header>
        <p className="App-intro">

        Hello Devs-Journey of React begins....
        </p>

        <div>
          <Me passedDataToChildMeComp={data} />

        </div>
      </div>
    )
}

export default App;

/* Paul Note - In the above, I am passing data from this App component to the child Component called Me by the part 

<Me passedDataToChildMeComp={data} />

So in Me component, I will make use of that data with the variable 'passedDataToChildMeComp' which is also called state.

 */