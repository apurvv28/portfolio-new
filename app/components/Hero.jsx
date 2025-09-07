// components/Hero.jsx
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
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        px: 2,
        //pt: { xs: '72px', md: '80px' },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 3, height: '100%' }}
      >
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }}>
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
                  fontWeight: 800,
                  letterSpacing: 1,
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3.5rem',
                    md: '4rem',
                    lg: '4.5rem',
                  },
                  lineHeight: {
                    xs: 1.15,
                    sm: 1.1,
                    md: 1.08,
                    lg: 1.05,
                  },
                  background: 'linear-gradient(135deg, #6a11cb 0%, #ff6a00 100%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Welcome to My Portfolio
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  mb: 3,
                  fontSize: {
                    xs: '1.2rem',
                    sm: '1.4rem',
                    md: '1.6rem',
                    lg: '1.8rem',
                  },
                  lineHeight: {
                    xs: 1.35,
                    sm: 1.3,
                    md: 1.25,
                    lg: 1.2,
                  },
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                Hi, I'm <Box component="span" sx={{ color: '#ff6a00', fontWeight: 600 }}>Apurv</Box>, a Full Stack Developer passionate about creating amazing web experiences.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: {
                    xs: '1.05rem',
                    sm: '1.1rem',
                    md: '1.15rem',
                    lg: '1.2rem',
                  },
                  lineHeight: {
                    xs: 1.5,
                    sm: 1.45,
                    md: 1.4,
                    lg: 1.35,
                  },
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 4,
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
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.8, delay: 1 }}
                onClick={() => {
                  const experiencesSection = document.getElementById('education');
                  if (experiencesSection) {
                    experiencesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{
                  mt: 3,
                  px: 5,
                  py: 1.8,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  background:
                    'linear-gradient(90deg, #6a11cb 0%, #ff6a00 100%)',
                  color: 'white',
                  boxShadow: '0 10px 30px rgba(106, 17, 203, 0.5)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transition: 'left 0.7s ease',
                  },
                  '&:hover:before': {
                    left: '100%',
                  },
                }}
              >
                Explore My Work
              </Button>
            </Box>
          </Grid>

          {/* RIGHT SIDE (Image) */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'center', position: 'relative' }}>
            <Box>
              {/* Glow effect behind image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '380px',
                  height: '380px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(106, 17, 203, 0.4) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  zIndex: -1,
                }}
              />
              
              <motion.img
                src="/apurv.png"
                alt="Apurv"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  width: '100%',
                  maxWidth: '380px',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;