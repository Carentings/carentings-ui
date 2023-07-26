import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ButtonBase, Skeleton } from "@mui/material";

import Rating from "./Rating";
const styles = {
  media: {
    height: 200,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  contentWrapper: {
    backgroundColor: "transparent",
    padding: "8px", // Adjust padding as needed
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  locationTag: {
    color: "gray",
    fontSize: 12,
    marginBottom: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
  },
  priceLabel: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 4,
    color: "#323232",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
  addToCartButton: {
    color: "white",
    backgroundColor: "#323232",
  },
};

export default function MediaCard(props) {
  const handleAddToCart = () => {
    // Add to cart functionality
  };
  const handleCardClick = () => {
    // Implement your handleCardClick logic here
    console.log(`Card clicked: ${props.name}`);
  };
  // Use the "loading" prop to show the Skeleton effect while the content is loading.
  if (props.loading) {
    return (
      <ButtonBase onClick={handleCardClick}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" height={200} />
          </Grid>
          <Grid item xs={12} style={styles.contentWrapper}>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="rectangular" width="100px" height="20px" />
          </Grid>
        </Grid>
      </ButtonBase>
    );
  }

  return (
    <ButtonBase onClick={handleCardClick}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div
            style={{ ...styles.media, backgroundImage: `url(${props.image})` }}
          />
        </Grid>
        <Grid item xs={12} style={styles.contentWrapper}>
          <Typography style={styles.title} variant="h6" component="div">
            {props.name}
          </Typography>
          <Typography style={styles.locationTag} variant="body2" component="p">
            {props.location}
          </Typography>

          <div style={styles.price}>
            <Typography style={styles.priceLabel} variant="body1" component="p">
              {props.price}
            </Typography>
          </div>
          <div>
            <Rating />
          </div>
          <div style={styles.actions}>
            <Button
              size="small"
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              onClick={handleAddToCart}
              style={styles.addToCartButton}
            >
              Add to Cart
            </Button>
            <Button size="small" style={{ color: "#323232" }}>
              Learn More
            </Button>
          </div>
        </Grid>
      </Grid>
    </ButtonBase>
  );
}
