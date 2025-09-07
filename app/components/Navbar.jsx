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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

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
    { label: 'Achievements', id: 'achievements' },
  ];

  // Dropdown menu items
  const exploreItems = [
    { label: 'Education', id: 'education' },
    { label: 'Experiences', id: 'experiences' },
    { label: 'Technical Skills', id: 'tech-stack' },
    { label: 'Projects', id: 'projects' },
    { label: 'Achievements', id: 'achievements' },
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
          background: '#23242b',
          color: '#fff',
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
              color: '#fff',
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
            <>
            <Button
                color="inherit"
                onClick={() => scrollToSection('home')}
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
                Home
              </Button>
              <Button
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
                onClick={handleMenuOpen}
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
                Explore
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                sx={{
                  '& .MuiPaper-root': {
                    background: '#23242b',
                    color: '#fff',
                    borderRadius: 2,
                    boxShadow: '0 4px 24px rgba(255,106,0,0.10)',
                  },
                }}
              >
                {exploreItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      handleMenuClose();
                    }}
                    sx={{
                      fontWeight: 500,
                      '&:hover': {
                        background: 'rgba(255,106,0,0.08)',
                        color: '#ff6a00',
                      },
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
              {/* Other nav items */}
              
              <Button
                color="inherit"
                onClick={() => scrollToSection('event-planning')}
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
                Event Planning
              </Button>
              {/* <Button
                color="inherit"
                onClick={() => scrollToSection('contact')}
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
                Contact
              </Button> */}
            </>
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
