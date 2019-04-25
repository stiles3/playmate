import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
//import Card from '@material-ui/core/Card'
//import CardMedia from '@material-ui/core/CardMedia'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
//import Avatar from '@material-ui/core/Avatar'
import InputAdornment from '@material-ui/core/InputAdornment'
import Switch from '@material-ui/core/Switch'
import Slider from '@material-ui/lab/Slider'
import LensIcon from '@material-ui/icons/LensOutlined';
import { ListItem} from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import PetsIcon from '@material-ui/icons/Pets'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
//import Profile from './Profile';
//import Upload from '../upload/Upload'
import '../upload/edit.css'
import {VERIFY_USER} from '../chatBox/Events'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export class EditProfile extends Component {
  constructor(props){
    super(props)
  this.state = {
     value: 0, 
     slideValue:0,
     username:'',
     error:'',
     firstName:'',
     lastName:'',
     description:'',
     aGe:'18',
     ethniCity:'American Indian or Alaska Native',
     heiGht:'160',
     gender:'male',
     bodyType:'slim',
     diet:false,
     drink:false,
     drugs:false,
     smoke:false,
     genDER:'female',
     philosophy:false, 
     photography:false,            
     soccer:false,
     pop:false,          
     rock_n_Roll:false,
     afroBeats:false,
     indoorgames:false,    
     hookup:false,
     dating:false,
     escort:false,                    
     swimming:false,
     gymnastics:false,
     dogs:false,  
     cats:false,
     birds:false,
     rabbits:false,                       
     movies:false,
     sightSeeing:false,              
     athletics:false,
     health:false,                       
     technology:false,
  };

}

setUser = ({user, isUser}) => {
  console.log(user, isUser);
  if(isUser){
      this.setError("Username Taken")
  }else{
      this.setError("")
      this.props.setUser(user)
  }
}

 handleClick = e => {
  e.preventDefault()

  const {socket} = this.props
  const {username} = this.state
  socket.emit(VERIFY_USER, username, this.setUser)
 }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChanged = name => e => {
    this.setState({
      [name]: e.target.value,
    });
  };

    handledChange = input => e => {
    console.log(e.target.value)
    this.setState({ [input]: e.target.value});
  };
  
  handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleSelect = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSlide = (event, slideValue) => {
    this.setState({ slideValue });
  };

  setError = (error) =>{
    this.setState({error})
}

randomPlaceholder(){
  const rand = ["Ricky32","trille","SexyCat","BadGuy","Stiles349","Dany","Minipapa"]
  return rand[Math.floor(Math.random()*3000)%rand.length]
}

  render() {
  const {value,slideValue,firstName,lastName,username,aGe,ethniCity,heiGht,gender,bodyType,diet,drugs,drink,description,smoke,
  afroBeats,athletics,birds,cats,dating,dogs,escort,genDER,gymnastics,health,hookup,indoorgames,movies,rock_n_Roll,philosophy,photography,
pop,rabbits,sightSeeing,soccer,swimming,technology,error} = this.state
const AGE = [
  { value:'18',
    label:'18'
  },
  { value:'19',
  label:'19'
  },
  { value:'20',
  label:'20'
  },
  { value:'21',
  label:'21'
  },
  { value:'22',
  label:'22'
  },
  { value:'23',
  label:'23'
  },
  { value:'24',
  label:'24'
  },
  { value:'25',
  label:'25'
  },
  { value:'26',
  label:'26'
  },
  { value:'27',
  label:'27'
  },
  { value:'28',
  label:'28'
  },
  { value:'29',
  label:'29'
  },
  { value:'30',
  label:'30'
  },
  { value:'31',
    label:'31'
  },
  { value:'32',
    label:'32'
  },
  { value:'33',
    label:'33'
  },
  { value:'34',
  label:'34'
  },
  { value:'35',
    label:'35'
  },
  { value:'36',
    label:'36'
  },
  { value:'37',
    label:'37'
  },
  { value:'38',
    label:'38'
  },
  { value:'39',
    label:'39'
  },
  { value:'40',
    label:'40'
  },
  { value:'41',
    label:'41'
  },
  { value:'42',
    label:'42'
  },
  { value:'43',
    label:'43'
  },
  { value:'44',
    label:'44'
  },
  { value:'45',
    label:'45'
  },
  { value:'46',
    label:'46'
  },
  { value:'47',
    label:'47'
  },
  { value:'48',
    label:'48'
  },
  { value:'49',
    label:'49'
  },
  { value:'50',
    label:'50'
  },

]
const ETHNICITY=[
  {
       value:"American Indian or Alaska Native", label:"American Indian or Alaska Native"
  },
  {
    value:"Asian",label:"Asian"
  },
  {
   value:"Black or African American",label:"Black or African American"
  },
  {
   value:"Hispanic or Latino",label:"Hispanic or Latino"
  },
 
  {
   value:"Native Hawaiian or Other Pacific Islanders",label:"Native Hawaiian or Other Pacific Islanders"
  },
  {
   value:"White",label:"White"
  }
]
const HEIGHT=[
{
  value:"160",
  label:"160"
},
{
  value:"161",
  label:"161"
},
{
  value:"162",
  label:"162"
},
{
  value:"163",
  label:"163"
},
{
  value:"164",
  label:"164"
},
{
  value:"165",
  label:"165"
},
{
  value:"166",
  label:"166"
},
{
  value:"167",
  label:"167"
},
{
  value:"168",
  label:"168"
},
{
  value:"169",
  label:"169"
},
{
  value:"170",
  label:"170"
},
{
  value:"171",
  label:"171"
},
{
  value:"172",
  label:"172"
},
{
  value:"173",
  label:"173"
},
{
  value:"174",
  label:"174"
},
{
  value:"175",
  label:"175"
},
{
  value:"176",
  label:"176"
},
{
  value:"177",
  label:"177"
},
{
  value:"178",
  label:"178"
},
{
  value:"179",
  label:"179"
},
{
  value:"180",
  label:"180"
},
{
  value:"181",
  label:"181"
},
{
  value:"182",
  label:"182"
},
{
  value:"183",
  label:"183"
},
{
  value:"184",
  label:"184"
},
{
  value:"185",
  label:"185"
},
{
  value:"186",
  label:"186"
},
{
  value:"187",
  label:"187"
},
]

const GENDER= [
{
  value:"male",
  label:"Male"
},
{
 value:"female",
 label:"Female"
},
]
const BODYTYPE=[
{
value:"slim",
label:"Slim"
},
{
 value:"normal",
 label:"Normal"
},
{
 value:"muscular",
 label:"Muscular"
},
{
 value:"slim",
 label:"Slim"
},
]
const GendeR= [
{
 value:"male",
 label:"Male"
},
{
value:"female",
label:"Female"
},
{
value:"male & female",
label:"Male & Female"
},

]
return (
      
        <MuiThemeProvider>
            <React.Fragment>
            <AppBar position="static" style={styles.appbar}>
         <Toolbar>
             <Typography variant="title" color="inherit" style={styles.typo1}>
             EDIT PROFILE
             </Typography>
             <Button color="inherit"
             onClick={this.handleClick}
              style={styles.button}
              >NEXT</Button>
              </Toolbar>
         </AppBar>
     <form> 
      {/*   <div className="Card">
          <Upload />
      </div>  */}
      <input type="file" 
             multiple />
           <Tabs
          value={value}
          onChange={this.handleChange}
        >
          <Tab
            disableRipple
            label="Edit Profile"
          />
          <Tab
            disableRipple
            label="Preference"
          />
          <Tab
            disableRipple
            label="Interest"
          />
        </Tabs>
        {value === 0 && 
        <TabContainer>
          <div style={{width:680, marginLeft:"auto", marginRight:"auto"}}>
         <TextField style={styles.username}
                       placeholder="First Name"
                       label="First Name"
                       value={firstName}
                       onChange={this.handledChange("firstName")}
              />
            <br/>
            <Divider variant="middle" />
           <TextField style={styles.lastname} 
                       placeholder="Last Name"
                       label="Last Name"
                       value={lastName}
                       onChange={this.handledChange("lastName")}
             />
            <br/>
            <Divider variant="middle" />
            <TextField style={styles.lastname} 
                       placeholder={this.randomPlaceholder()}
                       label="Username"
                       value={username}
                       onChange={this.handledChange("username")}

             />
              <div>{error ? error : null}</div>
                   <Divider variant="middle" />
                   <List subheader={<ListSubheader>Personal Profile</ListSubheader>} >
            <ListItem>
            <ListItemText primary="Age"/>
            <ListItemSecondaryAction>
            <TextField
            select
            value={aGe}
            onChange={this.handleSelect('aGe')}
            style={styles.select}
            InputProps={{
              endAdornment:<InputAdornment position="end">yrs</InputAdornment>}}
            >
            {AGE.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
            </ListItemSecondaryAction>
            </ListItem>
                   <Divider variant="middle" />
            <ListItem>
            <ListItemText primary="Ethnicity"/>
            <ListItemSecondaryAction>
            <TextField
            select
            value={ethniCity}
            onChange={this.handleSelect('ethniCity')}
            style={styles.select1}
           >
            {ETHNICITY.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
            </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
            <ListItemText primary="Height"/>
            <ListItemSecondaryAction>
            <TextField
            select
            value={heiGht}
            onChange={this.handleSelect('heiGht')}
            style={styles.select1}
            InputProps={{
              endAdornment:<InputAdornment position="end">cm</InputAdornment>}}
            >
           >
            {HEIGHT.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
            </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
            <ListItemText primary="Body Type"/>
            <ListItemSecondaryAction>
            <TextField
            select
            value={bodyType}
            onChange={this.handleSelect('bodyType')}
            style={styles.select1}
           >{BODYTYPE.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
          ))} 

            </TextField>
            </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
            <ListItemText primary="Gender"/>
            <ListItemSecondaryAction>
            <TextField
            select
            value={gender}
            onChange={this.handleSelect('gender')}
            style={styles.select1}
           > {GENDER.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} </TextField>     
          
            </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" /> 
            <br/>
       </List>

        <TextField
               id="filled-multiline-static"
               label="Description"
               placeholder="Write about yourself"
               multiline
               rows="4"
               value={description}
               margin="normal"
               variant="outlined"
               style={styles.desc}
               onChange={this.handleChanged('description')}
               
                />
       </div>
        </TabContainer>}
        {value === 1 && 
        <TabContainer> 
          <div style={{width:680, marginLeft:"auto", marginRight:"auto"}}>
          <List subheader={<ListSubheader>Settings</ListSubheader>} >
          <Divider component="li" variant="inset" />
          <ListItem>
            <ListItemText primary="Diet" style={styles.li}/>
            <ListItemSecondaryAction>
            <Switch
              checked={diet}
              onChange={this.handleCheck('diet')}
              value="diet"
              color="secondary"
            />
            </ListItemSecondaryAction>
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
            <ListItemText primary="Smoke" style={styles.li}/>
            <ListItemSecondaryAction>
            <Switch
              checked={smoke}
              onChange={this.handleCheck('smoke')}
              value="smoke"
              color="secondary"
            />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider component="li" variant="inset" />
          <ListItem>
            <ListItemText primary="Drink" style={styles.li}/>
            <ListItemSecondaryAction>
            <Switch
              checked={drink}
              onChange={this.handleCheck('drink')}
              value="drink"
              color="secondary"
            />
            </ListItemSecondaryAction>
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
            <ListItemText primary="Drugs" style={styles.li}/>
            <ListItemSecondaryAction>
            <Switch
              checked={drugs}
              onChange={this.handleCheck('drugs')}
              value="drugs"
              color="secondary"
            />
            </ListItemSecondaryAction>
            </ListItem>
      </List>
         <Divider variant="fullWidth" />
         <br/>
         <List subheader="Discovery Setting">
         <Divider component="li" variant="inset" />
           <ListItem>
             <ListItemText primary="Maximum Distance of Chat"style={styles.li}/>
             <ListItemText primary={slideValue+'mi'}/>
             <ListItemSecondaryAction>
             <Slider
               value={slideValue}
               min={1}
               max={100}
               step={1}
               aria-labelledby="slider-icon"
               onChange={this.handleSlide()}
               style={styles.slide}
               thumb={<LensIcon style={{ color: '#2196f3' }} />}
        />
             </ListItemSecondaryAction>
             </ListItem>
             <Divider component="li" variant="inset" />
             <ListItem>
               <ListItemText primary="Looking for" style={styles.li}/>
               <ListItemSecondaryAction>
                <TextField
                 select
                 value={genDER}
                 onChange={this.handleSelect('genDER')}
                 style={styles.selectSex}>
                  {GendeR.map(option => (
                   <MenuItem key={option.value} value={option.value}>
                    {option.label}
                   </MenuItem>
                  ))}
                </TextField>
               </ListItemSecondaryAction>
             </ListItem>
             <Divider component="li" variant="inset" />
            {/*  <ListItem>
               <ListItemText primary="Age range of Match"/>
               <ListItemSecondaryAction>
                 <TextField
                   select
                   endAdornment={<InputAdornment position="end">yrs</InputAdornment>}
                   style={styles.select1}/>
               </ListItemSecondaryAction>
             </ListItem> */}
         </List>
         <List subheader="Status">
         <Divider component="li" variant="inset" />
          <ListItem>
          <ListItemText primary="Hookup" style={styles.li}/>
            <Switch
              checked={hookup}
              onChange={this.handleCheck('hookup')}
              style={styles.interes}
              value="hookup"
              color="secondary"
            />
          </ListItem>
          <Divider component="li" variant="inset" />
          <ListItem>
          <ListItemText primary="Escort" style={styles.li}/>
            <Switch
              checked={escort}
              onChange={this.handleCheck('escort')}
              style={styles.interes}                                                                                                                       
              value="escort"
              color="secondary"
            />
          </ListItem>
          <Divider component="li" variant="inset" />
          <ListItem>
          <ListItemText primary="Dating" style={styles.li}/>
            <Switch
              checked={dating}
              onChange={this.handleCheck('dating')}
              style={styles.interes}
              value="dating"
              color="secondary"
            />
          </ListItem>
          <Divider component="li" variant="inset" />
         </List>
        </div >
        </TabContainer>}
        {value === 2 && 
        <TabContainer> 
           <div style={{width:680, marginLeft:"auto", marginRight:"auto"}}>
           <List subheader="Animals">
           <ListItemIcon>
                <PetsIcon/>
           </ListItemIcon>
           <Divider component="li" variant="inset" />
           <ListItem>
             <ListItemText primary="Dogs" style={styles.li}/>
            <Switch
              checked={dogs}
              onChange={this.handleCheck('dogs')}
              style={styles.interes}
              value="dogs"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
             <ListItemText primary="Cats" style={styles.li}/>
            <Switch
              checked={cats}
              onChange={this.handleCheck('cats')}
              style={styles.interes}
              value="cats"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
             <ListItemText primary="Rabbits" style={styles.li}/>
            <Switch
              checked={rabbits}
              onChange={this.handleCheck('rabbits')}
              style={styles.interes}
              value="rabbits"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
             <ListItemText primary="Birds" style={styles.li}/>
            <Switch
              checked={birds}
              onChange={this.handleCheck('birds')}
              style={styles.interes}
              value="birds"
              color="secondary"
            />
            </ListItem>
            </List>
            <Divider variant="fullWidth"/>
            <List subheader="Sports">
           <ListItemIcon>
                <DirectionsRunIcon/>
           </ListItemIcon>
           <Divider component="li" variant="inset" />
            <ListItem>
            <ListItemText primary="Athletics" style={styles.li}/>
            <Switch
              checked={athletics}
              onChange={this.handleCheck('athletics')}
              style={styles.interes}
              value="athletics"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
            <ListItemText primary="Indoor Games" style={styles.li}/>
            <Switch
              checked={indoorgames}
              onChange={this.handleCheck('indoorgames')}
              style={styles.interes}
              value="indoorgames"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
       <ListItemText primary="Gymnastics" style={styles.li}/>
            <Switch
              checked={gymnastics}
              onChange={this.handleCheck('gymnastics')}
              style={styles.interes}
              value="gymnastics"
              color="secondary"
            />
           </ListItem>
           <Divider component="li" variant="inset" />
          <ListItem>
          <ListItemText primary="Soccer" style={styles.li}/>
            <Switch
              checked={soccer}
              onChange={this.handleCheck('soccer')}
              style={styles.interes}
              value="soccer"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
          <ListItem>
          <ListItemText primary="Swimming" style={styles.li}/>
            <Switch
              checked={swimming}
              onChange={this.handleCheck('swimming')}
              style={styles.interes}
              value="swimming"
              color="secondary"
            />
            </ListItem>
            </List>
            <Divider variant="fullWidth"/>
            <List subheader="Music">
              <ListItemIcon>
                <MusicNoteIcon/>
              </ListItemIcon>
              <Divider component="li" variant="inset" />
            <ListItem>
          <ListItemText primary="Pop" style={styles.li}/>
            <Switch
              checked={pop}
              onChange={this.handleCheck('pop')}
              style={styles.interes}
              value="pop"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
            <ListItemText primary="Rock_n_Roll" style={styles.li}/>
            <Switch
              checked={rock_n_Roll}
              onChange={this.handleCheck('rock_n_Roll')}
              style={styles.interes}
              value="rock_n_Roll"
              color="secondary"
            />  
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
            <ListItemText primary="Afro Beats" style={styles.li}/>
            <Switch
              checked={afroBeats}
              onChange={this.handleCheck('afroBeats')}
              style={styles.interes}
              value="afroBeats"
              color="secondary"
            />  
            </ListItem>
            </List>
             <Divider variant="fullWidth"/>
            <List subheader="Others">
            <Divider component="li" variant="inset" />
            <ListItem>
            <ListItemText primary="Health" style={styles.li}/>
            <Switch
              checked={health}
              onChange={this.handleCheck('health')}
              style={styles.interes}
              value="health"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
        <ListItem>
        <ListItemText primary="Philosophy" style={styles.li}/>
            <Switch
              checked={philosophy}
              onChange={this.handleCheck('philosophy')}
              style={styles.interes}
              value="philosophy"
              color="secondary"
            />
             </ListItem>
             <Divider component="li" variant="inset" />
         
      
          <ListItem>
          <ListItemText primary="Sight Seeing" style={styles.li}/>
            <Switch
              checked={sightSeeing}
              onChange={this.handleCheck('sightSeeing')}
              style={styles.interes}
              value="sightSeeing"
              color="secondary"
            />
            </ListItem>
         <Divider component="li" variant="inset" />
         <ListItem>
         <ListItemText primary="Movies" style={styles.li}/>
            <Switch
              checked={movies}
              onChange={this.handleCheck('movies')}
              style={styles.interes}
              value="movies"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
       <ListItem>
       <ListItemText primary="Technology" style={styles.li}/>
            <Switch
              checked={technology}
              onChange={this.handleCheck('technology')}
              style={styles.interes}
              value="technology "
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
       <ListItem>
       <ListItemText primary="Photography" style={styles.li}/>
            <Switch
              checked={photography}
              onChange={this.handleCheck('photography')}
              style={styles.interes}
              value="photography "
              color="secondary"
            />
            </ListItem>
         </List>
           </div>
         </TabContainer>}
         </form>  
            </React.Fragment>
        </MuiThemeProvider>
      
    )
   
  }
}
const styles={
  avatar:{
    position:"relative",
    marginLeft:"auto",
    marginRight:"auto",
    width:200,
    height:200,
  },
  card:{
    height:350,
    width:400,
    marginLeft:"auto",
    marginRight:"auto",
  },
  appbar:{
    color:"inherit",
    background:" linear-gradient(0.25turn, #e91e63, #f06292)",
    fontWeight: "bold",
    fontSize:39,
},
typo1:{
  marginLeft:"auto",
  fontFamily: 'yatra one regular',
  fontWeight: "bold",
  fontSize:39,
},
button:{
  marginLeft:"auto",
  fontFamily: 'yatra one regular',
  fontWeight: "bold",
  fontSize:24,
},
username:{
width:300,

},
lastname:{
  width:300,
  
},
slide:{
  width:120,
  //height:20
},
select:{
  width:190,
  margin:10
  
  },
  select1:{
    width:100,
    margin:10
    
    },
    selectSex:{
      width:150,
      margin:10
      
      },
    li:{
    marginLeft: 55
    },
    desc:{
      width:400
    }
}
export default EditProfile
