'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: 'center',
        background: '#181A20',
        color: '#e0e0e0',
        borderTop: '1px solid rgba(255, 106, 0, 0.2)',
      }}
    >
      <Typography variant="body2">
        Made with ❤️ by <span style={{ color: '#ff6a00', fontWeight: 600 }}>Apurv</span>
      </Typography>
    </Box>
  );
};

export default Footer;
