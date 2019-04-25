import React, { Component } from 'react';
import './App.css';
//import User from './regView/User'
//import  MainPage  from './chatBox/MainPage'
//import ImageUpload from './regView/ImageUpload'
//import Country from './logView/Country'
//import Profile from './chatBox/Profile'
//import EditProfile from './regView/EditProfile'
//import LoginForm from './regView/Loginform'
import Layout from './regView/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Layout/>
        </header>
      </div>
    );
  }
}

export default App;
