'use client';

import React, { useRef } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip, IconButton } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import ForumIcon from '@mui/icons-material/Forum';

const events = [
  {
    title: 'VIT Alumni Tech Conference',
    description: `Organizing a tech conference for all GDG members with alumni's of VIT to gather insights on latest tech trends in industries.`,
    icon: <GroupsIcon />,
    status: 'Planning',
    tags: ['Networking', 'Tech Trends', 'Alumni']
  },
  {
    title: 'Webinar on AI Powered Web Development',
    description: 'A webinar on integrating AI in web development and how AI plays a crucial role in modern web applications.',
    icon: <SchoolIcon />,
    status: 'Planning',
    tags: ['AI', 'Web Dev', 'Workshop']
  },
  {
    title: 'Modern Web Development Trends Seminar',
    description: 'A seminar hosted by GDG VIT in collaboration with Google Developers to discuss the latest trends in web development.',
    icon: <CodeIcon />,
    status: 'Planning',
    tags: ['Web Dev', 'Trends', 'Google']
  },
  {
    title: 'GDG Hackathon',
    description: 'A well planned hackathon event to encourage students to build innovative solutions using Google technologies.',
    icon: <CodeIcon />,
    status: 'Planning',
    tags: ['Hackathon', 'Innovation', 'Google Tech']
  },
  {
    title: 'Tech Talk Series',
    description: 'A series of tech talks by industry experts and alumni to share their experiences and knowledge with students.',
    icon: <ForumIcon />,
    status: 'Planning',
    tags: ['Knowledge Sharing', 'Industry Insights', 'Networking']
  },
];

// Animation variants
const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  })
};

const EventPlanning = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#4caf50';
      case 'Upcoming': return '#2196f3';
      case 'Ongoing': return '#ff9800';
      case 'Planning': return '#9c27b0';
      default: return '#757575';
    }
  };

  return (
    <Box
      id="event-planning"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.05,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(106, 17, 203, 0.4) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(255, 106, 0, 0.4) 0%, transparent 40%)
          `,
          zIndex: 1,
        }}
      />
      
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 6 + 3,
            height: Math.random() * 6 + 3,
            background: i % 3 === 0 
              ? 'rgba(106, 17, 203, 0.6)' 
              : i % 3 === 1 
                ? 'rgba(255, 106, 0, 0.6)' 
                : 'rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 1,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 800,
                letterSpacing: 1,
                fontSize: {
                  xs: '2.2rem',
                  sm: '2.8rem',
                  md: '3.4rem',
                  lg: '4rem',
                },
                background: 'linear-gradient(135deg, #6a11cb 0%, #ff6a00 100%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                position: 'relative',
                display: 'inline-block',
              }}
            >
              Event Planning & Management
              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                  position: 'absolute',
                  bottom: -10,
                  left: '5%',
                  width: '90%',
                  height: 4,
                  background: 'linear-gradient(90deg, transparent, #ff6a00, transparent)',
                  borderRadius: 2,
                  transformOrigin: 'left',
                }}
              />
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: 700,
                mx: 'auto',
                fontSize: {
                  xs: '1rem',
                  sm: '1.1rem',
                  md: '1.2rem',
                },
                mb: 2,
              }}
            >
              Organizing and managing tech events to foster learning and community building
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card
                  sx={{
                    background: 'rgba(35, 36, 43, 0.8)',
                    backdropFilter: 'blur(10px)',
                    color: '#fff',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 106, 0, 0.15)',
                    height: '100%',
                    width: {xs:"91vw",lg: 800},
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #6a11cb, #ff6a00)',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover:before': {
                      transform: 'scaleX(1)',
                    },
                    '&:hover': {
                      boxShadow: '0 12px 28px rgba(106, 17, 203, 0.25)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                  elevation={0}
                >
                  <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Event header with icon and status */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #6a11cb, #ff6a00)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontSize: '24px',
                          mr: 2,
                          flexShrink: 0,
                        }}
                      >
                        {event.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Chip
                          label={event.status}
                          size="small"
                          sx={{
                            background: getStatusColor(event.status),
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            mb: 1,
                            mt: 1.5,
                          }}
                        />
                        
                      </Box>
                    </Box>

                    {/* Event title */}
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        color: '#fff',
                        mb: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      {event.title}
                    </Typography>

                    {/* Event description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.6,
                        mb: 3,
                        flex: 1,
                      }}
                    >
                      {event.description}
                    </Typography>

                    {/* Event tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {event.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            borderColor: 'rgba(255, 106, 0, 0.3)',
                            background: 'rgba(255, 106, 0, 0.1)',
                            fontSize: '0.65rem',
                            height: 22,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        
      </Container>
    </Box>
  );
};

export default EventPlanning;