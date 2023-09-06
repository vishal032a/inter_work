import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia} from '@mui/material';
import Navbar from '../../Layouts/Navbar/Navbar';
import './Cart.css'
import Footer from '../../Layouts/Footer/Footer';
import t_shirt from './t_shirt.png'
const products = [
  { id: 1, image:t_shirt , name: 'Product 1', price: 10 , quantity: 2 },
  { id: 2, image:t_shirt , name: 'Product 2', price: 15 , quantity: 1 },
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
        <div className='content_container'>
        <Grid container spacing={2} style={{ justifyContent: 'space-between' }}>
            {products.map((product) => (
            <Grid item xs={12} md={6} key={product.id} style={{ margin: '2%' }}>
                <Card style={{ display: 'flex' }}>
                <CardMedia>
                  <img src={product.image} alt="tshirt" style={{width:'40%'}} />
                </CardMedia>
                <CardContent>
                  <div>
                    <Typography variant="h6">Product: {product.name}</Typography>
                    <Typography>Price: ${product.price}</Typography>
                    <Typography>Quantity: {product.quantity}</Typography>
                    {/* You can add more details here */}
                  </div>
                </CardContent>
              </Card>
            </Grid>
            ))}
        </Grid>

        {/* Summary */}
        <Grid
            item
            xs={12}
            md={3}
            style={{
            marginTop: '10%',
            position: 'absolute',
            right:'2%', // Position on the right side
            top: 0, // Align with the top
            }}
        >
            <Card>
            <CardContent>
                <Typography variant="h6">Summary</Typography>
                <Typography>Total Items: {totalItems}</Typography>
                <Typography>Total Amount: ${totalAmount}</Typography>
                {/* Add more summary items like discounts, taxes, etc. */}
                <Typography>Total Payable Amount: ${totalAmount}</Typography>
            </CardContent>
            </Card>
        </Grid>
        </div>
        <Footer bgcol="white" textcol="black" />
        </div>
  );
};

export default Cart;