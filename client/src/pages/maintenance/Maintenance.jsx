import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Container, Grow, Grid } from '@material-ui/core';
import './index.css';
import Navbar from "../../components/navbar/Navbar";
import { createComplaint, updateComplaint } from '../../actions/posts';
import useStyles from './styles';



const Maintenance = ({ setCurrentId })  => {
    const [postData, setPostData] = useState({ dept: '', task: '', mode: '', status: '',  reportfile: '' });
    const classes = useStyles();

    useEffect(() => {
        
      }, []);
    
    

  const clear = () => {
    setCurrentId(0);
    setPostData({ dept: '', task: '', mode: '', status: '',  reportfile: '' });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    

   
  };
  return (
    
    <Grow in>
       
        <Container> 
        <Navbar />
            <Grid Container justifyContent="space-between" alignItems="center" spacing={2}>
                <Grid container item xs={12} sm={4}>        
                </Grid>
                
                <Paper className="{classes.paper}">
                 <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                 <Typography variant="h6"></Typography>
                 <Typography variant="h6"> Maintenance Data </Typography>
                 <TextField name="" variant="outlined" label="" fullWidth/>
                 <TextField name="dept" variant="outlined" label="Enter Dept Civil, Electrical, Horticulture,Housekeeping, Pest control" fullWidth value={postData.dept} onChange={(e) => setPostData({ ...postData, dept: e.target.value })} />
                 <TextField name="task" variant="outlined" label="Enter Task-To Be Accomplished" fullWidth value={postData.task} onChange={(e) => setPostData({ ...postData, task: e.target.value })}/>
                 <TextField name="mode" variant="outlined" label="Mode of Task" fullWidth value={postData.mode} onChange={(e) => setPostData({ ...postData, mode: e.target.value })}/>
                 <TextField name="status" variant="outlined" label="InProcess/Pending.Completed" fullWidth value={postData.status} onChange={(e) => setPostData({ ...postData, status: e.target.value })}/>
                 <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, reportfile: base64 })} /></div>
                 <Button className="" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                 <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                 </form>
                 </Paper>
            </Grid> 
            
        </Container>
    </Grow>
  );
};

export default Maintenance;