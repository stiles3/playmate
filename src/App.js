import React, { Component } from 'react';
import './App.css';
//import User from './logView/User'
//import  Chat  from './chatBox/Chat'
//import Country from './logView/Country'
import EditProfile from './regView/EditProfile'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <EditProfile/>
        </header>
      </div>
    );
  }
}

export default App;
