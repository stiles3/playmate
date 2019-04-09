import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {Grid} from '@material-ui/core'


export class Profile extends Component {
  render() {
    return (
     <MuiThemeProvider>
      <React.Fragment>
      <Grid container spacing={13}>
      
      <Grid item xs={6}>
      ddddddddddddddd
      </Grid>
      <Grid item xs={6}>
      dddddddddddddd
      </Grid>
      <Grid item xs={6}>
      dddddddddddd
      </Grid>
      </Grid>
      </React.Fragment>
</MuiThemeProvider>
    )
  }
}

export default Profile
