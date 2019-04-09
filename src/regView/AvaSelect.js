import React, { Component } from 'react'
import {AppBar,Typography,Button,Toolbar, TextField,Paper,Avatar} from '@material-ui/core'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
//import axios from 'axios'



export class AvaSelect extends Component {
  constructor(props) {
    super(props)
    const src = ''
    this.state = {
      preview: null,
      src,
      selectedFile:null
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
  }
  continue = e => {
    e.preventDefault();
    this.props.nextRegStep();
  }
  onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
  }

//    fileSelectedHandler= e =>{
//      this.setState({
 //         src: e.target.files[0]
 //     })
//    }
  //  fileUploadHandler = () =>{
   //     const fd = new FormData();
   //     fd.append('image',this.state.selectedFile,this.state.selectedFile.name)
    //    axios.post('https://www.google.com',fd, {onUploadProgress:progressEvent =>{
    //   console.log("Upload Progress" + Math.round(progressEvent.loaded/progressEvent.total* 100) + "%")
   // }});
    //    .then(res) => {
    //      console.log(res);
    //    };
     
  //  }
  render() {
    return (
 <MuiThemeProvider>
     <React.Fragment>
         <AppBar position="static" style={styles.appbar}>
         <Toolbar>
             <Typography variant="title" color="inherit" style={styles.typo1}>
             Edit Profile
             </Typography>
             <Button color="inherit"
             onClick={this.continue}
              style={styles.button}
              >Next</Button>
              </Toolbar>
         </AppBar>
         <div style={{
         }}>
         <Paper style={styles.paper} elevation={10}>
         <input type="file"
            style={{
              display:"none"
            }} 
        onChange={this.fileSelectedHandler}
        ref={fileInput => this.fileInput = fileInput}/>
          <Avatar
           onClick={() => this.fileInput.click()}
           style={styles.avatar}
           >H</Avatar>
       <Typography variant="subheading" color="inherit" style={styles.typo}>
       Enter your name and add an optional Profile Picture 
       </Typography>
       { /*<img src={this.state.preview} alt="Preview" />*/}
     
       <TextField
         label="Username"
        // placeholder="Username"
         style={styles.textfield}
         outline="none"
      //   error={"true"}
      />
      
       </Paper>
       </div>
     </React.Fragment>
 </MuiThemeProvider>

    )
  }
}
const styles = {
    button:{
      marginLeft:"auto",
      fontFamily: 'flame fetish regular',
      fontWeight: "bold",
      fontSize:24,
    },
    appbar:{
      color:"inherit",
      background:" linear-gradient(0.25turn, #e91e63, #f06292)",
      fontWeight: "bold",
      fontSize:39,
     
 
      
    },
    typo:{
      color:"#e91e63",
      marginLeft:0,
      fontFamily: 'lucida sans',
      fontSize:20,
      fontWeight: "bold",
    },
    typo1:{
      marginLeft:600,
      fontFamily: 'flame fetish regular',
      fontWeight: "bold",
      fontSize:39,
    },
   textfield:{
    color: "#e91e63",
     marginLeft:0,
     borderWidth:"1px",
     borderStyle:"solid",
     //borderColor:"#DAA520",
    borderBottomColor:"#e91e63",
    borderLeftColor:"transparent",
    borderRightColor:"transparent",
    borderTopColor:"transparent"
//    borderRightWidth:25,
 //   borderLeftWidth:25,
 //  background: 'linear-gradient(to right bottom, #DAA520, 	#FFD700)'
   },
   paper:{
    //background: "repeating-radial-gradient(circle at 0 0, #f06292,#e91e63 50px)",
     width:300,
     height:400,
     marginLeft:"auto",
     marginRight:"auto",
     marginTop:100,
     borderRadius:15,
   },
   avatar:{
     width:150,
     height:150
   }
  }

export default AvaSelect
