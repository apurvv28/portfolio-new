'use client';

import React, { useRef } from 'react';
import { Box, Typography, Container, Grid, Card, Avatar, Chip } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import GroupsIcon from '@mui/icons-material/Groups';
import ForumIcon from '@mui/icons-material/Forum';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const techStack = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: 90 },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', proficiency: 85 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', proficiency: 80 },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', proficiency: 75 },
  { name: 'HTML & CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', proficiency: 95 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', proficiency: 70 },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', proficiency: 75 },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', proficiency: 85 },
  { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', proficiency: 90 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', proficiency: 80 },
  { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', proficiency: 85 },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', proficiency: 75 },
  { name: 'Strapi', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/strapi/strapi-original.svg', proficiency: 65 },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', proficiency: 70 },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', proficiency: 75 },
];

const soft = [
  { name: 'Communication', icon: <ForumIcon />, level: 'Expert' },
  { name: 'Teamwork', icon: <GroupsIcon />, level: 'Expert' },
  { name: 'Problem-Solving', icon: <PsychologyIcon />, level: 'Advanced' },
  { name: 'Adaptability', icon: <SyncAltIcon />, level: 'Expert' },
  { name: 'Time Management', icon: <AccessTimeIcon />, level: 'Advanced' },
  { name: 'Leadership', icon: <LeaderboardIcon />, level: 'Advanced' },
  { name: 'Creativity', icon: <LightbulbIcon />, level: 'Expert' },
  { name: 'Critical Thinking', icon: <PsychologyIcon />, level: 'Advanced' },
  { name: 'Work Ethic', icon: <EngineeringIcon />, level: 'Expert' },
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
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  })
};

const progressBarVariants = {
  hidden: { width: 0 },
  visible: (width) => ({
    width: `${width}%`,
    transition: {
      delay: 0.5,
      duration: 1.5,
      ease: "easeOut"
    }
  })
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Box
      id="tech-stack"
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
      {[...Array(8)].map((_, i) => (
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
        {/* Technical Skills Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
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
              }}
            >
              Technical Skills
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
              Technologies I work with to bring ideas to life
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {techStack.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={tech.name}>
              <motion.div
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <Card
                  sx={{
                    background: 'rgba(35, 36, 43, 0.8)',
                    color: '#fff',
                    borderRadius: '12px',
                    p: 2,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 106, 0, 0.2)',
                    '&:hover': {
                      boxShadow: '0 8px 20px rgba(106, 17, 203, 0.3)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                  elevation={0}
                >
                  {/* Tech icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  >
                    <Avatar
                      src={tech.icon}
                      alt={tech.name}
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: 'transparent',
                        mb: 1,
                      }}
                      variant="rounded"
                    />
                  </motion.div>
                  
                  {/* Tech name */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: '#fff',
                      mb: 1,
                      fontSize: '0.9rem',
                    }}
                  >
                    {tech.name}
                  </Typography>
                  
                  {/* Proficiency bar */}
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ 
                      width: '100%', 
                      height: 4, 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                      borderRadius: 2, 
                      overflow: 'hidden',
                      position: 'relative',
                      mb: 0.5
                    }}>
                      <motion.div
                        custom={tech.proficiency}
                        variants={progressBarVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, #6a11cb, #ff6a00)',
                          borderRadius: 2,
                          position: 'absolute',
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Box>
                    <Typography variant="caption" sx={{ color: '#ff6a00', fontWeight: 600 }}>
                      {tech.proficiency}%
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Soft Skills Section */}
        <Box sx={{ textAlign: 'center', mt: { xs: 10, md: 12 }, mb: { xs: 6, md: 8 } }}>
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
                background: 'linear-gradient(135deg, #ff6a00 0%, #6a11cb 100%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Soft Skills
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
              The interpersonal skills that complement my technical abilities
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {soft.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={skill.name}>
              <motion.div
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <Card
                  sx={{
                    background: 'rgba(35, 36, 43, 0.8)',
                    color: '#fff',
                    borderRadius: '12px',
                    p: 2,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(106, 17, 203, 0.2)',
                    '&:hover': {
                      boxShadow: '0 8px 20px rgba(255, 106, 0, 0.3)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                  elevation={0}
                >
                  {/* Skill icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    style={{
                      color: '#ff6a00',
                      fontSize: '28px',
                      marginBottom: '8px',
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  {/* Skill name */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: '#fff',
                      mb: 1,
                      fontSize: '0.9rem',
                    }}
                  >
                    {skill.name}
                  </Typography>
                  
                  {/* Skill level */}
                  <Chip
                    label={skill.level}
                    size="small"
                    sx={{
                      background: skill.level === 'Expert' 
                        ? 'linear-gradient(135deg, #6a11cb, #ff6a00)'
                        : 'rgba(255, 106, 0, 0.2)',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.65rem',
                      height: 20,
                    }}
                  />
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechStack;