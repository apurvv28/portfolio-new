'use client';

import React, { useRef } from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { motion, useInView } from 'framer-motion';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering (Artificial Intelligence)',
    institution: 'Vishwakarma Institute of Technology, Pune',
    duration: '2025 - 2028',
    description: 'SY SEDA Student',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Government Polytechnic, Pune',
    duration: '2022 - 2025',
    description: 'Percentage: 93.27%.',
  },
  {
    degree: 'SSC (10th)',
    institution: `St. Mary's English School, Pusad`,
    duration: '2021 - 2022',
    description: 'Percentage: 96.60%.',
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
    rotateX: -15
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  })
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <Box
      id="education"
      ref={ref}
      sx={{
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        // background: 'linear-gradient(to bottom, #0c0e15 0%, #1a1d29 100%)',
      }}
    >
      {/* Animated background elements */}
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
      {[...Array(8)].map((_, i) => (
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
              My Education
              {/* Animated underline */}
              <motion.div
                variants={glowVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{
                  position: 'absolute',
                  bottom: -10,
                  left: '10%',
                  width: '80%',
                  height: 4,
                  background: 'linear-gradient(90deg, transparent, #ff6a00, transparent)',
                  borderRadius: 2,
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
              My academic journey and qualifications
            </Typography>
          </motion.div>
        </Box>
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center',
            alignItems: 'stretch',
            width: '100%',
          }}
        >
          {education.map((edu, index) => (
            <Box
              key={index}
              component={motion.div}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              sx={{
                flex: 1,
                minWidth: { xs: 260, sm: 300, md: 320 },
                maxWidth: 350,
                display: 'flex',
                alignItems: 'stretch',
                perspective: '1000px',
              }}
            >
              <Card
                sx={{
                  background: 'rgba(35, 36, 43, 0.7)',
                  backdropFilter: 'blur(10px)',
                  color: '#fff',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 106, 0, 0.1)',
                  px: 3,
                  py: 2,
                  minHeight: 240,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
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
                  },
                }}
                elevation={0}
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
                  {/* Degree icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6, type: 'spring' }}
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
                        d="M12 14L21 9L12 4L3 9L12 14Z" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M12 14V22" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M9 18V12.5C9 11.9477 9.44772 11.5 10 11.5H14C14.5523 11.5 15 11.9477 15 12.5V18" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: {
                        xs: '1.2rem',
                        sm: '1.4rem',
                        md: '1.6rem',
                      },
                      mb: 2,
                      color: '#fff',
                      lineHeight: 1.3,
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      fontSize: {
                        xs: '1rem',
                        sm: '1.1rem',
                        md: '1.15rem',
                      },
                      mb: 1.5,
                      color: '#ff6a00',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" 
                        stroke="#ff6a00" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" 
                        stroke="#ff6a00" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                    {edu.institution}
                  </Typography>
                  
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 500,
                      fontSize: {
                        xs: '0.95rem',
                        sm: '1.05rem',
                        md: '1.1rem',
                      },
                      mb: 1.5,
                      color: '#e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" 
                        stroke="#e0e0e0" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                    {edu.duration}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: '0.95rem',
                        sm: '1.02rem',
                        md: '1.08rem',
                      },
                      lineHeight: 1.5,
                      color: '#bdbdbd',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M12 16L16 12M12 16L8 12M12 16V8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                        stroke="#bdbdbd" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                    {edu.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Education;