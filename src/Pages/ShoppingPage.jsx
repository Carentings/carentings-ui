import AppBar from "../Components/AppBar";
import MediaCard from "../Components/Card";
import React from 'react';
import { Grid } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Connect 4',
    location: 'New York, NY',
    price: "$19.99",
    image: require("../Assets/Images/CONNECT4.jpeg"),
  },
  {
    id: 2,
    name: 'Soft Play',
    location: 'Los Angeles, CA',
    price: "$24.99",
    image: require("../Assets/Images/GAME2.JPG"),
  },
  {
    id: 3,
    name: 'Corn Hole',
    location: 'Chicago, IL',
    price: '$29.99',
    image: require("../Assets/Images/GAME3.jpeg"),
  },
  {
    id: 1,
    name: 'Connect 4',
    location: 'New York, NY',
    price: "$19.99",
    image: require("../Assets/Images/CONNECT4.jpeg"),
  },
  {
    id: 2,
    name: 'Soft Play',
    location: 'Los Angeles, CA',
    price: "$24.99",
    image: require("../Assets/Images/GAME2.JPG"),
  },
  {
    id: 3,
    name: 'Corn Hole',
    location: 'Chicago, IL',
    price: '$29.99',
    image: require("../Assets/Images/GAME3.jpeg"),
  },
  // Add more products as needed
];

export default function ShoppingPage() {
  return (
    <div>
      <AppBar />
      <Grid container spacing={2} style={{marginTop:"60px"}}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <MediaCard
           // style={{"marignTop":"60px"}}
              name={product.name}
              location={product.location}
              price={product.price}
              image={product.image}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
