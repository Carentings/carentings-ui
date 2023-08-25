import AppBar from "../Components/AppBar";
import MediaCard from "../Components/Card";
import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import Supplier from "../Components/Supplier";

const products = [
  {
    supplierId: 1,
    supplierName: "Griselda Lazo ",
    products: [
      {
        id: 1,
        name: "Connect 4",
        location: "Fremont,CA",
        price: "$19.99",
        image: require("../Assets/Images/CONNECT4.jpeg"),
      },
      {
        id: 2,
        name: "Soft Play",
        location: "Fremont,CA",
        price: "$24.99",
        image: require("../Assets/Images/GAME2.JPG"),
      },
      {
        id: 3,
        name: "Corn Hole",
        location: "Fremont,CA",
        price: "$29.99",
        image: require("../Assets/Images/GAME3.jpeg"),
      },
      {
        id: 4,
        name: "Connect 4",
        location: "Fremont,CA",
        price: "$19.99",
        image: require("../Assets/Images/CONNECT4.jpeg"),
      },
      // Add more products for Supplier A as needed
    ],
  },
  {
    supplierId: 2,
    supplierName: "Erin Green",
    products: [
      {
        id: 1,
        name: "Connect 4",
        location: "Boston,MA",
        price: "$19.99",
        image: require("../Assets/Images/CONNECT4.jpeg"),
      },
      {
        id: 2,
        name: "Soft Play",
        location: "Boston,MA",
        price: "$24.99",
        image: require("../Assets/Images/GAME2.JPG"),
      },
      {
        id: 3,
        name: "Corn Hole",
        location: "Boston,MA",
        price: "$29.99",
        image: require("../Assets/Images/GAME3.jpeg"),
      },
       {
        id: 4,
        name: "Connect 4",
        location: "Boston,MA",
        price: "$19.99",
        image: require("../Assets/Images/CONNECT4.jpeg"),
      },
      // Add more products for Supplier B as needed
    ],
  },
  // Add more suppliers and their products as needed
];
export default function ShoppingPage(props) {
  return (
    <div style={{ padding: "0 80px" }}>
      <AppBar position= "fixed" sx={{ top: 0, backgroundColor: "#323232" }} buttonColor="white"/>
      {products.map((item) => (
        <div key={item.supplierId}>
          <Supplier name={item.supplierName} />
          <Grid container spacing={2}>
            {item.products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <MediaCard
                  name={product.name}
                  location={product.location}
                  price={product.price}
                  image={product.image}
                />
              </Grid>
            ))}
          </Grid>
           <div>
        <Divider style={{ marginTop: "20px" }} />
      </div>
        </div>
        
      ))}
     
    </div>
  );
}