import React from 'react';
import { Grid, Typography} from '@mui/material';
import Navbar from '../../Layouts/Navbar/Navbar';
import './Cart.css'
import Footer from '../../Layouts/Footer/Footer';
import t_shirt from './t_shirt.png'
const products = [
  { id: 1, image:t_shirt , name: 'Game Over Black Man T-shirt ', price: 10 , quantity: 2 },
  { id: 2, image:t_shirt , name: 'Game Over Black Man T-shirt', price: 15 , quantity: 1 },
  // Add more products here
];

const Cart = () => {
  const calculateTotal = () => {
    let totalItems = 0;
    let totalAmount = 0;

    products.forEach((product) => {
      totalItems += product.quantity;
      totalAmount += product.price * product.quantity;
    });

    return { totalItems, totalAmount };
  };

  const { totalItems, totalAmount } = calculateTotal();

  return (
        <div className='cart_section'>
        <Navbar />

        <div style={{}}>
        <Grid container spacing={2} style={{ display:'flex'}}>
          <Grid item>
            <Grid container>
            {products.map((product) => (
            <Grid item xs={12} md={6} key={product.id} style={{ margin: '2%' }}>
              <div style={{display:'flex', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',borderRadius:'10px'}}>
                <img src={product.image} alt="pro_img" style={{width:'30%'}}/>
                <div style={{margin:'8%'}}>
                  <Typography variant='h6' >{product.name}</Typography>
                  <Typography variant='subtitle2' > price: {product.price}</Typography>
                  <Typography variant='subtitle2' >quantity: {product.quantity}</Typography>
                </div>
              </div>
            </Grid>
            ))}
            </Grid>
          </Grid>
        </Grid> 

        {/* Summary */}
        <Grid
            item
            xs={8}
            md={6}
            style={{
            marginTop: '10%',
            right:'2%', // Position on the right side
            top: 0, // Align with the top
            }}
        >
            <div>
                <Typography variant="h6">Summary</Typography>
                <Typography>Total Items: {totalItems}</Typography>
                <Typography>Total Amount: ${totalAmount}</Typography>
                <Typography>Total Payable Amount: ${totalAmount}</Typography>
            </div>
        </Grid>
        </div>

        <Footer bgcol="white" textcol="black" />
        </div>
  );
};

export default Cart;