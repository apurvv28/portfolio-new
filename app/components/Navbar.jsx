'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerNavbar from './DrawerNavbar';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Education', id: 'education' },
    { label: 'Experiences', id: 'experiences' },
    { label: 'Projects', id: 'projects' },
    { label: 'Technical Skills', id: 'tech-stack' },
    { label: 'Event Planning', id: 'event-planning' },
  ];

  return (
    <>
      {/* Gradient background overlay */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '70px',
          zIndex: 1100,
          
        }}
      />
      <AppBar
        position="fixed"
        sx={{
          background: '#ffffff', // Darker shade for navbar
    color: 'black',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: 1,
              color: 'black',
            }}
          >
            Apurv's Portfolio
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                transition: '0.3s ease',
                '&:hover': { transform: 'scale(1.1)', color: '#ff6a00' },
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            navItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
                sx={{
                  mx: 1,
                  fontWeight: 500,
                  textTransform: 'none',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#ff6a00',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>
      <DrawerNavbar
        open={drawerOpen}
        onClose={handleDrawerToggle}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Navbar;
