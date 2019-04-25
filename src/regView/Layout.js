import React, { Component } from 'react'
import io from  'socket.io-client'
import {USER_CONNECTED,LOGOUT} from '../chatBox/Events'
import EditProfile from './EditProfile'
import MainPage from '../chatBox/MainPage'
//import Loginform from './Loginform';
//import './index.css'


const socketUrl = "http://localhost:3231/"
export class Layout extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          socket:null,
           user:null
        }
      }
      componentWillMount(){
            this.initSocket()
      }  
      initSocket = () => {
        const socket = io(socketUrl)
        socket.on('connect', ()=>{
          console.log("Connected");
        })
        this.setState({socket})
      }
    setUser = (user)=>{
      const {socket} = this.state
      socket.emit(USER_CONNECTED, user);
      this.setState({user})
    }
    logout = () =>  {
      const {socket} = this.state
      socket.emit(LOGOUT)
      this.setState({user:null})
    }
  render() {
      const {socket,user}= this.state
    return (
      <div>

       { 
         !user ? 
       <EditProfile socket ={socket} setUser={this.setUser}/>
         : 
       <MainPage socket={socket} user={user} logout={this.logout}/> 
      }
      </div>
    )
  }
}

export default Layout
