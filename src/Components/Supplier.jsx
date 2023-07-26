import React from "react";
import { Avatar, Button, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import avatarImg from '../Assets/Images/avatar.png'
const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent", // Use your preferred background color
    padding: "2px",
    marginTop: "80px",
  },
  avatar: {
    marginRight: "8px",
  },
  supplierName: {
    marginRight: "8px",
    marginLeft:'20px'
  },
  viewMoreButton: {
    marginLeft: "auto",
   
    color: "#323232", // Set the text color to white
  },
};

const Supplier = (props) => {
  return (
    <div style={styles.root}>
      <>
      
      <Avatar alt="Remy Sharp" src={avatarImg} />
        <Typography style={styles.supplierName}>{props.name}</Typography>
      </>
      <Button variant="text" style={styles.viewMoreButton}>
        View More
      </Button>
    </div>
  );
};

export default Supplier;
