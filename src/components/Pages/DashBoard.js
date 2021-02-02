import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import AppBar from "@material-ui/core/AppBar"
import  Toolbar  from '@material-ui/core/Toolbar'
import classNames from 'classnames'
import { Drawer, IconButton, List, ListItem, Typography, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import ChervonLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
const drawerWidth = 240 ;
const styles = theme => ({
    toolbar : {
        paddingRight : 24
    }, 
    drawerPaper : {
        position : 'relative',
        whiteSpace : 'noWrap',
        width : drawerWidth
    },
    appBar : {
        //zIndex : theme.zIndex.drawer + 1,
        transition : theme.transitions.create(['width' , 'margin'], {
            easing : theme.transitions.easing.sharp,
            duration : theme.transitions.duration.leavingScreen,
            zIndex : theme.zIndex.drawer + 1
        })
    },
    
    appBarShift : {
        marginLeft : drawerWidth,
        width : `calc(100% - ${drawerWidth}px)`,
        transition : theme.transitions.create(['width' , 'margin'], {
            easing : theme.transitions.easing.sharp,
            duration : theme.transitions.duration.enteringScreen,
        })
    },
    toolbarIcon : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    }
})
class DashBoard extends Component {
    constructor(props){
        super(props)

        this.state = {
            open : true
        }
    }
    handleDrawerOpen = (e) => {
        this.setState({open : !this.state.open})
    }
    render(){
        const {classes} = this.props;
        return (
            <div>
            <AppBar className={classes.appBar}>
                <Toolbar className={classNames(classes.appBar ,this.state.open && classes.appBarShift)}>
                    <IconButton onClick ={this.handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component = "h1"
                        variant = "h6"
                        color="inherit"
                        noWrap
                    >
                        Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={true} classes={{paper : classes.drawerPaper}}>
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={this.handleDrawerOpen} >
                        <ChervonLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem>
                        DashBoard
                    </ListItem>
                </List>
            </Drawer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      auth : state.auth
    }
  }
  
  const mapDispatchToProps = dispatch => {
    
  }

  export default connect(mapStateToProps , mapDispatchToProps)(withRouter(withStyles(styles)(DashBoard)))
