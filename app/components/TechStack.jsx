'use client';

import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import GroupsIcon from '@mui/icons-material/Groups'; // Teamwork
import ForumIcon from '@mui/icons-material/Forum'; // Communication
import PsychologyIcon from '@mui/icons-material/Psychology'; // Problem-Solving, Critical Thinking
import LightbulbIcon from '@mui/icons-material/Lightbulb'; // Creativity
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Time Management
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'; // Adaptability
import LeaderboardIcon from '@mui/icons-material/Leaderboard'; // Leadership
import EngineeringIcon from '@mui/icons-material/Engineering'; // Work Ethic
import SyncAltIcon from '@mui/icons-material/SyncAlt'; // Adaptability

const techStack = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'HTML & CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Strapi', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/strapi/strapi-original.svg' },
  { name: 'Java & Springboot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
];

const soft = [
  { name: 'Communication', icon: <ForumIcon /> },
  { name: 'Teamwork', icon: <GroupsIcon /> },
  { name: 'Problem-Solving', icon: <PsychologyIcon /> },
  { name: 'Adaptability', icon: <SyncAltIcon /> },
  { name: 'Time Management', icon: <AccessTimeIcon /> },
  { name: 'Leadership', icon: <LeaderboardIcon /> },
  { name: 'Creativity', icon: <LightbulbIcon /> },
  { name: 'Critical Thinking', icon: <PsychologyIcon /> },
  { name: 'Work Ethic', icon: <EngineeringIcon /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const TechStack = () => {
  return (
    <Box
      id="tech-stack"
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
              mb: 6,
            }}
          >
            My Technical Skills
          </Typography>
        </motion.div>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {techStack.map((tech, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={tech.name} sx={{ display: 'flex' }}>
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
                    background: '#23242b', // Dark card background
                    color: '#fff',         // White text
                    borderRadius: '20px',
                    boxShadow: '0 4px 24px rgba(255,106,0,0.10)', // Subtle orange glow
                    minWidth: 180,
                    maxWidth: 260,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 4,
                    px: 2,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.04)',
                      boxShadow: '0 8px 32px rgba(255,106,0,0.18)',
                    },
                  }}
                  elevation={0}
                >
                  <Avatar
                    src={tech.icon}
                    alt={tech.name}
                    sx={{
                      width: 56,
                      height: 56,
                      mb: 2,
                      bgcolor: 'transparent',
                    }}
                    variant="rounded"
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: {
                        xs: '1.05rem',
                        sm: '1.15rem',
                        md: '1.18rem',
                      },
                      color: '#fff', // White for heading
                      textAlign: 'center',
                    }}
                  >
                    {tech.name}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
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
              mt: 8,
              mb: 6,
            }}
          >
            My Soft Skills
          </Typography>
        </motion.div>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {soft.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name} sx={{ display: 'flex' }}>
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
                    background: '#23242b', // Dark card background
                    color: '#fff',         // White text
                    borderRadius: '20px',
                    boxShadow: '0 4px 24px rgba(255,106,0,0.10)', // Subtle orange glow
                    minWidth: 180,
                    maxWidth: 260,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 2,
                    px: 2,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.04)',
                      boxShadow: '0 8px 32px rgba(255,106,0,0.18)',
                    },
                  }}
                  elevation={0}
                >
                  <CardContent sx={{ p: 0, textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: {
                          xs: '1.05rem',
                          sm: '1.15rem',
                          md: '1.18rem',
                        },
                        color: '#fff', // White for heading
                      }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: {
                          xs: '1.05rem',
                          sm: '1.15rem',
                          md: '1.18rem',
                        },
                        color: '#ff6a00', // Accent for icon
                      }}
                    >
                      {skill.icon}
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

export default TechStack;