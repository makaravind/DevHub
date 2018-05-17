import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Me from './Me';

function App({data}){
  return (
    <div className="App">
      <header className="App-header">
        <img src={data.image} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Reactions Mr. {data.firstName}</h1>
      </header>
      <p className="App-intro">
        Journey of React begins....
      </p>
      <div>

          <Me data={data} />

      </div>

    </div>

  )
}




export default App;




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           Journey of React begins....
//         </p>
//       </div>
//
//
//
//     );
//   }
// }
