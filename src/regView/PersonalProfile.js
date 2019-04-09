import React, { Component } from 'react'
import {AppBar,Typography,Button,Toolbar, TextField,Paper,MenuItem,} from '@material-ui/core'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

export class PersonalProfile extends Component {
    state={
        gender:'male',
        
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
      continue = e => {
        e.preventDefault();
        this.props.nextRegStep();
      }
      back = e => {
        e.preventDefault();
        this.props.prevRegStep();
      }
  render() {
    const {value} = this.state
    const gender = [
        {
          value: 'male',
          label: 'Male',
        },
        {
          value: 'female',
          label: 'Female',
        },]
   const signs = [
       {
           value:'ram',
           label:'Aries'
       },
       {
        value:'bull',
        label:'Taurus'
    },
    {
        value:'twins',
        label:'Gemini'
    },
    {
        value:'crab',
        label:'Cancer'
    },
    {
     value:'lion',
     label:'Leo'
 },
 {
     value:'Virgin',
     label:'Virgo'
 },
 {
    value:' Scales',
    label:'Libra'
   },
   {
    value:'Scorpion',
    label:'Scorpio'
},
{
    value:'Archer',
    label:'Sagittarius'
   },
 {
    value:'goat',
    label:'Capricon'
},
{
 value:' Water Bearer',
 label:'Aquarius'
},


{
 value:'Fish',
 label:'Pisces'
}
   ]     
    return (
        <MuiThemeProvider>
        <React.Fragment>
            <AppBar position="static" style={styles.appbar}>
            <Toolbar>
            <Button color="inherit"
                onClick={this.back}
                 style={styles.button1}
                 >Prev</Button>
                <Typography variant="title" color="inherit" style={styles.typo1}>
                Personal Profile
                </Typography>
                <Button color="inherit"
                onClick={this.continue}
                 style={styles.button}
                 >Next</Button>
                 </Toolbar>
            </AppBar>
            <Paper style={styles.paper} elevation={10}
             >
            <TextField
            label="Height"
            style={styles.height}
            ></TextField>
            <TextField
            label="Body Type"
            style={styles.bodyType}
            ></TextField>
            <TextField
            select
            value={value}
            style={styles.select}
            onChange={this.handleChange('value')}>
            {gender.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
            <br/>
          <br/>
            <TextField
            label="Ethnicity"
            style={styles.ethnicity}
            ></TextField>
            <TextField
            label="Age"
            style={styles.age}
           ></TextField>
            <TextField
            select
            value={value}
            style={styles.select}
            onChange={this.handleChange('value')}>
            {signs.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
            <br/>
            <Typography variant="headline">
              Description
            </Typography>
            <textarea cols={50} rows={10} style={{
              marginLeft:-34
            }}/>

          </Paper>
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
    button1:{
        marginRight:"auto",
        fontFamily: 'flame fetish regular',
        fontWeight: "bold",
        fontSize:24,
       
      },
  
    typo1:{
      marginLeft:"auto",
      marginRight:"auto",
      fontFamily: 'flame fetish regular',
      fontWeight: "bold",
      fontSize:39,
    },
    height:{
     marginLeft:-170,
 //    borderColor:"#DAA520",
     borderStyle:"solid",
     borderWidth: "1px",
   borderBottomColor:"#e91e63",
   },
   bodyType:{
    marginLeft:70,
    borderStyle:"solid",
    borderWidth: "1px",
  borderBottomColor:"#e91e63",
  },
  ethnicity:{
    marginLeft:-200,
    borderStyle:"solid",
    borderWidth: "1px",
  borderBottomColor:"#e91e63",
  },
  age:{
    marginLeft:60,
    marginTop:0,
    borderStyle:"solid",
    borderWidth: "1px",
  borderBottomColor:"#e91e63",
  },
   paper:{
     width:900,
     height:400,
     marginLeft:"auto",
     marginRight:"auto",
     marginTop:100,
     borderRadius:15,
   },
   select:{
    marginLeft:50,
    marginTop:16,
    borderStyle:"solid",
    borderWidth: "1px",
   borderBottomColor:"#e91e63",
  },
  appbar:{
    color:"inherit",
    background:" linear-gradient(0.25turn, #e91e63, #f06292)",
    fontWeight: "bold",
    fontSize:39,
  },
  }

export default PersonalProfile
