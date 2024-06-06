// src/components/ProductList.js
import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const products = [
  { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', price: '$10' },
  { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', price: '$20' },
  { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', price: '$30' },
];

const ProductList = () => {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
