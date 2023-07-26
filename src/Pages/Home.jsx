import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography, Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import InputForm from '../Components/InputForm';
import AppBar from '../Components/AppBar';
// import Carousel from '../Components/Carousel';
import Stack from '@mui/material/Stack';

import Image from '../Assets/Images/3.jpg';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Container = styled('div')({
  position: 'relative',
  // height: '100vh',
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'center',
  paddingLeft: '50px',
  backgroundImage: `url(${Image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: '100%', // or 'cover' to maintain aspect ratio
  height: '100vh', // Fill the height of the screen
  // width: '100%', // Fill the width of the screen
});


const FormContainer = styled(Box)(({ theme }) => {
  return ({
    // backgroundColor: theme.palette.background.paper,
    // color:'black',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    // backdropFilter: 'blur(50px)', // Apply the blur effect
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
  });
});

const StyledStack = styled(Stack)({
  color: 'black',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'left',
  gap: '16px',
});

export default function ColumnsGrid() {
  return (
    <Container >
      {/* <Carousel/> */}
      <AppBar />
      <FormContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <StyledStack spacing={2}>
              <Typography variant="h4">
                Explore - Rent - Enjoy - Repeat
              </Typography>
              <InputForm/>
            </StyledStack>
          </Grid>
        </Grid>
      </FormContainer>
       
    </Container>

    
  );
}
