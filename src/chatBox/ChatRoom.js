import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Appbar from '@material-ui/core/AppBar'



export class ChatRoom extends Component {
  state = {
  };
 
  render() {
    return (
        <MuiThemeProvider>
        <React.Fragment>
          <div style={{width:910, marginLeft:"auto", height:"100vh" , backgroundColor:"#fafafa"} }>
              <Appbar position="static" style={styles.appbar} color="inherit">
               <h3>Chatname</h3>
              </Appbar>
          
        </div>  
        </React.Fragment>
    </MuiThemeProvider>
    )
  }
}
const styles = {
    appbar:{
        background:" linear-gradient(0.25turn, #e91e63, #f06292)",

    },
}
export default ChatRoom