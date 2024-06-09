// src/components/ProductList.js
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const products = [
  { id: 1, name: 'Kids Story Book', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

// Array of colors for the cards
const cardColors = ['#ffeb3b', '#ffcc80', '#80deea'];

const FancyCard = styled(Card)(({ theme, colorIndex }) => ({
  height: 400, // Set height to 400px
  borderRadius: 15,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  border: '3px dashed #d32f2f', // Dashed border with red color
  backgroundColor: cardColors[colorIndex % cardColors.length], // Use a different color for each card
  '& .MuiCardContent-root': {
    textAlign: 'center',
    borderRadius: '0 0 15px 15px', // Rounded bottom corners for content area
  },
  '& .MuiTypography-h5': {
    color: '#d32f2f', // Red color for the title text
  },
  '& .MuiTypography-body2': {
    color: '#757575', // Grey color for the price text
  },
}));

const ProductList = () => {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <FancyCard colorIndex={index}>
            <CardContent>
              <Typography variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
            </CardContent>
          </FancyCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
