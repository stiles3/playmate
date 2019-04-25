import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import PhoneIcon from '@material-ui/icons/Phone'
import ChatIcon from '@material-ui/icons/Chat'
import FilterListicon from '@material-ui/icons/FilterList'
import Avatar from '@material-ui/core/Avatar'
import './controlpage.css'
//import List from '@material-ui/core/List'
//import ListItem from '@material-ui/core/ListItem'
//import ListItemAvatar from '@material-ui/core/ListItemAvatar'
//import ListItemText from '@material-ui/core/ListItemText'


function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 0,}}>
        {children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };

export class ControlPage extends Component {
    state = {
        value: 0,
      };
      handleChange = (event, value) => {
        this.setState({ value });
      };
  render() {
    const {user, logout,chats,activeChat,setActiveChat} = this.props
      const {value}= this.state;
    return (
        <div className= "sam"style={{width:450,  height:"100vh",backgroundColor:"#ffffff",padding:0}}>
        <AppBar position="static" style={styles.appbar} color="inherit">
          <Tabs value={value} onChange={this.handleChange} style={styles.tabs}>
            <Tab label="Chat" icon={<ChatIcon/>} />
            <Tab label="Match List" icon={<FilterListicon/>} />
            <Tab label="Calls" icon={<PhoneIcon/>} disabled/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer> 
          <div id="side-bar">
        <div
          className="users"
          ref='users'
          onclick={(e) =>{(e.target === this.refs.user) && setActiveChat(null)}}>
          {
            chats.map((chat) => {
              if(chat.name){
                const lastMessage = chat.messages[chat.messages.length - 1];
                const user = chat.users.find(({name}) => {
                  return name !== this.props.name
                }) || {name:"Community"}
                const classNames = (activeChat && activeChat.id === chat.id)? 'active':''

                return(
                  <div
                    key = {chat.id}
                    className = {`user ${classNames}`}
                    onClick = { () => {setActiveChat(chat)}}>
                  <div className="user-photo"><Avatar>{user.name[0].toUpperCase()+user.name[1].toLowerCase()}</Avatar></div>
                  <div className="user-info">
                      <div className="name">{user.name}</div>

                  </div>  
                  {lastMessage && <div className="last-message">{lastMessage.message}</div>}
                       </div>
               
                )
              }
              return null
            })
          }    
          </div>
          <div className="current-user">
             <span>{user.name}</span>
             <div onClick = {() => {logout()}} title="logout" className="logout">
             </div>
          </div>
      </div>
   
        </TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        </div>
    )
  }
}
const styles = {
    appbar:{
        background:" linear-gradient(0.25turn, #e91e63, #f06292)",
        
    },
    tabs:{
     /*  boxSizing:"border-box",
      width:"33.75%",
      height:"100%",
      display:"flex",justifyContent:"space-around",
      flexDirection:"column" */
    }
}
export default ControlPage
