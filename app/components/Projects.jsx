'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'StudyGenie - AI Powered Revolution for Technical Students',
    description:
      'A comprehensive platform offering AI-driven resources, mental support, and enhanced learning experience for technical students.',
    image: '/studygenie.png',
    link: 'https://github.com/apurvv28/studygenie.git',
    roles: ['Project Lead','AI Integration', 'Frontend (React)', 'Backend (Node.js)', 'Database Design','ML Model for Study Style Prediction'],
  },
  {
    title: 'CareerCompass - Your Ultimate Career Guidance App',
    description:
      'An intuitive app providing personalized career advice and skill development resources to help users navigate their professional journey.',
    image: '/cc.png',
    link: 'https://github.com/apurvv28/careercompass.git',
    roles: ['Project Lead','Responsive Web App', 'AI Based Recommendation System', 'Firebase Auth', 'ML Based model for Career Path Prediction'],
  },
  {
    title: 'V-Marc India Ltd. Website Frontend',
    description: 'A Client project developed during my internship at Bits and Volts Pvt. Ltd., Pune.',
    image: '/vmarc.png',
    link: 'https://www.v-marc.com',
    roles: ['Responsive UI', 'SEO Optimization', 'Next.js + MUI'],
  },
  {
    title: 'NutriJiva Website Frontend',
    description: 'A Client project developed during my internship at Bits and Volts Pvt. Ltd., Pune.',
    image: '/nj.png',
    link: 'https://www.nutrijiva.in',
    roles: ['UI Development', 'Client Collaboration', 'Next.js Deployment'],
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

const Projects = () => {
  return (
    <Box
      id="projects"
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
            My Projects
          </Typography>
        </motion.div>

        <Grid container spacing={6} justifyContent="center" alignItems="stretch">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
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
                    borderRadius: '24px',
                    boxShadow: '0 4px 24px rgba(255,106,0,0.10)',
                    minWidth: 280,
                    maxWidth: 400,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.04)',
                      boxShadow: '0 8px 32px rgba(255,106,0,0.18)',
                    },
                  }}
                  elevation={0}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      borderTopLeftRadius: '24px',
                      borderTopRightRadius: '24px',
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: {
                          xs: '1.3rem',
                          sm: '1.5rem',
                          md: '1.7rem',
                        },
                        mb: 1,
                        color: '#fff',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      paragraph
                      sx={{
                        fontSize: {
                          xs: '0.98rem',
                          sm: '1.05rem',
                          md: '1.12rem',
                        },
                        lineHeight: 1.5,
                        color: '#bdbdbd',
                        flex: 1,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Roles & Responsibilities Chips */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.roles.map((role, i) => (
                        <Chip
                          key={i}
                          label={role}
                          variant="outlined"
                          sx={{
                            color: '#ff6a00',
                            borderColor: '#ff6a00',
                            fontWeight: 500,
                            fontSize: '0.8rem',
                            background: 'rgba(255,106,0,0.08)',
                          }}
                        />
                      ))}
                    </Box>

                    <Button
                      variant="contained"
                      href={project.link}
                      target="_blank"
                      sx={{
                        mt: 'auto',
                        alignSelf: 'flex-start',
                        background: 'linear-gradient(90deg, #6a11cb 0%, #ff6a00 100%)',
                        color: '#fff',
                        fontWeight: 600,
                        borderRadius: '20px',
                        px: 3,
                        py: 1,
                        boxShadow: '0 2px 8px rgba(255,106,0,0.10)',
                        textTransform: 'none',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #ff6a00 0%, #6a11cb 100%)',
                        },
                      }}
                    >
                      View Project
                    </Button>
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

export default Projects;
