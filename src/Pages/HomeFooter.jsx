
import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import logo from '../Assets/Images/carentings-logo.png';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#323232',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '16px',
      }}
    >
      {/* Company Logo */}
      <img src={logo} alt="Company Logo" style={{ height: '30px' }} />

      {/* Instagram Link */}
      <IconButton
        href="https://www.instagram.com/carentings/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        color="inherit"
      >
        <InstagramIcon />
      </IconButton>

      {/* Facebook Link */}
      <IconButton
        href="https://www.facebook.com/your_facebook_page/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        color="inherit"
      >
        <FacebookIcon />
      </IconButton>

      {/* Email */}
      <Box display="flex" alignItems="center">
        <MailOutlineIcon style={{ marginRight: '8px' }} />
        <Typography variant="body2">contact@company.com</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
