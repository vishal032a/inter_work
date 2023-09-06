import React from 'react';
import { Box, IconButton,} from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const  NavIcons= () => {
  return (
    <Box>
      <Link to="/cart">
        <IconButton style={{ color: 'black', marginRight: '12px' }}>
          <ShoppingCart color='black' />
        </IconButton>
      </Link>
      <Link to="/profile">
        <IconButton>
          <AccountCircle style={{ color: 'black', marginRight: '12px' }} />
        </IconButton>
      </Link>
    </Box>
  );
};

export default NavIcons;
