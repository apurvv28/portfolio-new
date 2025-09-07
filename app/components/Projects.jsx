'use client';

import React, { useRef } from 'react';
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
  IconButton,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
  {
    title: 'StudyGenie - AI Powered Revolution for Technical Students',
    description: 'A comprehensive platform offering AI-driven resources, mental support, and enhanced learning experience for technical students.',
    image: '/studygenie.png',
    github: 'https://github.com/apurvv28/studygenie.git',
    roles: ['Project Lead', 'AI Integration', 'Frontend (React)', 'Backend (Node.js)', 'Database Design', 'ML Model for Study Style Prediction'],
    technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'Python'],
  },
  {
    title: 'CareerCompass - Your Ultimate Career Guidance App',
    description: 'An intuitive app providing personalized career advice and skill development resources to help users navigate their professional journey.',
    image: '/cc.png',
    github: 'https://github.com/apurvv28/careercompass.git',
    roles: ['Project Lead', 'Responsive Web App', 'AI Based Recommendation System', 'Firebase Auth', 'ML Based model for Career Path Prediction'],
    technologies: ['Next.js', 'Firebase', 'Scikit-learn', 'Material UI'],
  },
  {
    title: 'V-Marc India Ltd. Website Frontend',
    description: 'A Client project developed during my internship at Bits and Volts Pvt. Ltd., Pune.',
    image: '/vmarc.png',
    link: 'https://www.v-marc.com',
    roles: ['Responsive UI', 'SEO Optimization', 'Next.js + MUI'],
    technologies: ['Next.js', 'Material UI', 'Framer Motion'],
  },
  {
    title: 'NutriJiva Website Frontend',
    description: 'A Client project developed during my internship at Bits and Volts Pvt. Ltd., Pune.',
    image: '/nj.png',
    link: 'https://www.nutrijiva.in',
    roles: ['UI Development', 'Client Collaboration', 'Next.js Deployment'],
    technologies: ['Next.js', 'CSS3', 'JavaScript', 'Vercel'],
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
    scale: 0.9
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  })
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Box
      id="projects"
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
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
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
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
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
              My Projects
              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                  position: 'absolute',
                  bottom: -10,
                  left: '10%',
                  width: '80%',
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
                maxWidth: 600,
                mx: 'auto',
                fontSize: {
                  xs: '1rem',
                  sm: '1.1rem',
                  md: '1.2rem',
                },
              }}
            >
              A collection of my recent work and personal projects
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={10} md={6} lg={5} key={index}>
              <Box
                component={motion.div}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                }}
              >
                <Card
                  sx={{
                    background: 'rgba(35, 36, 43, 0.7)',
                    backdropFilter: 'blur(10px)',
                    color: '#fff',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 106, 0, 0.1)',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    maxWidth: '400px',
                    mx: 'auto',
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
                      boxShadow: '0 12px 28px rgba(106, 17, 203, 0.2)',
                    },
                  }}
                  elevation={0}
                >
                  {/* Project image with overlay */}
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    {/* Image overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        '&:hover': {
                          opacity: 1,
                        },
                      }}
                    >
                      {project.github && (
                        <IconButton
                          href={project.github}
                          target="_blank"
                          sx={{
                            color: '#fff',
                            background: 'rgba(255, 106, 0, 0.8)',
                            '&:hover': {
                              background: '#ff6a00',
                            },
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                      )}
                      {project.link && (
                      <IconButton
                        href={project.link}
                        target="_blank"
                        sx={{
                          color: '#fff',
                          background: 'rgba(106, 17, 203, 0.8)',
                          '&:hover': {
                            background: '#6a11cb',
                          },
                        }}
                      >
                        <OpenInNewIcon />
                      </IconButton>
                      )}
                    </Box>
                  </Box>

                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2.5 }}>
                    {/* Project title */}
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        mb: 1.5,
                        color: '#fff',
                        lineHeight: 1.3,
                        minHeight: '56px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {project.title}
                    </Typography>
                    
                    {/* Project description */}
                    <Typography
                      variant="body2"
                      paragraph
                      sx={{
                        fontSize: '0.9rem',
                        lineHeight: 1.5,
                        color: 'rgba(255, 255, 255, 0.8)',
                        flex: 1,
                        mb: 2,
                        minHeight: '68px',
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies used */}
                    {project.technologies && (
                      <Box sx={{ mb: 1.5 }}>
                        <Typography variant="caption" sx={{ color: '#ff6a00', fontWeight: 600, display: 'block', mb: 0.5 }}>
                          Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <Chip
                              key={i}
                              label={tech}
                              size="small"
                              sx={{
                                color: '#fff',
                                background: 'rgba(106, 17, 203, 0.3)',
                                border: '1px solid rgba(106, 17, 203, 0.5)',
                                fontWeight: 500,
                                fontSize: '0.65rem',
                                height: 22,
                              }}
                            />
                          ))}
                          {project.technologies.length > 3 && (
                            <Chip
                              label={`+${project.technologies.length - 3}`}
                              size="small"
                              sx={{
                                color: '#ff6a00',
                                background: 'rgba(255, 106, 0, 0.1)',
                                border: '1px solid rgba(255, 106, 0, 0.3)',
                                fontWeight: 500,
                                fontSize: '0.65rem',
                                height: 22,
                              }}
                            />
                          )}
                        </Box>
                      </Box>
                    )}

                    {/* Roles & Responsibilities */}
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="caption" sx={{ color: '#ff6a00', fontWeight: 600, display: 'block', mb: 0.5 }}>
                        My Roles:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.roles.slice(0, 2).map((role, i) => (
                          <Chip
                            key={i}
                            label={role}
                            size="small"
                            variant="outlined"
                            sx={{
                              color: '#ff6a00',
                              borderColor: 'rgba(255, 106, 0, 0.3)',
                              background: 'rgba(255, 106, 0, 0.1)',
                              fontWeight: 500,
                              fontSize: '0.65rem',
                              height: 22,
                            }}
                          />
                        ))}
                        {project.roles.length > 2 && (
                          <Chip
                            label={`+${project.roles.length - 2}`}
                            size="small"
                            sx={{
                              color: '#6a11cb',
                              background: 'rgba(106, 17, 203, 0.1)',
                              border: '1px solid rgba(106, 17, 203, 0.3)',
                              fontWeight: 500,
                              fontSize: '0.65rem',
                              height: 22,
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    {/* Action buttons */}
                    <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
                      {project.github && (
                        <Button
                          variant="outlined"
                          href={project.github}
                          target="_blank"
                          startIcon={<GitHubIcon />}
                          sx={{
                            color: '#fff',
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '12px',
                            px: 1.5,
                            py: 0.5,
                            fontSize: '0.75rem',
                            minWidth: 'auto',
                            flex: 1,
                            '&:hover': {
                              borderColor: '#fff',
                              background: 'rgba(255, 255, 255, 0.1)',
                            },
                          }}
                        >
                          Code
                        </Button>
                      )}
                      {project.link && (
                        <Button
                          variant="contained"
                          href={project.link}
                          target="_blank"
                          endIcon={<OpenInNewIcon />}
                          sx={{
                            background: 'linear-gradient(135deg, #6a11cb 0%, #ff6a00 100%)',
                            color: '#fff',
                            fontWeight: 600,
                            borderRadius: '12px',
                            px: 1.5,
                            py: 0.5,
                            fontSize: '0.75rem',
                            minWidth: 'auto',
                            flex: 1,
                            boxShadow: '0 3px 10px rgba(106, 17, 203, 0.3)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #5a0db9 0%, #e65c00 100%)',
                              boxShadow: '0 5px 15px rgba(106, 17, 203, 0.4)',
                            },
                          }}
                        >
                          Demo
                        </Button>
                      )}
                    </Box>
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