// components/BackgroundProvider.jsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const BackgroundProvider = ({ children }) => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [morphIndex, setMorphIndex] = useState(0);
  
  // Define SVG paths for morphing animation
  const shapes = [
    "M0,0 C200,200 300,50 500,100 S800,50 1000,0 L1000,700 L0,700 Z",
    "M0,0 C150,250 350,0 500,150 S650,0 1000,0 L1000,700 L0,700 Z",
    "M0,0 C300,100 400,200 500,50 S700,300 1000,0 L1000,700 L0,700 Z",
    "M0,0 C200,300 400,100 500,200 S600,100 1000,0 L1000,700 L0,700 Z"
  ];

  useEffect(() => {
    // Handle mouse movement for parallax effects
    const handleMouseMove = (event) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (event.clientX - left) / width;
        const y = (event.clientY - top) / height;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Set up morphing animation
    const interval = setInterval(() => {
      setMorphIndex((prev) => (prev + 1) % shapes.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [mouseX, mouseY, shapes.length]);

  // Floating particles component
  const FloatingParticles = () => {
    return (
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 12 + 3,
              height: Math.random() * 12 + 3,
              background: i % 3 === 0 
                ? 'rgba(106, 17, 203, 0.6)' 
                : i % 3 === 1 
                  ? 'rgba(255, 106, 0, 0.6)' 
                  : 'rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </Box>
    );
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0c0e15 0%, #1a1d29 100%)',
        color: 'white',
      }}
    >
      {/* Animated gradient background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #6a11cb33 0%, #2575fc33 100%)',
          opacity: 0.3,
          zIndex: 1,
        }}
      />
      
      {/* Animated SVG background with morphing effect */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          opacity: 0.7,
        }}
      >
      </Box>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Content container */}
      <Box sx={{ position: 'relative', zIndex: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default BackgroundProvider;