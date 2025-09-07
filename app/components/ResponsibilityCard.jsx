'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, Container, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const ResponsibilityCard = () => {
  const responsibilities = [
    "Leading the Web Dev Team",
    "Organizing Hackathons",
    "Conducting Tech Workshops",
    "Collaborating with Designers & Developers"
  ];

  const futureGoals = [
    "Integrating AI into GDG projects",
    "Building mentorship programs for juniors",
    "Expanding open-source contributions"
  ];

  return (
    <Box
      sx={{
        py: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Card
            sx={{
              background: '#23242b',
              color: '#fff',
              borderRadius: '24px',
              boxShadow: '0 4px 20px rgba(255,106,0,0.12)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 8px 28px rgba(255,106,0,0.2)',
              },
            }}
            elevation={0}
          >
            <CardContent>
              {/* Heading */}
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                  color: '#ff6a00',
                  mb: 2,
                  textAlign: 'center',
                }}
              >
                Web Dev Head – GDG on Campus VIT
              </Typography>

              {/* Responsibilities */}
              <Typography
                variant="body1"
                sx={{ color: '#e0e0e0', mb: 2, textAlign: 'center' }}
              >
                My responsibilities as a web dev head at GDG on campus VIT
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1} justifyContent="center" mb={3}>
                {responsibilities.map((resp, i) => (
                  <Chip
                    key={i}
                    label={resp}
                    sx={{
                      background: 'linear-gradient(90deg,#6a11cb,#ff6a00)',
                      color: '#fff',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Stack>

              {/* Future Vision */}
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: '#ff6a00', mb: 1, textAlign: 'center' }}
              >
                Future Goals
              </Typography>
              <Stack direction="column" spacing={1} sx={{ mb: 3 }}>
                {futureGoals.map((goal, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    sx={{ color: '#bdbdbd', textAlign: 'center' }}
                  >
                    • {goal}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default ResponsibilityCard;
