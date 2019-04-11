import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
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
import Avatar from '@material-ui/core/Avatar'
import InputAdornment from '@material-ui/core/InputAdornment'
import Switch from '@material-ui/core/Switch'
import Slider from '@material-ui/lab/Slider'
import LensIcon from '@material-ui/icons/LensOutlined';
import { ListItem,} from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import PetsIcon from '@material-ui/icons/Pets'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import MusicNoteIcon from '@material-ui/icons/MusicNote'

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
  state = {
    value: 0,
    diet:false,
    smoke:false,
    drink:false,
    drugs:false,
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
    aGe:'18',
    ethniCity:'American Indian or Alaska Native',
    heiGht:'160',
    gender:'male',
    bodyType:'slim',
    genDER:'female',
    disTance:0,
    values: 0,
  };
  getMile=()=>{
    let values = this.state.values
   var x = Math.round(values)
   return x
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChanger = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeAge = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  handleChangeEthnicity = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  handleChangeHeight = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  handleChangeGender = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  handleChangeGenDer = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  handleChangeBodyTypes = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  handleChangeDistance = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  handleChangeSlider = (event, disTance) => {
    this.setState({ disTance });
  };
  render() {
const { value } = this.state;
const { disTance } = this.state;
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
        value:"American Indian or Alaska Native",
        label:"American Indian or Alaska Native"
   },
   {
     value:"Asian",
     label:"Asian"
   },
   {
    value:"Black or African American",
    label:"Black or African American"
   },
   {
    value:"Hispanic or Latino",
     label:"Hispanic or Latino"
   },
   {
    value:"Native Hawaiian or Other Pacific Islanders",
     label:"Native Hawaiian or Other Pacific Islanders"
   },
   {
    value:"White",
     label:"White"
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
             onClick={this.continue}
              style={styles.button}
              >NEXT</Button>
              </Toolbar>
         </AppBar>
              <Card style={styles.card}>
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
           <CardMedia/>
           </Card>
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
                     //  label="First Name"
              />
            <br/>
            <Divider variant="middle" />
           <TextField style={styles.lastname} 
                       placeholder="Last Name"
                       label="Last Name"
             />
            <br/>
            <Divider variant="middle" />
            <TextField style={styles.lastname} 
                       placeholder="Username"
                       label="Username"
             />
        
                   <Divider variant="middle" />
                   <List subheader={<ListSubheader>Personal Profile</ListSubheader>} >
            <ListItem>
            <ListItemText primary="Age"/>
            <ListItemSecondaryAction>
            <TextField
            select
            value={this.state.aGe}
            onChange={this.handleChangeAge('aGe')}
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
            value={this.state.ethniCity}
            onChange={this.handleChangeAge('ethniCity')}
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
            value={this.state.heiGht}
            onChange={this.handleChangeHeight('heiGht')}
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
            value={this.state.bodyType}
            onChange={this.handleChangeBodyTypes('bodyType')}
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
            value={this.state.gender}
            onChange={this.handleChangeHeight('gender')}
            style={styles.select1}
           > {GENDER.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} </TextField>   
          <br/>  
          <Divider variant="inset" /> 
            </ListItemSecondaryAction>
            </ListItem>
        </List>
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
              checked={this.state.diet}
              onChange={this.handleChanger('diet')}
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
              checked={this.state.smoke}
              onChange={this.handleChanger('smoke')}
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
              checked={this.state.drink}
              onChange={this.handleChanger('drink')}
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
              checked={this.state.drugs}
              onChange={this.handleChanger('drugs')}
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
             <ListItemText primary={disTance+'mi'}/>
             <ListItemSecondaryAction>
             <Slider
               value={disTance}
               min={1}
               max={100}
               step={1}
               aria-labelledby="slider-icon"
               onChange={this.handleChangeSlider}
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
                 value={this.state.genDER}
                 onChange={this.handleChangeGenDer('genDER')}
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
             <ListItem>
               <ListItemText primary="Age range of Match"/>
               <ListItemSecondaryAction>
                 <TextField
                   select
                   endAdornment={<InputAdornment position="end">yrs</InputAdornment>}
                   style={styles.select1}/>
               </ListItemSecondaryAction>
             </ListItem>
         </List>
         <List subheader="Status">
         <Divider component="li" variant="inset" />
          <ListItem>
          <ListItemText primary="Hookup" style={styles.li}/>
            <Switch
              checked={this.state.hookup}
              onChange={this.handleChanger('hookup')}
              style={styles.interes}
              value="hookup"
              color="secondary"
            />
          </ListItem>
          <Divider component="li" variant="inset" />
          <ListItem>
          <ListItemText primary="Escort" style={styles.li}/>
            <Switch
              checked={this.state.escort}
              onChange={this.handleChanger('escort')}
              style={styles.interes}
              value="escort"
              color="secondary"
            />
          </ListItem>
          <Divider component="li" variant="inset" />
          <ListItem>
          <ListItemText primary="Dating" style={styles.li}/>
            <Switch
              checked={this.state.dating}
              onChange={this.handleChanger('dating')}
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
              checked={this.state.dogs}
              onChange={this.handleChanger('dogs')}
              style={styles.interes}
              value="dogs"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
             <ListItemText primary="Cats" style={styles.li}/>
            <Switch
              checked={this.state.cats}
              onChange={this.handleChanger('cats')}
              style={styles.interes}
              value="cats"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
             <ListItemText primary="Rabbits" style={styles.li}/>
            <Switch
              checked={this.state.rabbits}
              onChange={this.handleChanger('rabbits')}
              style={styles.interes}
              value="rabbits"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
             <ListItemText primary="Birds" style={styles.li}/>
            <Switch
              checked={this.state.birds}
              onChange={this.handleChanger('birds')}
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
              checked={this.state.athletics}
              onChange={this.handleChanger('athletics')}
              style={styles.interes}
              value="athletics"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
            <ListItemText primary="Indoor Games" style={styles.li}/>
            <Switch
              checked={this.state.games}
              onChange={this.handleChanger('indoorgames')}
              style={styles.interes}
              value="indoorgames"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
       <ListItemText primary="Gymnastics" style={styles.li}/>
            <Switch
              checked={this.state.sport}
              onChange={this.handleChanger('gymnastics')}
              style={styles.interes}
              value="gymnastics"
              color="secondary"
            />
           </ListItem>
           <Divider component="li" variant="inset" />
          <ListItem>
          <ListItemText primary="Soccer" style={styles.li}/>
            <Switch
              checked={this.state.soccer}
              onChange={this.handleChanger('soccer')}
              style={styles.interes}
              value="soccer"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
          <ListItem>
          <ListItemText primary="Swimming" style={styles.li}/>
            <Switch
              checked={this.state.swimming}
              onChange={this.handleChanger('swimming')}
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
              checked={this.state.pop}
              onChange={this.handleChanger('pop')}
              style={styles.interes}
              value="pop"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
            <ListItemText primary="Rock_n_Roll" style={styles.li}/>
            <Switch
              checked={this.state.rock_n_Roll}
              onChange={this.handleChanger('rock_n_Roll')}
              style={styles.interes}
              value="rock_n_Roll"
              color="secondary"
            />  
            </ListItem>
            <Divider component="li" variant="inset" />
            <ListItem>
            <ListItemText primary="Afro Beats" style={styles.li}/>
            <Switch
              checked={this.state.rock_n_Roll}
              onChange={this.handleChanger('afroBeats')}
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
              checked={this.state.health}
              onChange={this.handleChanger('health')}
              style={styles.interes}
              value="health"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
        <ListItem>
        <ListItemText primary="Philosophy" style={styles.li}/>
            <Switch
              checked={this.state.philosophy}
              onChange={this.handleChanger('philosophy')}
              style={styles.interes}
              value="philosophy"
              color="secondary"
            />
             </ListItem>
             <Divider component="li" variant="inset" />
         
      
          <ListItem>
          <ListItemText primary="Sight Seeing" style={styles.li}/>
            <Switch
              checked={this.state.sightSeeing}
              onChange={this.handleChanger('sightSeeing')}
              style={styles.interes}
              value="sightSeeing"
              color="secondary"
            />
            </ListItem>
         <Divider component="li" variant="inset" />
         <ListItem>
         <ListItemText primary="Movies" style={styles.li}/>
            <Switch
              checked={this.state.movies}
              onChange={this.handleChanger('movies')}
              style={styles.interes}
              value="movies"
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
       <ListItem>
       <ListItemText primary="Technology" style={styles.li}/>
            <Switch
              checked={this.state.technology}
              onChange={this.handleChanger('technology')}
              style={styles.interes}
              value="technology "
              color="secondary"
            />
            </ListItem>
            <Divider component="li" variant="inset" />
       <ListItem>
       <ListItemText primary="Photography" style={styles.li}/>
            <Switch
              checked={this.state.technology}
              onChange={this.handleChanger('photography')}
              style={styles.interes}
              value="photography "
              color="secondary"
            />
            </ListItem>
         </List>
           </div>
         </TabContainer>}
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
  fontFamily: 'flame fetish regular',
  fontWeight: "bold",
  fontSize:39,
},
button:{
  marginLeft:"auto",
  fontFamily: 'flame fetish regular',
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
    }
}
export default EditProfile
