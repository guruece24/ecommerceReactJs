import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//                  {id: 1, name: 'Shoes', description: 'Running Shoes.', price:'$5', image:'https://media.istockphoto.com/photos/front-view-of-mock-up-laptop-computer-with-blank-screen-notebook-picture-id1294996142?b=1&k=20&m=1294996142&s=170667a&w=0&h=GejpozVtt2OsOcVwwCPqLqFGFZws6pdgqIJJtlYPsvo='},
//                  {id: 2, name: 'Macbook', description: 'Apple macbook.', price:'$10', image:'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'},
// ];   

const Products = ({ products, onAddToCart }) =>
{
  const classes = useStyles();

  return (
  <main className={classes.content}>
    <div className={classes.toolbar}></div>
    <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={ onAddToCart }></Product>
          </Grid>
        ))}
    </Grid>
  </main>
  );
}

export default Products;