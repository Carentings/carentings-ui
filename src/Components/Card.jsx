import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    borderRadius: 8,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    border: 'none', // Remove border
    margin: '16px', // Add margin
  },
  cardMedia: {
    height: 200,
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  locationTag: {
    color: 'gray',
    fontSize: 12,
    marginBottom: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
  },
  priceLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 4,
    color: '#0071d1',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    marginLeft: 'auto',
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const handleAddToCart = () => {
    // Add to cart functionality
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image={props.image} title="Connect 4" />
      <CardContent className={classes.contentWrapper}>
        <Typography className={classes.locationTag} variant="body2" component="p">
        {props.location}
        </Typography>
        <Typography className={classes.title} variant="h6" component="div">
          {props.name}
        </Typography>
        <div className={classes.price}>
          <Typography className={classes.priceLabel} variant="body1" component="p">
           {props.price}
          </Typography>
        </div>
        <CardActions className={classes.actions}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            onClick={handleAddToCart}
            className={classes.addToCartButton}
          >
            Add to Cart
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
