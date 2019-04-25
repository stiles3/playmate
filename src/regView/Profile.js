import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Card from '@material-ui/core/Card'
import CardMedia from  '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import  Grid  from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'
import { Divider, ListSubheader} from '@material-ui/core';
import {VERIFRY_USER} from '../chatBox/Events'
import TextField from '@material-ui/core/TextField'


export class Profile extends Component {
  constructor(props){
   super(props)
   this.state = {
     username:"",
     error:""
   }
  }
  setUser = ({user, isUser})=>{
    console.log(user, isUser);
    if(isUser){
      this.setError("Username Taken")
     }
     else{
       this.setError("")
       this.props.setUser(user)
     } 
  }
  handleChange =  (e) => {
    this.setState({username: e.target.value, });
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    console.log(this.props.UserName, this.props.id)
   }
   handleSubmit = (e) => {
       e.preventDefault()
       const {socket} = this.props
       const {username} = this.state
       socket.emit(VERIFRY_USER, username, this.setUser)
  }
  setError = (error) => {
    this.setState({error})
  }


  render() {
    const {values: {firstName,lastName,description,aGe,ethniCity,heiGht,gender,bodyType,diet,drugs,drink,smoke,slideValue,genDER,philosophy,photography,pop,sightSeeing,
      soccer,swimming,cats,dating,dogs,rabbits,rock_n_Roll,gymnastics,movies,health,hookup,technology,escort,indoorgames,afroBeats,athletics,birds}}= this.props
   var userL = (lastName.charAt(0).toUpperCase())+(firstName.charAt(0).toUpperCase())
   var interest = []
   const{username,error}= this.state
   if (philosophy===true) {
     console.log('done')
     interest.push('diet')
   } 
   if (photography===true) {
    console.log('done')
    interest.push('photography')
  } 
   if(pop ===true){
     interest.push('Pop, ')
    
     
     }
   if(sightSeeing ===true){
    interest.push('Sightseeing, ')
   }
   if(soccer ===true){
    interest.push('Soccer, ')
   }
   if(swimming ===true){
    interest.push('Swimming, ')
   }
   if(cats ===true){
    interest.push('Cats, ')
   }
   if( dogs===true){
    interest.push('Dogs, ')
   }
   if(rabbits ===true){
    interest.push('Rabbits, ')
   }
   if( rock_n_Roll===true){
    interest.push('Rock_n_Roll, ')
   }
   if(gymnastics ===true){
    interest.push('Gymnastics, ')
   }
   if(movies ===true){
    interest.push('Movies, ')
   }
   if(health ===true){
    interest.push('Health, ')
   }
   if(technology ===true){
    interest.push('Technology, ')
   }
   if(indoorgames ===true){
    interest.push('Indoorgames, ')
   }
   if(afroBeats ===true){
    interest.push('AfroBeats, ')
   }
   if(athletics ===true){
    interest.push('Athletics, ')
   }
   if(birds ===true){
    interest.push('Birds, ')
   }
   if(diet === true){
     var diET= "Yes"
   }
   else{
      diET ="No"
   }
   if(drugs === true){
    var drUGS= "Yes"
  }
  else{
     drUGS ="No"
  }
  if(drink === true){
    var drINK= "Yes"
  }
  else{
     drINK ="No"
  }
  if(smoke === true){
    var smoKE= "Yes"
  }
  else{
     smoKE ="No"
  }
  

return (
     <MuiThemeProvider>
      <React.Fragment>
      <AppBar 
      position="static"  style={styles.appbar}>
         <Toolbar>
             <Typography variant="title" color="inherit" /* style={styles.typo1}*/ >
             PROFILE
             </Typography>
             <Button color="inherit" onClick={this.continue} style={styles.button}>Continue</Button>
              </Toolbar>
         </AppBar>
         
        <div style={{textAlign:"center"}}>
           <Card style={styles.card}  >
            <input type="file" style={{ display:"none" }} 
                   onChange={this.fileSelectedHandler}
                   ref={fileInput => this.fileInput = fileInput}/>
           <Avatar onClick={() => this.fileInput.click()} // style={styles.avatar}
              >{userL}</Avatar>
           <CardMedia/>
           </Card> 
     <h3 style={{textAlign:"center"}}>{username},{aGe}</h3>
     </div>
      <div style={{width:550,marginLeft:"auto", marginRight:"auto"}}>{description}</div> 
      <div style={{width:550,marginLeft:"auto", marginRight:"auto"}}>
       <List>
       {interest}
       </List>
     </div>
     <div style={{height:"100vh"}}>
          <Grid container spacing={4}>
          <Grid item xs={4}>
         <List subheader={ <ListSubheader>Info</ListSubheader>}>
           <ListItem>
             <ListItemText primary="First Name" secondary={firstName}/>
           </ListItem>
           <Divider variant="middle"/>
           <ListItem>
           <ListItemText primary="Last Name" secondary={lastName}/>
           </ListItem>
           <Divider variant="middle"/>
           <form onSubmit={this.handleSubmit}>
           <ListItem>
             <ListItemText primary="username" />
             <ListItemSecondaryAction>
             <input 
                 ref = {(input) => {this.textInput = input}}
                 type="text"
                 id="username"
                 value={username}
                 onChange={this.handleChange}
                 />
             <div>{error ? error : null}</div>
             </ListItemSecondaryAction>
           </ListItem>
           </form>
           <Divider variant="middle"/>
           <ListItem>
           <ListItemText primary="Age" secondary={aGe}/>
           </ListItem>
           <Divider variant="middle"/>
           <ListItem>
           <ListItemText primary="Ethnicity" secondary={ethniCity}/>
           </ListItem>
           <Divider variant="middle"/>
           <ListItem>
           <ListItemText primary="Height" secondary={heiGht}/>
           </ListItem>
           <Divider variant="middle"/>
           <ListItem>
           <ListItemText primary="Body Type" secondary={bodyType}/>
           </ListItem>
           <Divider variant="middle"/>
           <ListItem>
           <ListItemText primary="Gender" secondary={gender}/>
           </ListItem>
           <Divider variant="middle"/>
         </List>
          </Grid>
          <Grid item xs={6}>
           <List>
           <ListItem>
           <ListItemText primary="Diet" secondary={diET}/>
           </ListItem>
           <Divider variant="middle"/>
           <ListItem>
           <ListItemText primary="Drinks" secondary={drINK}/>
           </ListItem>
           <Divider variant="middle"/>
           <ListItem>
           <ListItemText primary="Drugs" secondary={drUGS}/>
           </ListItem>
           <Divider variant="middle"/>
           <ListItem>
           <ListItemText primary="Smoke" secondary={smoKE}/>
           </ListItem>
           <Divider variant="middle"/>
           <ListItem>
           <ListItemText primary="Looking for" secondary={genDER}/>
           </ListItem>
           <Divider variant="middle"/>
           <ListItem>
           <ListItemText primary="Maximum Distance Of Chat" secondary={slideValue}/>
           </ListItem>
           <Divider variant="middle"/>

           </List>
          
          </Grid>
          
          </Grid>
            
          </div>
         
      </React.Fragment>
</MuiThemeProvider>
    )
  }
}
const styles = {
  card:{
    height:350,
    width:400,
    marginLeft:0,
    marginRight:"auto",
  },
  appbar:{
    color:"inherit",
    background:" linear-gradient(0.25turn, #e91e63, #f06292)",
    fontWeight: "bold",
    fontSize:39,
},
button:{
  marginLeft:"auto",
  fontFamily: 'yatra one regular',
  fontWeight: "bold",
  fontSize:24,
},
}
export default Profile
