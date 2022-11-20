import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Container, Grow, Grid } from '@material-ui/core';
import './index.css';
import Navbar1 from "../../components/navbar1/Navbar1";
import { createComplaint, updateComplaint } from '../../actions/posts';
import useStyles from './styles';



const Complaint = ({ setCurrentId })  => {
    const [postData, setPostData] = useState({ username: '', email: '', department: '', raisecomplaint: '',  attachfile: '' });
    const classes = useStyles();

    useEffect(() => {
        
      }, []);
    
    

  const clear = () => {
    setCurrentId(0);
    setPostData({ username: '', email: '', department: '', raisecomplaint: '', attachfile: '' });
    
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
                 <Typography variant="h6"> Register Complaint </Typography>
                 <TextField name="" variant="outlined" label="" fullWidth/>
                 <TextField name="username" variant="outlined" label="Please Enter Your UserName" fullWidth value={postData.username} onChange={(e) => setPostData({ ...postData, username: e.target.value })} />
                 <TextField name="email" variant="outlined" label="Please Enter Your valid Email id" fullWidth value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })}/>
                 <TextField name="dept" variant="outlined" label="Enter Department Name" fullWidth value={postData.dept} onChange={(e) => setPostData({ ...postData, dept: e.target.value })}/>
                 <TextField name="raisecomplaint" variant="outlined" label="Please Enter Complaint Details" fullWidth value={postData.raisecomplaint} onChange={(e) => setPostData({ ...postData, raisecomplaint: e.target.value })}/>
                 <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, attachfile: base64 })} /></div>
                 <Button className="" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                 <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                 </form>
                 </Paper>
            </Grid> 
            
        </Container>
    </Grow>
  );
};

export default Complaint;