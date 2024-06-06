// src/components/Banner.js
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CustomButton from './CustomButton';  // Import the custom button

// Sample images for the carousel
import bannerImage1 from '../images/banner1.png';
import bannerImage3 from '../images/banner3.jpg';
import bannerImage4 from '../images/banner4.webp';
import bannerImage5 from '../images/banner5.webp';

const images = [bannerImage1, bannerImage3, bannerImage4, bannerImage5];

const Banner = () => {
  const carouselItems = images.map((image, index) => (
    <img key={index} src={image} alt={`Banner ${index + 1}`} style={{ width: '100%', height: '450px', borderRadius: '20px' }} />
  ));

  return (
    <Box sx={{ p: 2, backgroundColor: '#673ab7', color: 'white' }}>
      <Grid container alignItems="center">
        <Grid item xs={12} md={4} sx={{ textAlign: 'left', pr: 2 }}>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            sx={{ fontFamily: "'Baloo Chettan 2', display", fontWeight: 700 }}
          >
            Welcome to Our Website
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            gutterBottom 
            sx={{ fontFamily: "'Baloo Chettan 2', display", fontWeight: 700 }}
          >
            Discover amazing products and services.
          </Typography>
          <CustomButton href="https://wdtcutie.wpengine.com/shop/" text="Shop Now" />
        </Grid>
        <Grid item xs={12} md={8}>
          <Carousel autoPlay={true}>
            {carouselItems}
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
