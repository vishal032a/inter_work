import React from 'react'
import {Grid, Typography } from '@mui/material';
const Prices = ({price,original_price,discount}) => {
    return (
        <Grid container spacing={1}>
          <Grid item xs={4} style={{marginRight:'2%'}}>
            <Typography variant="body1" style={{paddingTop:'30%',fontWeight:'bold'}} >Rs.{price}/-</Typography>
          </Grid>
          <Typography variant="caption" style={{ paddingTop:'12%',textDecoration: 'line-through',margin:'2%'}}>
           Rs.{original_price}/-
          </Typography>
          <Grid item xs={4}>
            <div style={{backgroundColor:'#AD930A',borderRadius:'50%'}}>
              <Typography variant="body2" style={{paddingTop:'8%',paddingLeft:'20%',paddingRight:'5%',fontWeight:'bold',color:'white'}} >{discount} OFF</Typography>
            </div>
          </Grid>
        </Grid>
      );
}

export default Prices
