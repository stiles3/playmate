import React, { Component } from 'react'
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {Grid,Paper,IconButton,Tab,Tabs,AppBar,Typography,Fab,Toolbar} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import InboxIcon from '@material-ui/icons/Inbox'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import HelpIcon from '@material-ui/icons/Help'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import AddIcon from '@material-ui/icons/Add'
import MessageIcon from '@material-ui/icons/Message'
import PhoneIcon from '@material-ui/icons/Phone'

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

export class MainRoom extends Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
     <MuiThemeProvider>
      <React.Fragment>
      <Grid container spacing={13}>
      <Grid item xl={4}>
      <div style={{
          width:474,
          height:"100vh",
      //    borderStyle:"solid" 
          }}>
       <div>
      
        <AppBar position="static" style={styles.appbar} >
          <Tabs value={value} onChange={this.handleChange} variant="scrollable" scrollButtons="off">
            <Tab icon={<MessageIcon />} />
            <Tab icon={<FavoriteIcon />} />
            <Tab icon={< PhoneIcon/>} />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
          <Fab color="primary" aria-label="Add" style={styles.fab} >
        <AddIcon />
      </Fab></TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
      </div>
      
      </Grid>
      <Grid item xl={"auto"}>
      <div style={{
          width:861,
          height:"100vh",
    //      borderStyle:"solid"
      }}>
     
      </div>
      </Grid>
      </Grid>
      </React.Fragment>
</MuiThemeProvider>
    )
  }
}
const styles={
  person:{
    color:"#bdbdbd",
    width:50,
    height:50,
  },
  tab:{
    height:"100vh",
    width:"100vh"
  },
  appbar:{
    color:"#DAA520",
    backgroundColor:"#212121"
 //   width:406,
    //marginTop:"auto",
    //marginBottom:-17,
  //  bottom:0

  },
  fab:{
   marginTop:500,
   marginLeft:200,
   color:"#DAA520",
   backgroundColor:"#212121"
  }
}
export default MainRoom
