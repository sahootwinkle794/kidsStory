// src/components/Footer.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, backgroundColor: 'primary.dark', color: 'white', mt: 4 }}>
      <Typography variant="body1" align="center">
        &copy; 2024 My E-Commerce. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
