'use client';

import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'VIT Alumni Tech Conference',
    description: `Organized a tech conference for all GDG members with alumni's of VIT to gather insights on latest tech trends in industries.`,
  },
  {
    title: 'Webinar on AI Powered Web Development for FY & SY Students',
    description:
      'Conducted a webinar on integrating AI in web development and how AI plays a crucial role in modern web applications.',
  },
  {
    title: 'Modern Web Development Trends Seminar',
    description:
      'A seminar which will be hosted by GDG VIT in collaboration with Google Developers to discuss the latest trends in web development.',
  },
  {
    title: 'GDG Hackathon',
    description:
      'A well planned hackathon event to encourage students to build innovative solutions using Google technologies.',
  },
  {
    title: 'Tech Talk Series',
    description:
      'A series of tech talks by industry experts and alumni to share their experiences and knowledge with students.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.8, ease: 'easeOut' },
  }),
};

const EventPlanning = () => {
  return (
    <Box
      id="event-planning"
      sx={{
        py: 10,
        background: '#181A20',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            textAlign="center"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem',
                lg: '3.5rem',
              },
              color: '#fff',
              mb: 8,
            }}
          >
            Event Planning
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {events.map((event, index) => (
            <Grid
              item
              xs={12} // 1 per row on mobile
              sm={6}  // 2 per row on tablets
              md={4}  // 3 per row on laptops/desktops
              key={index}
              sx={{ display: 'flex' }}
            >
              <Box
                component={motion.div}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'stretch',
                }}
              >
                <Card
                  sx={{
                    background: '#23242b',
                    color: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(255,106,0,0.10)',
                    maxWidth: 300,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0 8px 28px rgba(255,106,0,0.18)',
                    },
                  }}
                  elevation={0}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: {
                          xs: '1.1rem',
                          sm: '1.2rem',
                          md: '1.3rem',
                        },
                        mb: 1,
                        color: '#ff6a00',
                      }}
                    >
                      {event.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: {
                          xs: '0.85rem',
                          sm: '0.9rem',
                          md: '0.95rem',
                        },
                        lineHeight: 1.5,
                        color: '#e0e0e0',
                      }}
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EventPlanning;
