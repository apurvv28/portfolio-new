'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Link,
  Button,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85, y: -30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.85, y: 30, transition: { duration: 0.3, ease: 'easeIn' } },
};

const SmoothTag = ({ text }) => (
  <Box
    component={motion.div}
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    sx={{
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '12px',
      px: 2,
      py: 1,
      mb: 1,
      fontSize: '0.95rem',
      color: '#ddd',
      boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
    }}
  >
    {text}
  </Box>
);

const Experiences = () => {
  const [open, setOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState(null);

  const handleOpen = (exp) => {
    setSelectedExp(exp);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedExp(null);
  };

  return (
    <Box id="experiences" sx={{ py: 10, background: '#181A20', position: 'relative' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
              color: '#fff',
              mb: 8,
            }}
          >
            My Experiences
          </Typography>
        </motion.div>

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
              background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
              borderRadius: '2px',
              transform: { xs: 'none', md: 'translateX(-50%)' },
            },
          }}
        >
          <Grid container direction="column" spacing={6}>
            {experiences.map((exp, index) => (
              <Grid item key={index}>
                <Box
                  component={motion.div}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                    alignItems: 'center',
                  }}
                >
                  {/* Timeline Dot */}
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                      border: '4px solid #fff',
                      position: 'absolute',
                      left: { xs: 'calc(50% - 12px)', md: '50%' },
                      top: { xs: 0, md: '50%' },
                      transform: { xs: 'none', md: 'translate(-50%, -50%)' },
                      zIndex: 2,
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
                      mb: { xs: 4, md: 0 },
                      mt: { xs: 4, md: 0 },
                      position: { xs: 'relative', md: 'static' }, // Ensure position for zIndex
                      zIndex: { xs: 10, sm: 10, md: 1 }, // High zIndex for mobile/tablet, normal for desktop
                    }}
                  >
                    <Card
                      onClick={() => handleOpen(exp)}
                      sx={{
                        minWidth: 280,
                        maxWidth: 420,
                        background: '#23242b',
                        color: '#fff',
                        borderRadius: '24px',
                        boxShadow: '0 4px 24px rgba(255,106,0,0.10)',
                        px: 3,
                        py: 2,
                        cursor: 'pointer',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          transform: 'scale(1.04)',
                          boxShadow: '0 8px 32px rgba(255,106,0,0.18)',
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#ff6a00', mb: 1 }}>
                          {exp.company}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: '#ccc', mb: 1 }}>
                          {exp.duration}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#bbb' }}>
                          {exp.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Dark Theme Modal */}
      <AnimatePresence>
        {open && selectedExp && (
          <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 2000,
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
                background: '#1e1e1e',
                color: '#fff',
                borderRadius: '20px',
                maxWidth: '600px',
                width: '90%',
                padding: '2rem',
                boxShadow: '0 8px 40px rgba(255,106,0,0.25)',
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                {selectedExp.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#ff6a00', mb: 1 }}>
                {selectedExp.company}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#ccc', mb: 3 }}>
                {selectedExp.duration}
              </Typography>

              <Typography variant="h6" sx={{ mb: 1 }}>
                Roles & Responsibilities
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
                {selectedExp.roles.map((role, i) => (
                  <SmoothTag key={i} text={role} />
                ))}
              </Box>

              <Typography variant="h6" sx={{ mb: 1 }}>
                Projects
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
                {selectedExp.projects.map((proj, i) => (
                  <SmoothTag key={i} text={proj} />
                ))}
              </Box>

              <Box sx={{ mt: 2 }}>
                <Link
                  href={selectedExp.website}
                  target="_blank"
                  rel="noopener"
                  sx={{ color: '#4dabf7', textDecoration: 'underline' }}
                >
                  Visit Company Website
                </Link>
              </Box>

              <Box textAlign="right" sx={{ mt: 3 }}>
                <Button
                  onClick={handleClose}
                  sx={{
                    background: '#ff6a00',
                    color: '#fff',
                    '&:hover': { background: '#e65c00' },
                    borderRadius: '12px',
                    px: 3,
                  }}
                >
                  Close
                </Button>
              </Box>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Experiences;
