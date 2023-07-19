import React from "react";
import { styled } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel'; // Import the carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import Getty from "../Assets/Images/Getty.jpg";
import Tugofwar from "../Assets/Images/Tugofwar.jpg";
import Outdoorgames from "../Assets/Images/Outdoor-games.jpg";
const CarouselContainer = styled(Carousel)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh', // Set the height to fill the viewport
    maxHeight: '100%', // Set the maximum height to 100% of the container
  
    '& img': {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
    
    },
  });
function Container() {
    return (
        <CarouselContainer autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        <div>
          <img src={Getty} alt="Getty" />
        </div>
        <div>
          <img src={Tugofwar} alt="Tugofwar" />
        </div>
        <div>
          <img src={Outdoorgames} alt="Outdoorgames" />
        </div>
      </CarouselContainer>
      );
}

export default Container;