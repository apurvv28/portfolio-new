'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  // Binary rain effect component
  const BinaryRain = () => {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        opacity: 0.15,
        zIndex: 1
      }}>
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            style={{
              position: 'absolute',
              color: i % 3 === 0 ? '#6a11cb' : i % 3 === 1 ? '#2575fc' : '#00ff9d',
              fontSize: Math.random() * 12 + 10,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              top: `${-10 - Math.random() * 20}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.span>
        ))}
      </div>
    );
  };

  // Hexagon grid component
  const HexagonGrid = () => {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.05,
        zIndex: 2,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(106, 17, 203, 0.1) 0%, transparent 20%),
          repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255, 106, 0, 0.1) 19px, rgba(255, 106, 0, 0.1) 20px),
          repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(106, 17, 203, 0.1) 19px, rgba(106, 17, 203, 0.1) 20px)
        `,
      }} />
    );
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0c0e15 0%, #1a1d29 100%)',
            zIndex: 2000,
            overflow: 'hidden',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {/* Background elements */}
          <BinaryRain />
          <HexagonGrid />
          
          {/* Glowing orb effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            style={{
              position: 'absolute',
              width: '40vh',
              height: '40vh',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(106, 17, 203, 0.4) 0%, rgba(37, 117, 252, 0.2) 40%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            style={{
              position: 'relative',
              width: 160,
              height: 160,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            {/* Outer tech ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '2px solid rgba(106, 17, 203, 0.3)',
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
              }}
            />
            
            {/* Middle ring with dots */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                border: '1px dashed rgba(255, 106, 0, 0.4)',
              }}
            />
            
            {/* Inner rotating element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '60%',
                height: '60%',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, transparent, #6a11cb, #2575fc, #ff6a00, transparent)',
                opacity: 0.5,
                filter: 'blur(8px)',
              }}
            />
            
            {/* Central hub */}
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'rgba(24, 26, 32, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(106, 17, 203, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(106, 17, 203, 0.3)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Pulsing center effect */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #ff6a00, #6a11cb)',
                  boxShadow: '0 0 15px #ff6a00',
                }}
              />
              
              {/* Glowing particles around center */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: i % 2 === 0 ? '#6a11cb' : '#ff6a00',
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translate(50px) rotate(-${i * 45}deg)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Loading text with tech font */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              marginTop: 40,
              textAlign: 'center',
              zIndex: 10,
            }}
          >
            <h2 style={{
              color: '#fff',
              fontWeight: 700,
              fontSize: 28,
              marginBottom: 10,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textShadow: '0 0 10px rgba(106, 17, 203, 0.7)',
            }}>
              PORTFOLIO INITIALIZATION
            </h2>
            
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              style={{
                color: '#00ff9d',
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: '0.1em',
                fontFamily: 'monospace',
                marginBottom: 30,
              }}
            >
              LOADING RESOURCES...
            </motion.p>
          </motion.div>
          
          {/* Tech-style progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 300 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              width: 300,
              height: 12,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 10,
              overflow: 'hidden',
              border: '1px solid rgba(106, 17, 203, 0.3)',
              boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
              zIndex: 10,
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 50%, #ff6a00 100%)',
                borderRadius: 10,
                boxShadow: '0 0 10px rgba(106, 17, 203, 0.7)',
              }}
            />
            
            {/* Progress percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                position: 'absolute',
                top: '100%',
                marginTop: 10,
                color: '#fff',
                fontFamily: 'monospace',
                fontSize: 14,
                fontWeight: 600,
                width: '100%',
                textAlign: 'center',
              }}
            >
              {Math.min(100, Math.round(progress))}%
            </motion.div>
          </motion.div>
          
          {/* Scanning line effect */}
          <motion.div
            animate={{ y: ['0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #ff6a00, transparent)',
              boxShadow: '0 0 10px #ff6a00',
              opacity: 0.5,
              zIndex: 5,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;