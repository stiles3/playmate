import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Appbar from '@material-ui/core/AppBar'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import PersonIcon from '@material-ui/icons/Person';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import EditIcon from '@material-ui/icons/Edit';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';

const actions = [
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <PersonIcon />, name: 'Pofile' },

];
export class SearchList extends Component {
  state = {
    open: false,
  };
  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleOpen = () => {
    if (!this.state.hidden) {
      this.setState({
        open: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const { open } = this.state;
    return (
        <MuiThemeProvider>
        <React.Fragment>
          <div style={{width:910, marginLeft:"auto", height:"100vh" , backgroundColor:"#fafafa"} }>
              <Appbar position="static" style={styles.appbar} color="inherit">
               <h3>Username</h3>
              </Appbar>
              <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={this.handleOpen}
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          open={open}
          style={styles.speedial}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={this.handleClick}
            />
          ))}
        </SpeedDial>
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
    speedial:{
      marginTop:350,
      marginLeft:800,
     // background:" linear-gradient(0.25turn, #e91e63, #f06292)",
    }
}
export default SearchList
