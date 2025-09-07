'use client';

import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';

const DrawerNavbar = ({ open, onClose, navItems, scrollToSection }) => {
  const handleItemClick = (id) => {
    scrollToSection(id);
    onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 250,
          background: '#23242b',
          color: 'white',
        },
      }}
    >
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(item.id)}
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    transform: 'translateX(5px)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    letterSpacing: 0.5,
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerNavbar;
