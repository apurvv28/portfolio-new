'use client';

import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'block',
        textAlign: 'left',
        position: 'relative',
        overflow: 'hidden',
        background: '#181A20', // Changed to solid dark color
        color: 'white',
        px: 2,
        pt: { xs: '72px', md: '80px' }, // Increase padding to match navbar height
      }}
    >
      {/* Dark overlay for better contrast */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(24,26,32,0.7)', // Slightly lighter overlay for contrast
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 2 }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* LEFT SIDE (Text) */}
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              sx={{
                maxWidth: '700px',
                mt: { xs: 8, md: 8, lg: 0 },
              }}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  fontSize: {
                    xs: '2.2rem',   // Mobile
                    sm: '3rem',     // Tablet
                    md: '3.5rem',   // Small laptop
                    lg: '4rem',     // Large screens
                  },
                  lineHeight: {
                    xs: 1.15,
                    sm: 1.1,
                    md: 1.08,
                    lg: 1.05,
                  },
                }}
              >
                Welcome to My Portfolio
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  mb: 2,
                  fontSize: {
                    xs: '1.1rem',
                    sm: '1.3rem',
                    md: '1.5rem',
                    lg: '1.7rem',
                  },
                  lineHeight: {
                    xs: 1.35,
                    sm: 1.3,
                    md: 1.25,
                    lg: 1.2,
                  },
                }}
              >
                Hi, I'm Apurv, a Full Stack Developer passionate about
                creating amazing web experiences.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: {
                    xs: '0.98rem',
                    sm: '1.05rem',
                    md: '1.12rem',
                    lg: '1.18rem',
                  },
                  lineHeight: {
                    xs: 1.5,
                    sm: 1.45,
                    md: 1.4,
                    lg: 1.35,
                  },
                }}
              >
                Explore my projects, experiences, and skills below.
              </Typography>

              <Button
                variant="contained"
                size="large"
                component={motion.button}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                onClick={() =>
                  document
                    .getElementById('experiences')
                    .scrollIntoView({ behavior: 'smooth' })
                }
                sx={{
                  mt: 3,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '30px',
                  background:
                    'linear-gradient(90deg, #6a11cb 0%, #ff6a00 100%)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <motion.img
              src="/apurv.png" 
              alt="Apurv"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                width: '100%',
                maxWidth: '380px',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
