import React, { Component } from 'react'
//import SearchList from './SearchList'
import ControlPage from './ControlPage'
//import ChatRoom from './ChatRoom'
import AppBar from '@material-ui/core/AppBar'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import PersonIcon from '@material-ui/icons/Person';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import EditIcon from '@material-ui/icons/Edit';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDial from '@material-ui/lab/SpeedDial'
import Grid from '@material-ui/core/Grid'
import {TYPING, MESSAGE_SENT,MESSAGE_RECEIVED,COMMUNITY_CHAT} from './Events'
import ChatHeading from './ChatHeading'
import Messages from './Messages'
import MessageInput from './MessageInput' 
import { Button } from '@material-ui/core';
//import SideBar from './SideBar'

const actions = [
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <PersonIcon />, name: 'Pofile' },

];
export default class MainPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      chats:[],
      activeChat:null,
      open: false,
    }
  }

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleOpen = () => {
    if (!this.state.hidden) {
      this.setState({
        open: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  componentDidMount(){

    const {socket} = this.props
    this.initSocket(socket)
    
  }

  initSocket(socket){
    socket.emit(COMMUNITY_CHAT,this.resetChat)
    socket.on('connect', () =>{
      socket.emit(COMMUNITY_CHAT,this.resetChat)
    })
  }

   resetChat = (chat) => {
     return this.addChat(chat,true)
   }

   addChat = (chat,reset) => {
     const {socket} = this.props
     const {chats} = this.state

     const newChats = reset ? [chat] : [...chats, chat]
     this.setState({chats:newChats})

     const messageEvent = `${MESSAGE_RECEIVED}-${chat.id}`//MESSAGE_RECEIVED-(WHATEVER THE CHAT ID WILL BE)
     const typingEvent = `${TYPING}-${chat.id}`

     socket.on(typingEvent,  this.updateTypingInChat(chat.id) )
     socket.on(messageEvent,this.addMessageToChat(chat.id))
   }

   addMessageToChat = (chatId) => {
     return message =>{
       const {chats} = this.state
       let newChats = chats.map((chat) => {
         if(chat.id === chatId)
             chat.messages.push(message)
             return chat
       })
       this.setState({chats:newChats})
     }
   }

    updateTypingInChat = (chatId) =>{
     return({isTyping,user}) =>{
      
         if(user !== this.props.user.name){ 

          const {chats} = this.state

          let newChats = chats.map((chat) => {
            if(chat.id === chatId){
              if(isTyping && !chat.typingUsers.includes(user)){
                chat.typingUsers.push(user)
              }else if (!isTyping && chat.typingUsers.includes(user)){
                  chat.typingUsers = chat.typingUsers.filter(u =>u !== user)
              }
            }
            return chat;
          })
          this.setState({chats:newChats})
         }
     }
   } 
   
  sendMessage = (chatId, message) =>{
    const {socket} = this.props
    socket.emit(MESSAGE_SENT, {chatId, message})
  }

 sendTyping = (chatId, isTyping) => {
   const {socket} = this.props
   socket.emit(TYPING, {chatId, isTyping})
 }

  setActiveChat = (activeChat) => {
    this.setState({activeChat})
  }

   render() {
     const {user, logout} = this.props;  
     const {chats,activeChat,open} = this.state;
    return (
          <div style={{ color:"#cac8e",
  display:"flex",
  flexDirection:"row",
  alignItems:"flex-start",
  height:"100%",
  width:"100%"}}>
          <Grid container spacing={5} style={styles.container}>
          <Grid item xs={4}>
          <ControlPage
           user={user}
          logout={logout}
          chats={chats}
          activeChat={activeChat}
          setActiveChat={this.setActiveChat} />
        
          </Grid>
          <Grid item xs={6} style={styles.grid}>
            <div className="chat-room-container" style={{marginLeft:20,width:870}}>
             {
              activeChat !== null ? (
        <div className="chat-room" style={{width:870,backgroundColor:"#ffffff",height:657}}>
        <AppBar position="relative" elevation={10} style={styles.appbar}><Button>back</Button><ChatHeading name={activeChat.name}/> </AppBar>
           
           
                  <Messages
                      messages={activeChat.messages}
                      user={user}
                      typingUsers={activeChat.typingUsers}/>
                  <MessageInput
                      sendMessage={
                        (message)=>{
                          this.sendMessage(activeChat.id, message)
                        }
                      }
                      sendTyping ={
                        (isTyping) =>{
                          this.sendTyping(activeChat.id, isTyping)
                        }
                      }/>
                </div>
              )
              :
              <div className="chat-room choose">
               <div style={{width:870, marginLeft:"auto", height:"100vh" , backgroundColor:"#fafafa"} }>
              <AppBar position="static" style={styles.appbar} color="inherit">
               <h3>{user.name}</h3>
              </AppBar>
              <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={this.handleOpen}
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          open={open}
          style={styles.speedial}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={this.handleClick}
            />
          ))}
        </SpeedDial>
        </div>  
              </div>
             }
          </div> 
        
          </Grid>
          
          </Grid>
            
          </div>
    )
  }
}
const styles= {
  appbar:{
    background:" linear-gradient(0.25turn, #e91e63, #f06292)",
    height:70,
    width:870
},
container:{
  color:"#cac8e",
  display:"flex",
  flexDirection:"row",
  alignItems:"flex-start",
  height:"100%",
  width:"100%"
},
grid:{
  width:700,
},
speedial:{
  marginTop:345,
  marginLeft:800,
 // background:" linear-gradient(0.25turn, #e91e63, #f06292)",
}
}
