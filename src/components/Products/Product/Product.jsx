import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  //  console.log(product);

  //  return <div> test </div>

  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media}  image={product.image.url}  title={product.name}></CardMedia>
        <CardContent>
          <div className={classes.CardContent}>
            <Typography variant='h5' gutterbottom>
                {product.name}
            </Typography>
            <Typography variant='h5'>
                {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body1' color='textPrimary'></Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
          <IconButton aria-label="Add To Cart" onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart></AddShoppingCart>
            </IconButton>
        </CardActions>
    </Card>
  );
}

export default Product
