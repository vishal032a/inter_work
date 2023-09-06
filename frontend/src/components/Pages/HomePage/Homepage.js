import React from 'react'
import Navbar from '../../Layouts/Navbar/Navbar'
import {Link} from "react-router-dom";
// import Login from '../../Login/Login';
// import Signup from '../../Signup/Signup'
import ProductCard from '../../Layouts/Cards/ProductCard';
import { Grid, Paper } from '@mui/material';
import shirt from '../../Layouts/Cards/t_shirt.png'
import Banner from '../../Layouts/Banner/Banner'
import Footer from '../../Layouts/Footer/Footer'

import data from '../data'
const Homepage = () => {
    // const location = useLocation();
    // const isLoginPagesOrSignup = location.pathname === "/login" || location.pathname === "/signup"
  return (
    <>
    <Navbar/>
    <Banner/>
        <div style={{maxWidth:'100%',marginLeft:'4%',marginRight:'4%'}}>
        <Grid container spacing={1}>
        {data.map((val, index) => (
          <Grid item xs={3} md={2} key={index}>
            <Paper>
              <Link to='/product_details'>
                <ProductCard image={shirt} title={val.title} description={val.description} price={val.price} />
              </Link>
            </Paper>
          </Grid>
         ))} 
        </Grid>
        </div>
    <Footer/>

    </>
  )
}

export default Homepage
