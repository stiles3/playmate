import React, { Component } from 'react'
import {AppBar,Toolbar,Button,Typography,Checkbox,FormControlLabel,Paper} from '@material-ui/core'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

export class PrefInterest extends Component {
    state={
        diet:false,
        smoke:false,
        drink:false,
        drugs:false,
        interest:0,
        philosophy:false,
        music:false,
        traveling:false,
        sport:false,
        soccer:false,
        rock_n_roll:false,
        swimming:false,
        dogs:false,
        movies:false,
        sightseeing:false,
        games:false,
        health:false,
        technology:false,
        space:false,
        reading:false,
        business:false,
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
      back = e => {
        e.preventDefault();
        this.props.prevRegStep();
      } 
  render() {
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
                Preference & Interest
                </Typography>
                <Button color="inherit"
                onClick={this.continue}
                 style={styles.button}
                 >Finish</Button>
            </Toolbar>
            </AppBar>
            <Paper style={styles.paper} >
            <Typography variant='h6' color='secondary'style={styles.pref}>
             Preference
            </Typography>
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.diet}
              onChange={this.handleChange('diet')}
              value="diet"
              color="secondary"
            />
          }
          label="Diet"/>
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.smoke}
              onChange={this.handleChange('smoke')}
              value="smoke"
              color="secondary"
            />
          }
          label="Smoke"/>
          <br/>
          
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.drink}
              onChange={this.handleChange('drink')}
              value="drink"
              color="secondary"
            />
          }
          label="Drink"/>
          
          <FormControlLabel
          control={
            <Checkbox
              checked={this.state.drugs}
              onChange={this.handleChange('drugs')}
              value="drugs"
              color="secondary"
            />
          }
          label="Drugs"/>
          <br/>
          <Typography variant='h6' color='secondary' style={styles.inter}>
             Interest
            </Typography>
<FormControlLabel
          control={
            <Checkbox
              checked={this.state.philosophy}
              onChange={this.handleChange('philosophy')}
              value="philosophy"
              color="secondary"
            />
          }
          label="Philosophy"/>

<FormControlLabel
          control={
            <Checkbox
              checked={this.state.music}
              onChange={this.handleChange('music')}
              value="music"
              color="secondary"
            />
          }
          label="Music"/>
    <FormControlLabel
          control={
            <Checkbox
              checked={this.state.sport}
              onChange={this.handleChange('sport')}
              value="sport"
              color="secondary"
            />
          }
          label="Sport"/>
          <FormControlLabel
          control={
            <Checkbox
              checked={this.state.traveling}
              onChange={this.handleChange('traveling')}
              value="traveling"
              color="secondary"
            />
          }
          label="Traveling"/>

          <FormControlLabel
          control={
            <Checkbox
              checked={this.state.soccer}
              onChange={this.handleChange('soccer')}
              value="soccer"
              color="secondary"
            />
          }
          label="Soccer"/>   
           
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.rock_n_roll}
              onChange={this.handleChange('rock_n_roll')}
              value="rock_n_roll"
              color="secondary"
            />
          }
          label="Rock_n_Roll"/> 
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.swimming}
              onChange={this.handleChange('swimming')}
              value="swimming"
              color="secondary"
            />
          }
          label="Swimming"/> 
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.dogs}
              onChange={this.handleChange('dogs')}
              value="dogs"
              color="secondary"
            />
          }
          label="Dogs"/> 
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.movies}
              onChange={this.handleChange('movies')}
              value="movies"
              color="secondary"
            />
          }
          label="Movies"/> 
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.sightseeing}
              onChange={this.handleChange('sightseeing')}
              value="sightseeing"
              color="secondary"
            />
          }
          label="Sightseeing"/> 
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.games}
              onChange={this.handleChange('games')}
              value="games"
              color="secondary"
            />
          }
          label="Games"/> 
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.health}
              onChange={this.handleChange('health')}
              value="health"
              color="secondary"
            />
          }
          label="Health"/> 
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.technology}
              onChange={this.handleChange('technology')}
              value="technology"
              color="secondary"
            />
          }
          label="Technology"/> 
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.space}
              onChange={this.handleChange('space')}
              value="space"
              color="secondary"
            />
          }
          label="Space"/> 
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.reading}
              onChange={this.handleChange('reading')}
              value="reading"
              color="secondary"
            />
          }
          label="Reading"/> 
            <FormControlLabel
          control={
            <Checkbox
              checked={this.state.business}
              onChange={this.handleChange('business')}
              value="business"
              color="secondary"
            />
          }
          label="Business"/>    
          </Paper>
            </React.Fragment>
            </MuiThemeProvider>
    )
  }
}
const styles={
    button:{
        marginLeft:"auto",
       
       // width:70,
      },
      button1:{
          marginRight:"auto",
         
         // width:70,
        },
    diet:{

    },
    appbar:{
      color:"#DAA520",
      backgroundColor:"#212121",
    },
    paper:{
        backgroundColor:"#212121",
         width:300,
         height:500,
         marginLeft:"auto",
         marginRight:"auto",
         marginTop:100,
       //  borderColor:"#DAA520",
         borderStyle:"solid",
     //    borderRadius:20,
         borderStyle:"solid",
         borderTopColor:"#212121",
         borderLeftColor:"#212121",
         borderRightColor:"#DAA520",
       borderBottomColor:"#DAA520",
      //   marginBottom:"auto",
    
    
      //   marginBottom:"auto",
       },
    inter:{
     color:"#DAA520"
    },
    pref:{
        color:"#DAA520"
    }
}
export default PrefInterest
