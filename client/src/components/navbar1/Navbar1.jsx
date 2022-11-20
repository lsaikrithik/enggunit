import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import useStyles from './styles';


const Navbar1 = () => {
  const { user } = useContext(AuthContext);
  const classes = useStyles();

    
  return (
     
    <AppBar className={classes.appBar} postion="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading} variant="h5" align="center">Engineering Unit</Typography>
          </div> 
        <div> 
        <Button component={Link} to="/" variant="contained" color="primary">Home</Button> 
        </div>
        <div>
        <Button component={Link} to="/complaints" variant="contained" color="primary">Register Complaint</Button> 
        </div>
        <div>
        <Button component={Link} to="/trackcomplaints" variant="contained" color="primary">Track Complaint </Button> 
        </div>
        
        <Toolbar className={classes.toolbar}>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
     </Toolbar>
        </AppBar>

  );
};

export default Navbar1;
