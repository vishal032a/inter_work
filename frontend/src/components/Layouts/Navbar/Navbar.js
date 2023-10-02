import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo.png";
import NavIcons from "../NavbarIcons/NavIcons";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");



  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "white", // Customize the background color
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" style={{ color: "purple" }}>
          <img src={logo} alt="site_logo" style={{ width: "60px",margin:'2px'}} />
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isSmallScreen ? (
            <IconButton edge="start" color="black" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Typography variant="h6" style={{ color: "black", marginRight: "16px" }} ><Link to='/' style={{textDecoration:'none' , color:'black'}} >Home</Link> </Typography>
              <Typography variant="h6" style={{ color: "black", marginRight: "16px", marginLeft:'15px' }}> <Link to='/categories' style={{textDecoration:'none' , color:'black'}}> Categories</Link></Typography>
              <Typography variant="h6" style={{ color: "black", marginRight: "16px",marginLeft:'15px' }}> <Link to='Deals' style={{textDecoration:'none', color:'black'}} >Deals</Link> </Typography>
              <Typography variant="h6" style={{ color: "black", marginRight: "16px",marginLeft:'15px' }}> <Link to='/new' style={{textDecoration:'none' , color:'black'}} > New</Link></Typography>
            </>
          )}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Categories</MenuItem>
            <MenuItem onClick={handleMenuClose}>Deals</MenuItem>
            <MenuItem onClick={handleMenuClose}>What's new</MenuItem>
          </Menu>
        </div>
        <div style={{
        }}>
          <TextField
            variant="outlined"
            placeholder="Search here"
            borderRadius={50}
            style={{
              width: "100%",
              maxWidth: 300,
            }}
          />
        </div>

        <div style={{
        }}>
              <NavIcons/>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
