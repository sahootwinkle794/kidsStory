// src/components/CustomButton.js
import React from 'react';
import { Box } from '@mui/material';

const CustomButton = ({ href, text }) => {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        display: 'inline-block',
        position: 'relative',
        textDecoration: 'none',
        p: 1,
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '50%',
          height: '50%',
          backgroundColor: 'black',
          borderRadius: '50px',
          padding: '8px 20px',
          zIndex: '0',
          bottom: 5,
          right: 15,
          transition: 'transform 0.3s, background-color 0.3s',
          transform: 'translate(50%, 50%)',
        },
        '& .button-content': {
          position: 'relative',
          top:'20px',
          left: '40px',
          display: 'inline-block',
          backgroundColor: 'white',
          color: '#673ab7',
          borderRadius: '50px',
          padding: '10px 20px',
          zIndex: '1',
          transition: 'transform 0.3s, background-color 0.3s',
        },
        '&:hover .button-content': {
          backgroundColor: 'orange',
          transform: 'translate(-32%, -32%)',
        },
        '&:hover::before': {
          transform: 'translate(-2%, -2%)',
        },
      }}
    >
      <span className="button-content">{text}</span>
    </Box>
  );
};

export default CustomButton;
