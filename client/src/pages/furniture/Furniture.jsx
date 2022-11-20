import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Container, Grow, Grid } from '@material-ui/core';
import './index.css';
import Navbar from "../../components/navbar/Navbar";
import useStyles from './styles';

const Furniture = ({ setCurrentId })  => {
    const [postData, setPostData] = useState({ furniture: '', quantity: '', price: '', purpose: '',  billfile: '' });
    const classes = useStyles();

    useEffect(() => {
        
      }, []);
    
    

  const clear = () => {
    setCurrentId(0);
    setPostData({ furniture: '', quantity: '', price: '', purpose: '',  billfile: ''});
    
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
                 <Typography variant="h6"> FURNITURE INVENTORY</Typography>
                 <TextField name="" variant="outlined" label="" fullWidth/>
                 <TextField name="furniture" variant="outlined" label="Enter Furniture Type-Chair/Table/Board/Projector etc.," fullWidth value={postData.furniture} onChange={(e) => setPostData({ ...postData, furniture: e.target.value })} />
                 <TextField name="quantity" variant="outlined" label="Please Enter Quantity of Purchase" fullWidth value={postData.quantity} onChange={(e) => setPostData({ ...postData, quantity: e.target.value })}/>
                 <TextField name="price" variant="outlined" label="Please Enter Total Price" fullWidth value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value })}/>
                 <TextField name="purpose" variant="outlined" label="Please Purpose of Prchase" fullWidth value={postData.purpose} onChange={(e) => setPostData({ ...postData, purpose: e.target.value })}/>
                 <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, billfile: base64 })} /></div>
                 <Button className="" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                 <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                 </form>
                 </Paper>
            </Grid> 
            
        </Container>
    </Grow>
  );
};

export default Furniture;