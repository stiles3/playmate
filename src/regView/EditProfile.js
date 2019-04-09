import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {Avatar,Card,CardMedia,Tabs,Tab,Typography,TextField,AppBar,Toolbar,Button} from '@material-ui/core'
import PropTypes from 'prop-types'
import {FormGroup,Switch,FormControlLabel,InputAdornment,MenuItem} from '@material-ui/core'

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
    philosophy:false ,             
    soccer:false,
    music:false  ,          
    rock_n_Roll:false,
    sport:false,                        
    swimming:false,
    dogs:false,                         
    movies:false,
    sightSeeing:false,              
    games:false,
    health:false,                       
    technology:false,
    aGe:'18',
    ethniCity:'American Indian or Alaska Native',
    heiGht:'160',
    gender:'male',
    bodyType:'slim',
    genDER:'female',
    disTance:'1'
  };

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
  render() {
const { value } = this.state;
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
const DISTANCE=[
  {
    value:"1",
    label:"1"
  },
  {
    value:"2",
    label:"2"
  },
  {
    value:"3",
    label:"3"
  },
  {
    value:"4",
    label:"4"
  },
  {
    value:"5",
    label:"5"
  },
  {
    value:"6",
    label:"6"
  },
  {
    value:"7",
    label:"7"
  },
  {
    value:"8",
    label:"8"
  },
  {
    value:"9",
    label:"9"
  },
  {
    value:"10",
    label:"10"
  },
  {
    value:"11",
    label:"11"
  },
  {
    value:"12",
    label:"12"
  },
  {
    value:"13",
    label:"13"
  },
  {
    value:"14",
    label:"14"
  },
  {
    value:"15",
    label:"15"
  },

  {
    value:"16",
    label:"16"
  },
  {
    value:"17",
    label:"17"
  },
  {
    value:"18",
    label:"18"
  },
  {
    value:"19",
    label:"19"
  },
  {
    value:"20",
    label:"20"
  },
  {
    value:"21",
    label:"21"
  },
  {
    value:"22",
    label:"22"
  },
  {
    value:"23",
    label:"23"
  },
  {
    value:"24",
    label:"24"
  },
  {
    value:"25",
    label:"25"
  },
  {
    value:"26",
    label:"26"
  },
  {
    value:"27",
    label:"27"
  },
  {
    value:"28",
    label:"28"
  },
  {
    value:"29",
    label:"29"
  },
  {
    value:"30",
    label:"30"
  },
  {
    value:"31",
    label:"31"
  },
  {
    value:"32",
    label:"32"
  },
  {
    value:"33",
    label:"33"
  },

  {
    value:"34",
    label:"34"
  },
  {
    value:"35",
    label:"35"
  },
  {
    value:"36",
    label:"36"
  },
  {
    value:"37",
    label:"37"
  },
  {
    value:"38",
    label:"38"
  },
  {
    value:"39",
    label:"39"
  },
  {
    value:"40",
    label:"40"
  },
  {
    value:"41",
    label:"41"
  },
  {
    value:"42",
    label:"42"
  },
  {
    value:"43",
    label:"43"
  },
  {
    value:"44",
    label:"44"
  },
  {
    value:"45",
    label:"45"
  },
  {
    value:"46",
    label:"46"
  },
  {
    value:"47",
    label:"47"
  },
  {
    value:"48",
    label:""
  },
  {
    value:"49",
    label:"49"
  },
  {
    value:"50",
    label:"50"
  },
  {
    value:"51",
    label:"51"
  },

  {
    value:"52",
    label:"52"
  },
  {
    value:"53",
    label:"53"
  },
  {
    value:"54",
    label:"54"
  },
  {
    value:"55",
    label:"55"
  },
  {
    value:"56",
    label:"56"
  },
  {
    value:"57",
    label:"57"
  },
  {
    value:"58",
    label:"58"
  },
  {
    value:"59",
    label:"59"
  },
  {
    value:"60",
    label:"60"
  },
  {
    value:"61",
    label:"61"
  },
  {
    value:"62",
    label:"62"
  },
  {
    value:"63",
    label:"63"
  },
  {
    value:"64",
    label:"64"
  },
  {
    value:"65",
    label:"65"
  },
  {
    value:"66",
    label:"66"
  },
  {
    value:"67",
    label:"67"
  },
  {
    value:"68",
    label:"68"
  },
  {
    value:"69",
    label:"69"
  },

  {
    value:"70",
    label:"70"
  },
  {
    value:"71",
    label:"71"
  },
  {
    value:"72",
    label:"72"
  },
  {
    value:"73",
    label:"73"
  },
  {
    value:"74",
    label:"74"
  },
  {
    value:"75",
    label:"75"
  },
  {
    value:"76",
    label:"76"
  },
  {
    value:"77",
    label:"77"
  },
  {
    value:"78",
    label:"78"
  },
  {
    value:"79",
    label:"79"
  },
  {
    value:"80",
    label:"80"
  },
  {
    value:"81",
    label:"81"
  },
  {
    value:"82",
    label:"82"
  },
  {
    value:"83",
    label:"83"
  },
  {
    value:"84",
    label:"84"
  },
  {
    value:"85",
    label:"85"
  },
  {
    value:"86",
    label:"86"
  },
  {
    value:"87",
    label:"87"
  },

  {
    value:"88",
    label:"88"
  },
  {
    value:"89",
    label:"89"
  },
  {
    value:"90",
    label:"90"
  },
  {
    value:"91",
    label:"91"
  },
  {
    value:"92",
    label:"92"
  },
  {
    value:"93",
    label:"93"
  },
  {
    value:"94",
    label:"94"
  },
  {
    value:"95",
    label:"95"
  },
  {
    value:"96",
    label:"96"
  },
  {
    value:"97",
    label:"97"
  },
  {
    value:"98",
    label:"98"
  },
  {
    value:"99",
    label:"99"
  },
  {
    value:"100",
    label:"100"
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
          <TextField 
          style={styles.username}
          placeholder="First Name"
          label="First Name"
          />
          <br/>
           <TextField 
          style={styles.username}
          placeholder="Last Name"
          label="Last Name"
          />
          <br/>
          <TextField 
          style={styles.username}
          placeholder="Username"
          label="Username"
          helperText="This is your display name"
          />
          <br/>
          <TextField
            label="Age"
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
           <br/>
           <TextField
             label="Ethnicity"
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
           <br/>
           <TextField
             label="Height"
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
           <TextField
             label="BodyType"
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
            <TextField
             label="Gender"
            select
            value={this.state.gender}
            onChange={this.handleChangeHeight('gender')}
            style={styles.select1}
           > {GENDER.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} </TextField>     
           <textarea 
           cols={50} rows={10} 
            placeholder="Write about yourself......."
            
           style={{
             position:"absolute",
             top:"0",
            bottom:"0",
             left:"0",
             right:"0",
             height:280,
             width:500,
             alignItems: "center",
             justifyContent: "center",
             marginTop:520,
             marginLeft:"auto",
             marginRight:"auto",
             backgroundColor:"transparent",
             fontSize:30,
             fontFamily:"courier new",
             color:"white",
             borderLeftColor:"transparent",
             borderRightColor:"transparent",
             borderTopColor:"transparent",
             borderBottomColor:"black",
             focus:{
               outline:"none"
             }
          }}
           />
        </TabContainer>}
        {value === 1 && 
        <TabContainer> 
          <FormGroup row>
          <FormControlLabel
          control={
            <Switch
              checked={this.state.diet}
              onChange={this.handleChanger('diet')}
              value="diet"
              color="secondary"
            />
          }
          label="Diet"/>
            <FormControlLabel
          control={
            <Switch
              checked={this.state.smoke}
              onChange={this.handleChanger('smoke')}
              value="smoke"
              color="secondary"
            />
          }
          label="Smoke"/>
          
            <FormControlLabel
          control={
            <Switch
              checked={this.state.drink}
              onChange={this.handleChanger('drink')}
              value="drink"
              color="secondary"
            />
          }
          label="Drink"/>
          
          <FormControlLabel
          control={
            <Switch
              checked={this.state.drugs}
              onChange={this.handleChanger('drugs')}
              value="drugs"
              color="secondary"
            />
          }
          label="Drugs"/> 
         </FormGroup>
         <Typography variant='h6' color='inherit' style={styles.inter}>
            Discovery Setting
         </Typography>
         <TextField
          select
          label="Sex"
          value={this.state.genDER}
          onChange={this.handleChangeGenDer('genDER')}
          style={styles.select1}
          helperText="Gender you are interested in">
          {GendeR.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          <TextField
          select
          label="Distance"
          value={this.state.disTance}
          onChange={this.handleChangeDistance('disTance')}
          helperText="Maximum distance of Chat"
          InputProps={{
          endAdornment:<InputAdornment position="end">Mi</InputAdornment>}}
          style={styles.select1}>
          {DISTANCE.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          <TextField
          select
          label="Age"
          helperText="Age Range of Match"
          endAdornment={<InputAdornment position="end">yrs</InputAdornment>}
          style={styles.select1}/>
        </TabContainer>}
        {value === 2 && 
        <TabContainer> 
          <FormControlLabel
          control={
            <Switch
              checked={this.state.dogs}
              onChange={this.handleChanger('dogs')}
              style={styles.interes}
              value="dogs"
              color="secondary"
            />
          }
          label="Dogs"/>
            <FormControlLabel
          control={
            <Switch
              checked={this.state.games}
              onChange={this.handleChanger('games')}
              style={styles.interes}
              value="games"
              color="secondary"
            />
          }
          label="Games"/>
          
          <FormControlLabel
          control={
            <Switch
              checked={this.state.health}
              onChange={this.handleChanger('health')}
              style={styles.interes}
              value="health"
              color="secondary"
            />
          }
          label="Health"/> 
         <FormControlLabel
          control={
            <Switch
              checked={this.state.philosophy}
              onChange={this.handleChanger('philosophy')}
              style={styles.interes}
              value="philosophy"
              color="secondary"
            />
          }
          label="Philosophy"/>
          <br/>
            <FormControlLabel
          control={
            <Switch
              checked={this.state.music}
              onChange={this.handleChanger('music')}
              style={styles.interes}
              value="music"
              color="secondary"
            />
          }
          label="Music"/>
          
            <FormControlLabel
          control={
            <Switch
              checked={this.state.sport}
              onChange={this.handleChanger('sport')}
              style={styles.interes}
              value="sport"
              color="secondary"
            />
          }
          label="Sport"/>
          
          <FormControlLabel
          control={
            <Switch
              checked={this.state.sightSeeing}
              onChange={this.handleChanger('sightSeeing')}
              style={styles.interes}
              value="sightSeeing"
              color="secondary"
            />
          }
          label="SightSeeing"/> 

<FormControlLabel
          control={
            <Switch
              checked={this.state.soccer}
              onChange={this.handleChanger('soccer')}
              style={styles.interes}
              value="soccer"
              color="secondary"
            />
          }
          label="Soccer"/>
          <br/>
            <FormControlLabel
          control={
            <Switch
              checked={this.state.rock_n_Roll}
              onChange={this.handleChanger('rock_n_Roll')}
              style={styles.interes}
              value="rock_n_Roll"
              color="secondary"
            />
          }
          label="Rock_n_Roll"/>
          
            <FormControlLabel
          control={
            <Switch
              checked={this.state.swimming}
              onChange={this.handleChanger('swimming')}
              style={styles.interes}
              value="swimming"
              color="secondary"
            />
          }
          label="Swimming"/>
          
          <FormControlLabel
          control={
            <Switch
              checked={this.state.movies}
              onChange={this.handleChanger('movies')}
              style={styles.interes}
              value="movies"
              color="secondary"
            />
          }
          label="Movies"/> 

<FormControlLabel
          control={
            <Switch
              checked={this.state.technology}
              onChange={this.handleChanger('technology')}
              style={styles.interes}
              value="technology "
              color="secondary"
            />
          }
          label="Technology"/>
           
         
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
select:{
  width:90,
  margin:10
  
  },
  select1:{
    width:90,
    margin:10
    
    },
    interes:{
     // margin: 10
    }
}
export default EditProfile
