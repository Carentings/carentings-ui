import  React,{useRef} from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Box, Card } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import InputForm from "../Components/InputForm";
import AppBar from "../Components/AppBar";
import Carousel from "../Components/Carousel";
import Stack from "@mui/material/Stack";
import AboutUs from'./AboutUs';
import HomeFooter from './HomeFooter';
import TestimonialPage from "./TestimonialPage";

const Container = styled("div")({
  position: "relative",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // Remove the backgroundImage from here
});

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backdropFilter: "blur(255px)", // Apply the blur effect
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
});

export default function ColumnsGrid() {
  const aboutUsRef = useRef(null);
  return (
    <>
    <header>
    <Container>
      <Carousel />
      <AppBar  />
      <FormContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <StyledStack spacing={2}>
              <Typography variant="h4">
                Explore - Rent - Enjoy - Repeat
              </Typography>

              <InputForm />
            </StyledStack>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </FormContainer>
    
    </Container>
   </header>
    <section>
    <AboutUs ref={aboutUsRef}></AboutUs>
    </section>
    <section>
    <TestimonialPage/>
    </section>
    <footer>
    <HomeFooter/></footer>
    
    </>
  );
}
