'use client';

import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Link,
  Button,
  Chip,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

const experiences = [
  {
    title: 'Trainee Java Full Stack Developer',
    company: 'Globeminds Technologies Pvt. Ltd., Pune',
    duration: 'MAY 2024 - JULY 2024',
    description: 'Developed and maintained Java based web applications using Spring Boot, JSP & Servlets.',
    roles: [
      'Assisted in building REST APIs using Spring Boot',
      'Worked on JSP/Servlets for backend rendering',
      'Maintained database integration with MySQL',
    ],
    projects: ['Online Medical System for Medicals', 'E-Notes Application'],
    website: 'https://globemindstechnologies.com/',
    technologies: ['Java', 'Spring Boot', 'JSP', 'Servlets', 'MySQL'],
  },
  {
    title: 'Frontend Developer',
    company: 'Bits and Volts Pvt. Ltd., Pune',
    duration: 'JUNE 2025 - AUGUST 2025',
    description: 'Built responsive user interfaces for real clients with next.js & Material UI.',
    roles: [
      'Developed reusable UI components in Next.js + MUI',
      'Optimized frontend performance with lazy loading',
      'Collaborated with backend team for API integration',
    ],
    projects: ['V-MARC India Website', 'NutriJiva Website', 'Naik Foods Website'],
    website: 'https://bitsandvolts.in/',
    technologies: ['Next.js', 'React', 'Material UI', 'JavaScript', 'CSS'],
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
    x: (index) => index % 2 === 0 ? -40 : 40
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: 0.3 + index * 0.2,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  })
};

const timelineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  }
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: (index) => ({
    scale: 1,
    transition: {
      delay: 0.5 + index * 0.3,
      duration: 0.6,
      type: 'spring',
      stiffness: 200,
      damping: 15,
    }
  })
};

const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.85, 
    y: -30,
    rotateX: 15 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    rotateX: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.85, 
    y: 30,
    rotateX: -15,
    transition: { 
      duration: 0.4, 
      ease: 'easeIn' 
    } 
  },
};

const SmoothTag = ({ text }) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    whileHover={{ 
      scale: 1.03,
      x: 5,
      transition: { type: 'spring', stiffness: 200, damping: 15 }
    }}
    sx={{
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,106,0,0.2)',
      borderRadius: '12px',
      px: 2,
      py: 1.5,
      mb: 1.5,
      fontSize: '0.95rem',
      color: '#ddd',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      position: 'relative',
      overflow: 'hidden',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '4px',
        height: '100%',
        background: 'linear-gradient(to bottom, #ff6a00, #6a11cb)',
      },
    }}
  >
    {text}
  </Box>
);

const Experiences = () => {
  const [open, setOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleOpen = (exp) => {
    setSelectedExp(exp);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelectedExp(null), 300);
  };

  return (
    <Box 
      id="experiences" 
      ref={ref}
      sx={{ 
        py: { xs: 8, md: 12 }, 
        position: 'relative',
        // background: 'linear-gradient(to bottom, #0c0e15 0%, #1a1d29 100%)',
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
      {[...Array(12)].map((_, i) => (
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
              My Experiences
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
              My professional journey and work experiences
            </Typography>
          </motion.div>
        </Box>

        {/* Timeline */}
        <Box
          sx={{
            position: 'relative',
            mx: { xs: 0, md: 8 },
            '&:before': {
              content: '""',
              position: 'absolute',
              left: { xs: 'calc(50% - 2px)', md: '50%' },
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(to bottom, #6a11cb, #ff6a00)',
              borderRadius: '2px',
              transform: { xs: 'none', md: 'translateX(-50%)' },
              transformOrigin: 'top',
            },
          }}
        >
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ transformOrigin: 'top' }}
          >
            <Grid container direction="column" spacing={8}>
              {experiences.map((exp, index) => (
                <Grid item key={index}>
                  <Box
                    component={motion.div}
                    custom={index}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                      alignItems: 'center',
                      position: 'relative',
                    }}
                  >
                    {/* Timeline Dot */}
                    <Box
                      component={motion.div}
                      custom={index}
                      variants={dotVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #6a11cb 0%, #ff6a00 100%)',
                        border: '4px solid #1a1d29',
                        position: 'absolute',
                        left: { xs: 'calc(50% - 12px)', md: '50%' },
                        top: { xs: 0, md: '50%' },
                        transform: { xs: 'none', md: 'translate(-50%, -50%)' },
                        zIndex: 3,
                        boxShadow: '0 0 0 4px rgba(106, 17, 203, 0.3), 0 0 20px rgba(106, 17, 203, 0.5)',
                      }}
                    />
                    
                    {/* Card */}
                    <Box
                      sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: {
                          xs: 'center',
                          md: index % 2 === 0 ? 'flex-end' : 'flex-start',
                        },
                        mb: { xs: 6, md: 0 },
                        mt: { xs: 6, md: 0 },
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      <Card
                        onClick={() => handleOpen(exp)}
                        sx={{
                          minWidth: 280,
                          maxWidth: 420,
                          background: 'rgba(35, 36, 43, 0.7)',
                          backdropFilter: 'blur(10px)',
                          color: '#fff',
                          borderRadius: '20px',
                          border: '1px solid rgba(255, 106, 0, 0.1)',
                          px: 3,
                          py: 2,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            background: 'linear-gradient(90deg, #6a11cb, #ff6a00)',
                            transform: 'scaleX(0)',
                            transformOrigin: 'left',
                            transition: 'transform 0.3s ease',
                          },
                          '&:hover:before': {
                            transform: 'scaleX(1)',
                          },
                          '&:hover': {
                            boxShadow: '0 15px 35px rgba(106, 17, 203, 0.2)',
                            transform: 'translateY(-5px)',
                          },
                        }}
                      >
                        {/* Glow effect on hover */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'radial-gradient(circle at 50% 50%, rgba(106, 17, 203, 0.1) 0%, transparent 50%)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            zIndex: 0,
                          }}
                          className="card-glow"
                        />
                        
                        <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                          {/* Company icon */}
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                            transition={{ delay: 0.7 + index * 0.2, duration: 0.6, type: 'spring' }}
                            style={{
                              width: 50,
                              height: 50,
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #6a11cb 0%, #ff6a00 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: 16,
                              boxShadow: '0 5px 15px rgba(106, 17, 203, 0.3)',
                            }}
                          >
                            <svg 
                              width="24" 
                              height="24" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path 
                                d="M21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7M21 7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7M21 7L12 13L3 7" 
                                stroke="white" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                          
                          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.3 }}>
                            {exp.title}
                          </Typography>
                          <Typography variant="subtitle1" sx={{ color: '#ff6a00', mb: 1, fontWeight: 600 }}>
                            {exp.company}
                          </Typography>
                          <Typography variant="subtitle2" sx={{ color: '#ccc', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <svg 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path 
                                d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" 
                                stroke="#ccc" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              />
                            </svg>
                            {exp.duration}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#bbb', lineHeight: 1.5 }}>
                            {exp.description}
                          </Typography>
                          
                          {/* View Details CTA */}
                          <Box sx={{ mt: 2, textAlign: 'center' }}>
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{
                                color: '#ff6a00',
                                borderColor: 'rgba(255, 106, 0, 0.5)',
                                '&:hover': {
                                  borderColor: '#ff6a00',
                                  backgroundColor: 'rgba(255, 106, 0, 0.1)',
                                },
                                borderRadius: '20px',
                                px: 2,
                                py: 0.5,
                                fontSize: '0.8rem',
                              }}
                            >
                              View Details
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Container>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {open && selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 2000,
              padding: '1rem',
            }}
            onClick={handleClose}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(to bottom, #1e1e1e, #2d2d2d)',
                color: '#fff',
                borderRadius: '20px',
                maxWidth: '700px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255, 106, 0, 0.2)',
                position: 'relative',
              }}
            >
              {/* Close button */}
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: '#fff',
                  background: 'rgba(255, 106, 0, 0.2)',
                  '&:hover': {
                    background: 'rgba(255, 106, 0, 0.3)',
                  },
                  zIndex: 10,
                }}
              >
                <CloseIcon />
              </IconButton>
              
              <Box sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: '#ff6a00' }}>
                  {selectedExp.title}
                </Typography>
                <Typography variant="h6" sx={{ color: '#ff6a00', mb: 1, fontWeight: 600 }}>
                  {selectedExp.company}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#ccc', mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" 
                      stroke="#ccc" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  {selectedExp.duration}
                </Typography>

                <Typography variant="body1" sx={{ color: '#ddd', mb: 4, lineHeight: 1.6 }}>
                  {selectedExp.description}
                </Typography>

                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#ff6a00' }}>
                  Roles & Responsibilities
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
                  {selectedExp.roles.map((role, i) => (
                    <SmoothTag key={i} text={role} />
                  ))}
                </Box>

                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#ff6a00' }}>
                  Projects
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
                  {selectedExp.projects.map((proj, i) => (
                    <SmoothTag key={i} text={proj} />
                  ))}
                </Box>

                {selectedExp.technologies && (
                  <>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#ff6a00' }}>
                      Technologies Used
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                      {selectedExp.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          variant="outlined"
                          sx={{
                            color: '#ff6a00',
                            borderColor: 'rgba(255, 106, 0, 0.3)',
                            background: 'rgba(255, 106, 0, 0.1)',
                            '&:hover': {
                              background: 'rgba(255, 106, 0, 0.2)',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </>
                )}

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                  <Link
                    href={selectedExp.website}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                  >
                    <Button
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(135deg, #6a11cb 0%, #ff6a00 100%)',
                        color: '#fff',
                        borderRadius: '25px',
                        px: 4,
                        py: 1,
                        fontWeight: 600,
                        '&:hover': {
                          background: 'linear-gradient(135deg, #5a0db9 0%, #e65c00 100%)',
                          boxShadow: '0 5px 15px rgba(255, 106, 0, 0.4)',
                        },
                      }}
                    >
                      Visit Company Website
                    </Button>
                  </Link>
                </Box>
              </Box>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Experiences;