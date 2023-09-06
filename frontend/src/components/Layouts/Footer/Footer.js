import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const Footer = ({bcol}) => {
  console.log(bcol);
  const col = bcol?bcol:'rgba(0,0,0,0)';
  return (
    <Box
      sx={{
        backgroundColor:col,
        paddingBottom: '8%',
        display: 'flex',
        justifyContent: 'space-between',
        margin:'10%  8%'
      }}
    >
      <div>
        <Typography variant="h6" style={{color:"white"}}>About</Typography>
        <Typography variant="body2" style={{color:"white"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
      <div>
        <Typography variant="h6" style={{color:"white"}}>Categories</Typography>
        <Typography variant="body2" style={{color:"white"}}>Category 1</Typography>
        <Typography variant="body2" style={{color:"white"}}>Category 2</Typography>
        {/* Add more categories */}
      </div>
      <div>
        <Typography variant="h6" style={{color:"white"}}>Contacts</Typography>
        <Typography variant="body2" style={{color:"white"}}>Contact us at: contact@example.com</Typography>
        <Box sx={{ display: 'flex', gap: '10px', marginTop: '5%' }}>
          <InstagramIcon sx={{ color: 'white' }} />
          <FacebookIcon sx={{ color: 'white' }} />
          <EmailIcon sx={{ color: 'white' }} />
        </Box>
      </div>
    </Box>
  );
};

export default Footer;
