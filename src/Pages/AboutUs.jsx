import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const AboutUsPage = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '80px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#323232', fontWeight: 'bold' }}>
        About Us
      </Typography>
      <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="body1" gutterBottom sx={{ color: '#666666' }}>
          Welcome to our startup! We are a platform that makes renting things easy and convenient. Our goal is to provide a seamless and hassle-free experience for both renters and owners. Whether you need tools, equipment, or other items for a short-term project, event, or adventure, we've got you covered.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: '#666666' }}>
          As a team of passionate individuals, we believe in the power of sharing resources and reducing waste. By renting instead of buying, you not only save money but also contribute to a more sustainable future. Our platform connects renters with owners who are willing to share their belongings, creating a community that values collaboration and sustainability.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: '#666666' }}>
          We are committed to providing the best possible service and experience for our users. Our platform is designed to be user-friendly, secure, and efficient. We continuously work to improve and expand our offerings to meet the needs of our growing community.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: '#666666' }}>
          Thank you for being a part of our journey. We look forward to serving you and making renting a breeze!
        </Typography>
      </Box>
      <Button variant="contained" color="primary" sx={{ borderRadius: '30px' }}>
        Get Started
      </Button>
    </Container>
  );
};

export default AboutUsPage;
