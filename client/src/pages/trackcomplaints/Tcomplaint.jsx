import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Container, Grow, Grid } from '@material-ui/core';
import './index.css';
import Navbar1 from "../../components/navbar1/Navbar1";
import useStyles from './styles';


const Tcomplaint= ({ setCurrentId })  => {
  const [postData, setPostData] = useState({ username: '', email: '' });
    const classes = useStyles();

  const clear = () => {
    setCurrentId(0);
    setPostData({ username: '', email: '' });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
  };
  return (
    
    <Grow in>
       
        <Container> 
        <Navbar1 />
            <Grid Container justifyContent="space-between" alignItems="center" spacing={2}>
                <Grid container item xs={12} sm={4}>        
                </Grid>
                
                <Paper className="{classes.paper}">
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                 <Typography variant="h6"></Typography>
                 <Typography variant="h6"> Track Complaint </Typography>
                 <TextField name="" variant="outlined" label="" fullWidth/>
                 <TextField name="" variant="outlined" label="" fullWidth/>
                 <TextField name="username" variant="outlined" label="Please Enter Your Registered UserName" fullWidth/>
                 <TextField name="email" variant="outlined" label="Please Enter Your Registered Email id" fullWidth/>
                 <Button className="" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                 
                 </form>
                 </Paper>
            </Grid> 
            
        </Container>
    </Grow>
    )
  }
     
                
export default Tcomplaint;